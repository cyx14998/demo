var viewport = document.getElementById("viewport");
var viewPortScale = 1 / window.devicePixelRatio;
// var viewPortdpi = 640 / $(window).width() * window.devicePixelRatio * 160;
$(document).ready(function () {
    if ($(window).width() < 320) {
        //viewport.content = "width=device-width,target-densitydpi=" + viewPortdpi + ",initial-scale=" + viewPortScale + ",minimum-scale=" + viewPortScale + ",maximum-scale=" + viewPortScale + ",user-scalable=no";
        viewport.content = "width=device-width,initial-scale=" + viewPortScale + ",minimum-scale=0.57,maximum-scale=" + viewPortScale + ",user-scalable=no";
    } else {
        //var ratio = window.screen.width / 640;
        var ratio = 1;
        viewport.content = "width=device-width,initial-scale=" + ratio + ",minimum-scale=" + ratio + ",maximum-scale=" + ratio + ",user-scalable=no";
    }
})
//sessionStorage缓存
var ss = {
    setItem: function (key, value) {
        sessionStorage.setItem(key, value)
    },
    getItem: function (key) {
        return sessionStorage.getItem(key)
    }
}

/*
*@value
*@num     {number} 截取字符数
*/
function CutString(value, num) {
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = value.replace(chineseRegex, "**").length;
    for (var i = 0; i < strLength; i++) {
        singleChar = value.charAt(i).toString();
        if (singleChar.match(chineseRegex) != null) {
            newLength += 2;
        } else {
            newLength++;
        }
        if (newLength > num) {
            break;
        }
        newStr += singleChar;
    }
    return newStr;
}

/*
* String.format.
*/
String.format = function () {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};

/*********Cookie操作方法************/
/*
* 写入缓存
* @name              {string} 名称
*/
function WriteCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + 1 * 24 * 3600 * 1000);
    var cookie = name + "=" + value + ";path =/;expires = " + date;
    document.cookie = cookie;
}
/*
* 获取缓存
* @name              {string} 名称
*/
function ReadCookie(name) {
    var key = name;
    var str = document.cookie.split(";");
    for (var i = 0; i < str.length; i++) {
        var str2 = str[i].split("=");
        if (i != 0) key = ' ' + name; //除第一个Cookie外，其它要在前面加上空格 .  
        if (str2[0] == key) {
            return str2[1];
        }
    }
    return '';
}
/*
* 清除缓存
* @name              {string} 名称
*/
function ClearCookie(name) {
    var dt = new Date();
    var value = ReadCookie(name);
    if (value != '') {
        dt.setTime(dt.getTime() - 2 * 24 * 3600 * 1000);
        var cookie2 = name + "= " + value + ";path=/;expires = " + dt;
        document.cookie = cookie2;
    }
}


function GetParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
}

/* 获取url后的参数 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

/* 提示框 */
function createBlockDialog(content, timeout, modal, istrue) {
    $.blockUI({
        message: content,
        fadeIn: 200,
        fadeOut: 200,
        timeout: timeout,
        showOverlay: modal ? true : false,
        css: {
            border: 'none',
            width: istrue ? '500px' : '400px',
            padding: istrue ? "3px" : '8px',
            left: '50%',
            'margin-left': istrue ? '-250px' : '-200px',
            top: istrue ? '16%' : '48%',
            cursor: '',
            'font-size': '24px',
            backgroundColor: istrue ? '#fff' : '#f7282d',
            'font-family': 'Microsoft YaHei',
            'box-shadow': '2px 2px 2px #292929',
            'border-radius': '5px',
            opacity: .9,
            color: '#fff'
        }
    });
}

