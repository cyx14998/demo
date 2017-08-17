function _game(option) {
    this.oWrap = $(option.wrap);
    this.data = option.data; //图片数据
    this.nLen = option.count; //多少张拼图
    this.nArea = option.area || 200; //每张的大小

    this.nWidth = option.width;
    this.nHidth = option.height;

    this.aLayout = []; //布局数组
    this.nCol = Math.sqrt(this.nLen);
    this.aBgp = []; //css背景定位数组
    this.int();
}
_game.prototype = {
    getRand: function (a, r) {
        var arry = a.slice(0),
				newArry = [];
        for (var n = 0; n < r; n++) {
            var nR = parseInt(Math.random() * arry.length);
            newArry.push(arry[nR]);
            arry.splice(nR, 1);
        }
        return newArry;
    },
    setPos: function () {  //设置图片元素数组
        var l = [],
				p = [];
        for (var n = 0; n < this.nCol; n++) {
            l.push(n * (this.nArea + 1));
            p.push(-n * this.nArea);
        }
        for (var i = 0; i < this.nLen; i++) {
            var t = parseInt(i / this.nCol),
					k = i - this.nCol * t,
					aP = [],
					aL = [];
            aP.push(p[k], p[t], i);
            aL.push(l[k], l[t]);
            this.aBgp[i] = aP;
            this.aLayout[i] = aL;
        }
    },
    isPass: function (item) {
        var _that = this,
				is = 0;
        item.each(function () {
            var l = parseInt($(this).css('left')),
					t = parseInt($(this).css('top')),
					i = parseInt($(this).attr('bg-i'));
            if (l == _that.aLayout[i][0] && t == _that.aLayout[i][1]) {
                is++;
            }
        });
        return is;
    },
    createDom: function () {
        var layout = this.getRand(this.aLayout, this.nLen);
        // console.log(layout);
        for (var n = 0; n < this.nLen; n++) {
            var t = parseInt(n / this.nCol),
					l = n - this.nCol * t;
            var html = $('<div bg-i="' + this.aBgp[n][2] + '" class="item"></div>').
				css({ 'left': layout[n][0] + 'px',
				    'top': layout[n][1] + 'px',
				    'background-image': 'url(' + this.data + ')',
				    'background-position': this.aBgp[n][0] + 'px' + ' ' + this.aBgp[n][1] + 'px',
				    'width': this.nArea + 'px',
				    'height': this.nArea + 'px'
				});

            this.oWrap.append(html);
        }
    },
    passTips: function () {
        var s_Date = new Date();   
        var s_time = s_Date.getTime();
        var x_second = s_time - f_time;
        var reward_name = "";
        var reward_code = "0";
        var _this = this.oWrap;
        var strs = getDiffCoeffs(1000);
     
        //WeiAppConfig.AwardList[0].
        if (x_second <= strs[0]) {
            reward_code = "1";
            reward_name = "一等奖";
        } else if (x_second > strs[0] && x_second <= strs[1]) {
            reward_code = "2";
            reward_name = "二等奖";
        } else if (x_second > strs[1] && x_second <= strs[2]) {
            reward_code = "3";
            reward_name = "三等奖";
        } else if (x_second > strs[2]) {
            reward_code = "0";
            reward_name = "谢谢惠顾";
        }
        submitGameResult(reward_code);
        //var openid = getUrlParam("OpenID");
        //if (openid != undefined && openid != null && openid != "") {
           
        //}

        //按钮绑定事件
        //        $(".mask-btn").bind("click", function () {
        //            window.location.href = window.location.href;
        //        })

    },
    move: function () {
        var $div = this.oWrap.find('.item'),
				_that = this;
        var hasElem = function () {
            var t = false;
            $div.each(function () {
                if ($(this).hasClass("on")) {
                    t = true;
                }
            });
            return t;
        };
        // click
        $div.click(function () {
            var $this = $(this);
            if (hasElem() && !$this.hasClass("on")) {
                var index = $('.on').index();
                if ($div.eq(index).is(':animated') || $this.is(':animated')) {
                    return false;
                }
                var l = $div.eq(index).position().left,
						t = $div.eq(index).position().top,
						myl = $this.position().left,
						myt = $this.position().top;

                $(this).animate({ 'left': l, 'top': t });
                $div.eq(index).css({ 'z-index': '1' }).animate({ 'left': myl, 'top': myt }, function () {
                    $(this).removeClass("on");
                    $(this).find('span').remove();
                    $(this).css({ 'z-index': '0' });
                    if (_that.isPass($div) == _that.nLen) {
                        _that.passTips();
                        //过关之后，去除换一张的功能
                        $("#game_again").hide();
                    }
                });
            }
            else {
                if ($this.hasClass("on")) {
                    $this.removeClass("on");
                    $this.find('span').remove();
                }
                else {
                    $this.addClass("on").append("<span></span>");
                }
            }

        });

    },
    int: function () {
        // 设置CSS背景定位与元素布局数组
        this.setPos();
        // 创建元素
        this.createDom();
        // 挪动图片
        this.move();
    }
}

var f_Date = new Date();
var f_time;
var imglist = ['images/Jigsaw/1.jpg', 'images/Jigsaw/2.jpg', 'images/Jigsaw/3.jpg', 'images/Jigsaw/4.jpg'];

$(function () {
   
})

function fn_imgdealinit() {
    //alert(WeiAppConfig.ConfigJson);
    // 从图片库随机获取一张图片
    //var data = ['images/Jigsaw/1.jpg', 'images/Jigsaw/2.jpg', 'images/Jigsaw/3.jpg', 'images/Jigsaw/4.jpg'] //300*300图片大小(目前必须是正方形)
    if (WeiAppConfig.ConfigJson != undefined) {
        var jsondata = eval(WeiAppConfig.ConfigJson);      
        imglist = [];
        $.each(jsondata, function (index,value) {
            imglist.push(value.FilePath);
        })
       
       
    }
    var n = parseInt(Math.random() * imglist.length);

    var res_content = "<div><img src='" + imglist[n] + "' style='width:500px;height:500px'/></div>";
    var timeout = 3000;
    var modal = true;
    createBlockDialog(res_content, timeout, modal, true);

    new _game({ 'data': imglist[n], 'wrap': '.wrap', 'count': 9, 'area': 146 });
    f_time = f_Date.getTime();
    $("#game_again").bind("click", playAgain);
}

function playAgain() {
    $("#wrap").html("");

    var n = parseInt(Math.random() * imglist.length);
    new _game({ 'data': imglist[n], 'wrap': '.wrap', 'count': 9, 'area': 146 });

    var res_content = "<div><img src='" + imglist[n] + "' style='width:500px;height:500px'/></div>";
    var timeout = 3000;
    var modal = true;
    createBlockDialog(res_content, timeout, modal, true);
}

function newvalue(){
	 $("#game_again").show();
playAgain();
f_Date=new Date();
 f_time = f_Date.getTime();
}