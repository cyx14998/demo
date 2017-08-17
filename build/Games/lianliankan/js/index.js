/**
    * js连连看完美注释版
    **/

// title="算法与数据结构知识库" target='_blank' style='color:#df3434;
// font-weight:bold;'>算法</a>部分,与表现层无关 全局变量
var X = 10; //总行数
var Y = 11; //总列数
var types = 20; //图形种类
var count = 0; // 分数
var time = 60; //时间
var lastTime = ''; // 定时器

//布局矩阵 为了算法方便，矩阵的第一行，第一列，最后一行，最后一列都标注为0，天然通路。
var arr = new Array(Y);
var tbl; //显示布局的table元素

var p1 = null; //搜索路径用的第1个点的坐标
var p2 = null; //搜索路径用的第2个点的坐标
var e1 = null; //第1个点对应的元素
var e2 = null; //第2个点对应的元素
var type = getUrlParam('type') ? parseInt(getUrlParam('type')): 2;// 类型: 1、限时60  2、 完成总时间

var IMG_PATH = 'img/'; //图片基路径
//判断游戏初始化配置是否ok
// if (WeiAppConfig && WeiAppConfig.AwardList && WeiAppConfig.AwardList.length && WeiAppConfig.StatusCode != 2 && WeiAppConfig.StatusCode != 3) {
//     init();
// }
// $('.header').slideUp('slow');
// $('.startGame').hide('slow');
// 
$('.J-start').on('click',function(){
    $('.beforeGame').hide('slow');
    $('.gameBot').slideUp('slow');
    $(".header .count").slideDown('slow');
    $(".header .time").slideDown('slow');
    $(".startGame").show('slow');
    init();
})
$('.J-again').on('click',function(){
    window.location.reload();
})

//路径搜索，给出两个点，搜索出通路 通路用可连通的点表示
function getPath(p1, p2) {
    //开始搜索前对p1,p2排序，使p2尽可能的在p1的右下方。 这样做可以简化算法
    if (p1.x > p2.x) {
        var t = p1;
        p1 = p2;
        p2 = t;
    } else if (p1.x == p2.x) {
        if (p1.y > p2.y) {
            var t = p1;
            p1 = p2;
            p2 = t;
        }
    }
    //通过分析连连看中两点之间的位置关系，逐步由简到难分析每一种类型 第一种类型， 两点是否在一条直线上，而且两点之间可直线连通
    if ((onlineY(p1, p2) || onlineX(p1, p2)) && hasLine(p1, p2)) {
        status = 'type 1';
        return [p1, p2];
    }
    //第二种类型， 如果两点中任何一个点被全包围，则不通。
    if (!isEmpty({
        x: p1.x,
        y: p1.y + 1
    }) && !isEmpty({
        x: p1.x,
        y: p1.y - 1
    }) && !isEmpty({
        x: p1.x - 1,
        y: p1.y
    }) && !isEmpty({
        x: p1.x + 1,
        y: p1.y
    })) {
        status = 'type 2';
        return null;
    }
    if (!isEmpty({
        x: p2.x,
        y: p2.y + 1
    }) && !isEmpty({
        x: p2.x,
        y: p2.y - 1
    }) && !isEmpty({
        x: p2.x - 1,
        y: p2.y
    }) && !isEmpty({
        x: p2.x + 1,
        y: p2.y
    })) {
        status = 'type 2';
        return null;
    }
    //第三种类型， 两点在一条直线上，但是不能直线连接
    var pt0,
        pt1,
        pt2,
        pt3;
    //如果都在x轴，则自左至右扫描可能的路径， 每次构造4个顶点pt0, pt1, pt2, pt3，然后看他们两两之间是否连通
    if (onlineX(p1, p2)) {
        for (var i = 0; i < Y; i++) {
            if (i == p1.y) {
                continue;
            }
            pt0 = p1;
            pt1 = {
                x: p1.x,
                y: i
            };
            pt2 = {
                x: p2.x,
                y: i
            };
            pt3 = p2;
            //如果顶点不为空，则该路不通。
            if (!isEmpty(pt1) || !isEmpty(pt2)) {
                continue;
            }
            if (hasLine(pt0, pt1) && hasLine(pt1, pt2) && hasLine(pt2, pt3)) {
                status = '(x:' + pt0.x + ',y:' + pt0.y + '), (x:' + pt1.x + ',y:' + pt1.y + '), (x:' + pt2.x + ',y:' + pt2.y + '), (x:' + pt3.x + ',y:' + pt3.y + ')';
                return [pt0, pt1, pt2, pt3];
            }
        }
    }
    //如果都在y轴，则自上至下扫描可能的路径， 每次构造4个顶点pt0, pt1, pt2, pt3，然后看他们两两之间是否连通
    if (onlineY(p1, p2)) {
        for (var j = 0; j < X; j++) {
            if (j == p1.x) {
                continue;
            }
            pt0 = p1;
            pt1 = {
                x: j,
                y: p1.y
            };
            pt2 = {
                x: j,
                y: p2.y
            };
            pt3 = p2;
            //如果顶点不为空，则该路不通。
            if (!isEmpty(pt1) || !isEmpty(pt2)) {
                continue;
            }
            if (hasLine(pt0, pt1) && hasLine(pt1, pt2) && hasLine(pt2, pt3)) {
                status = '(x:' + pt0.x + ',y:' + pt0.y + '), (x:' + pt1.x + ',y:' + pt1.y + '), (x:' + pt2.x + ',y:' + pt2.y + '), (x:' + pt3.x + ',y:' + pt3.y + ')';
                return [pt0, pt1, pt2, pt3];
            }
        }
    }
    //第四种类型， 两点不在一条直线上。 先纵向扫描可能的路径 同样，每次构造4个顶点，看是否可通
    for (var k = 0; k < Y; k++) {
        pt0 = p1;
        pt1 = {
            x: p1.x,
            y: k
        };
        pt2 = {
            x: p2.x,
            y: k
        };
        pt3 = p2;
        status = '(x:' + pt0.x + ',y:' + pt0.y + '), (x:' + pt1.x + ',y:' + pt1.y + '), (x:' + pt2.x + ',y:' + pt2.y + '), (x:' + pt3.x + ',y:' + pt3.y + ')';
        //特殊情况，如果pt0和pt1重合
        if (equal(pt0, pt1)) {
            //如果pt2不为空，则此路不通
            if (!isEmpty(pt2)) {
                continue;
            }
            if (hasLine(pt1, pt2) && hasLine(pt2, pt3)) {
                return [pt1, pt2, pt3];
            } else {
                continue//特殊情况，如果pt2和pt3重合;
            }
        } else if (equal(pt2, pt3)) {
            //如果pt1不为空，则此路不通
            if (!isEmpty(pt1)) {
                continue;
            }
            if (hasLine(pt0, pt1) && hasLine(pt1, pt2)) {
                return [pt0, pt1, pt2];
            } else {
                continue;
            }
        }
        //如果pt1, pt2都不为空,则不通
        if (!isEmpty(pt1) || !isEmpty(pt2)) {
            continue;
        }
        if (hasLine(pt0, pt1) && hasLine(pt1, pt2) && hasLine(pt2, pt3)) {
            return [pt0, pt1, pt2, pt3];
        }
    }
    //横向扫描可能的路径
    for (var k = 0; k < X; k++) {
        pt0 = p1;
        pt1 = {
            x: k,
            y: p1.y
        };
        pt2 = {
            x: k,
            y: p2.y
        };
        pt3 = p2;
        status = '(x:' + pt0.x + ',y:' + pt0.y + '), (x:' + pt1.x + ',y:' + pt1.y + '), (x:' + pt2.x + ',y:' + pt2.y + '), (x:' + pt3.x + ',y:' + pt3.y + ')';
        if (equal(pt0, pt1)) {
            if (!isEmpty(pt2)) {
                continue;
            }
            if (hasLine(pt1, pt2) && hasLine(pt2, pt3)) {
                return [pt1, pt2, pt3];
            }
        }
        if (equal(pt2, pt3)) {
            if (!isEmpty(pt1)) {
                continue;
            }
            if (hasLine(pt0, pt1) && hasLine(pt1, pt2)) {
                return [pt0, pt1, pt2];
            }
        }
        if (!isEmpty(pt1) || !isEmpty(pt2)) {
            continue;
        }
        if (hasLine(pt0, pt1) && hasLine(pt1, pt2) && hasLine(pt2, pt3)) {
            return [pt0, pt1, pt2, pt3];
        }
    }
    //status='type4';
    return null;
    /********** end type 4 **************/
}

function equal(p1, p2) {
    return ((p1.x == p2.x) && (p1.y == p2.y));
}

function onlineX(p1, p2) {
    return p1.y == p2.y;
}

function onlineY(p1, p2) {
    return p1.x == p2.x;
}

function isEmpty(p) {
    return (arr[p.y][p.x] == 0);
}

function hasLine(p1, p2) {
    if (p1.x == p2.x && p1.y == p2.y) {
        return true;
    }
    if (onlineY(p1, p2)) {
        var i = p1.y > p2.y
            ? p2.y
            : p1.y;
        i = i + 1;
        var max = p1.y > p2.y
            ? p1.y
            : p2.y;
        for (; i < max; i++) {
            var p = {
                x: p1.x,
                y: i
            };
            if (!isEmpty(p)) {
                break
            }
        }
        if (i == max) {
            return true;
        }
        return false;
    } else if (onlineX(p1, p2)) {
        var j = p1.x > p2.x
            ? p2.x
            : p1.x;
        j = j + 1;
        var max = p1.x > p2.x
            ? p1.x
            : p2.x;
        for (; j < max; j++) {
            var p = {
                x: j,
                y: p1.y
            };
            if (!isEmpty(p)) {
                break
            }
        }
        if (j == max) {
            return true;
        }
        return false;
    }
}
/**
    * js连连看完美注释版
    * 转载请注明出处
    **/
// 以下部分为表现层部分,包括绘图, 初始化矩阵, 绑定鼠标事件... function $(id) { return
// document.getElementById(id) }

var t1,
    t2; //测试用
//初始化
function init() {
    //构造图片库
    var imgs = new Array(30);
    for (var i = 1; i <= 30; i++) {
        imgs[i] = 'safa_' + i + '.jpg';
    }
    tbl = $('#tbl')[0];
    //构造table
    for (var row = 0; row < Y - 2; row++) {
        var tr = tbl.insertRow(-1);
        for (var col = 0; col < X - 2; col++) {
            var td = tr.insertCell(-1);
        }
    }
    //构造矩阵
    for (var i = 0; i < Y; i++) {
        arr[i] = new Array(X);
        for (var j = 0; j < X; j++) {
            arr[i][j] = 0;
        }
    }
    //game类型判断
    gameType();
    var total = (X - 2) * (Y - 2);
    var tmp = new Array(total); //产生随机位置用
    for (var i = 0; i < total; i++) {
        tmp[i] = 0;
    }
    for (var i = 0; i < total; i++) {
        if (tmp[i] == 0) {
            var t = Math.floor(Math.random() * types) + 1;
            tmp[i] = t;
            while (true) {
                var c = Math.floor(Math.random() * (total - i)) + i;
                if (tmp[c] == 0) {
                    tmp[c] = t;
                    break;
                }
            }
        }
    }
    var c = 0;
    for (var i = 1; i < Y - 1; i++) {
        for (var j = 1; j < X - 1; j++) {
            arr[i][j] = tmp[c++];
            tbl.rows[i - 1].cells[j - 1].innerHTML = '<img src="' + IMG_PATH + imgs[arr[i][j]] + '" />';
        }
    }
    //绑定鼠标事件
    var img1,
        img2;
    document.body.onclick = function (e) {
        var el = document.all
            ? event.srcElement
            : e.target;
        if (el.parentNode.tagName != 'TD') {
            return;
        }
        if (!img1) {
            img1 = el;
        } else {
            img2 = el;
        }
        $(el).addClass('active');
        el = el.parentNode;
        if (el.innerHTML == '') {
            p1 = p2 = e1 = e2 = null;
        }
        var r = el.parentNode.rowIndex + 1;
        var c = el.cellIndex + 1;
        if (p1 == null) {
            //el.childNodes[0].style.border = 'solid #ccc 3px';
            p1 = {
                x: c,
                y: r
            };
            e1 = el;
        } else {
            p2 = {
                x: c,
                y: r
            };
            e2 = el;
            if (!equal(p1, p2) && $(e1).find('img').attr('src') == $(el).find('img').attr('src')) {
                var path = getPath(p1, p2);
                if (path != null) {
                    e1.innerHTML = e2.innerHTML = '';
                    arr[p1.y][p1.x] = arr[p2.y][p2.x] = 0;
                    count += 10;
                    $('#count')
                        .find('span')
                        .html(count);
                    //type为2 时， 计算总时间来判断奖项
                    if(type == 2){
                        if(!$('#tbl').find('img') || !$('#tbl').find('img').length){
                            gameover();
                        }
                    }
                }
            }
            if (t1) {
                $(t1).removeClass('active')
            }
            t1 = e1;
            if (t2) {
                $(t2).removeClass('active')
            }
            t2 = e2;
            $(img1).removeClass('active');
            $(img2).removeClass('active');
            p1 = p2 = e1 = e2 = img1 = img2 = null;
            $(t1).addClass('active');
            $(t2).addClass('active');
        }
    }
    /**
        * js连连看完美注释版
        * 转载请注明出处
        **/
}
//游戏类型判断，限时或者完成总时间
function gameType(){
    if (type){
        if(type == 1){
            //初始化时间
            $('#time')
                .find('span')
                .html(time);
            //计时器
            lastTime = setInterval(function () {
                time--;
                $('#time')
                    .find('span')
                    .html(time);
            }, 1000);

            setTimeout(function () {
                gameover();
            }, time * 1000);
        }else{
            //初始化时间
            $('#time')
                .find('span')
                .html(0);
            time = 0;
            //计时器
            lastTime = setInterval(function () {
                time++;
                $('#time')
                    .find('span')
                    .html(time);
            }, 1000);
        }
    }
    
}
//gameover
function gameover() {
    $(".header").slideUp('slow');
    $(".over-header").show('slow');
    $(".gameBot").slideDown('slow');
    $(".startGame").hide('slow');
    $(".J-again").show('slow');
    clearInterval(lastTime);
    $('.active').removeClass('active')
    $('body').removeAttr('onclick');
    $('#time')
        .find('span')
        .html(0);
    $('#count')
        .find('span')
        .html(count);
    //限时玩法
    if(type == 1){
        $(".overGame")
            .show('slow')
            .find('.toalGoal').html(count);
        if (WeiAppConfig && WeiAppConfig.AwardList && WeiAppConfig.AwardList.length) {
            var diffCoeff = 0;
            var awardCode = '';
            WeiAppConfig
                .AwardList
                .map(function (item, index) {
                    if (item.DiffCoeff > diffCoeff) {
                        if (count / 1.5 > item.DiffCoeff) {
                            diffCoeff = item.DiffCoeff;
                            awardCode = item.ReturnCode;
                        }
                    }
                });
            if(WeiAppConfig.StatusCode == 1){
                submitGameResult(awardCode);
            }
        }
    }else{
        $(".overGame")
            .show('slow')
            .find('.toalGoal').html(time + '秒');
        $(".overGame").find('.title').html('总时间');
        if (WeiAppConfig && WeiAppConfig.AwardList && WeiAppConfig.AwardList.length) {
            var diffCoeff = 0;
            var awardCode = '';

            if(time > 200){
                var lastAward = WeiAppConfig.AwardList[0].diffCoeff;
                awardCode = WeiAppConfig.AwardList[0].ReturnCode;
                WeiAppConfig.AwardList.map(function (item, index) {
                    if (lastAward >= item.diffCoeff) {
                        lastAward = item.diffCoeff;
                        awardCode = item.ReturnCode;
                    }
                });
            }else{
                WeiAppConfig.AwardList.map(function (item, index) {
                    if (item.DiffCoeff > diffCoeff) {
                        if (Math.abs((200 - time)/2) > item.DiffCoeff) {
                            diffCoeff = item.DiffCoeff;
                            awardCode = item.ReturnCode;
                        }
                    }
                });
            }
            
            if(WeiAppConfig.StatusCode == 1){
                submitGameResult(awardCode);
            }
        }
    }
    
    
}
