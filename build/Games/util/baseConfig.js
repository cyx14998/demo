var SRUrl = "http://192.168.2.213/";
var WeiAppConfig = {
    AccountID: "",
    CustID: "",
    OpenID: "",
    ApiUrl: "",
    CampaignID: "",
    ConfigJson: "",
    onInited:function () {
    
    },
    AwardList: []    
};
$(function () {
    initGames();
});
//初始化游戏配置
function initGames() {
    WeiAppConfig.AccountID = getUrlParam("accid");   
    WeiAppConfig.CustID = getUrlParam("custid");
    // WeiAppConfig.OpenID = getUrlParam("code");
    WeiAppConfig.CampaignID = getUrlParam("camid");
    var apiurl = "";

    $.ajax({
        type: "post",
        url: '/api/user/getLoginUserInfo?code=' + getUrlParam("code"),
        success: function (data) {
            alert(JSON.parse(data).UserID)
            WeiAppConfig.OpenID = JSON.parse(data).UserID;
            $.ajax({
                url: SRUrl + "emapi/WeiAPPGame/GetCampaignInfoByID/" + WeiAppConfig.CampaignID,
                type: "get",
                dataType: "json",
                async: false,
                success: function (data) {            
                    if (data && data.result) {
                        WeiAppConfig.AwardList = data.result.AwardList;
                        WeiAppConfig.ApiUrl =  data.result.ApiUrl;
                        //StatusCode 活动的不同状态
                        WeiAppConfig.StatusCode = data.result.StatusCode;
                        WeiAppConfig.ConfigJson = data.result.ConfigJson;
                        WeiAppConfig.onInited();
                        if(data.result.StatusCode == 2){
                            var pauseTime = parseInt(data.result.StartMsg) * 1000;
                            var shtml = getWarnMess(pauseTime);
                            WeiAppConfig.warninghtml = shtml;
                        }else if (data.result.StatusCode == 3){
                            var pauseTime = parseInt(data.result.PauseMsg) * 1000;
                            var shtml = getWarnMess(pauseTime);
                            WeiAppConfig.warninghtml = shtml;
                        }else if (data.result.StatusCode == 4){
                            WeiAppConfig.warninghtml = '活动已结束';
                        }
                        if(WeiAppConfig.warninghtml && WeiAppConfig.StatusCode != 1){
                            $('.mask').removeClass('none');
                            $('.no-openMsg').removeClass('none');
                            $('.no-openMsg .warnMsg').html(WeiAppConfig.warninghtml);
                            $('body').on('click',function(){
                                $('.mask').addClass('none');
                                $('.no-openMsg').addClass('none');
                            })
                        }
                    }
                },
                error: function (data) {

                }
            }); 
        },
        error: function () {
            
        }
    });
}
//把时间（秒） 转换成天数
function getWarnMess(pauseTime){
    var days    = pauseTime / 1000 / 60 / 60 / 24;
    var daysRound   = Math.floor(days);
    var hours    = pauseTime/ 1000 / 60 / 60 - (24 * daysRound);
    var hoursRound   = Math.floor(hours);
    var minutes   = pauseTime / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
    var minutesRound  = Math.floor(minutes);
    var seconds   = pauseTime/ 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    var shtml = '还要' + ((daysRound > 0) ? (daysRound  + '天') : '') + ((hoursRound > 0) ? (hoursRound  + '时') : '')  + ((minutesRound > 0) ? (minutesRound  + '分') : '') + ((seconds > 0) ? (seconds  + '秒') : '') + '活动开始，敬请期待';
    return shtml;
}
//获取奖励随机数组
function getAwardsData() {
    var AwardsData = [1, 2, 3, 0, 1, 2, 3, 0, 1, 2];
    var a1 = 40;
    var a2 = 40;
    var a3 = 40;
    var a4 = 40;
    for (var i = 0; i < WeiAppConfig.AwardList.length; i++) {
        var code = WeiAppConfig.AwardList[i].ReturnCode;
        var diffcoeff = 100 - WeiAppConfig.AwardList[i].DiffCoeff;
        switch (code) {
            case "1":
                a1 = diffcoeff;
                break;
            case "2":
                a2 = diffcoeff;
                break;
            case "3":
                a3 = diffcoeff;
                break;
            case "4":
                a4 = diffcoeff;
                break;
            default:
                break;
        }
    }   
    var totel = a1 + a2 + a3 + a4;
    if (totel <= 0) {
        totel = 1;
    }
    AwardsData = new Array();
    var i1 = (a1 / totel) * 20;
    var i2 = (a2 / totel) * 20;
    var i3 = (a3 / totel) * 20;
    var i0 = (a4 / totel) * 20;

    for (var i = 0; i < i1; i++) {
        AwardsData.push(1);
    }
    for (var i = 0; i < i2; i++) {
        AwardsData.push(2);
    }
    for (var i = 0; i < i3; i++) {
        AwardsData.push(3);
    }
    for (var i = 0; i < i0; i++) {
        AwardsData.push(0);
    }
    return AwardsData;
}

//获取难度数组
function getDiffCoeffs(coeffs) {
    var strs = [200, 400, 600, 10000];
    for (var i = 0; i < WeiAppConfig.AwardList.length; i++) {
        var diff=100-WeiAppConfig.AwardList[i].DiffCoeff;
        strs[i] = diff * coeffs;
    }
    return strs;
}

//提交游戏结果
function submitGameResult(reward_code) {
    $.ajax({
        type: "post",
        url: WeiAppConfig.ApiUrl,
        data: {
            "OpenID": WeiAppConfig.OpenID,
            // "CustID": WeiAppConfig.CustID,
            "AwardCode": reward_code,
            "CampaignID": WeiAppConfig.CampaignID
            //"CampaignID": "00000000-0000-0000-0000-000000000011"
        },
        success: function (data) {
            var obj = eval("(" + data + ")");
            //  var content = "<div>" + tip_info + "</div>";
            //   content += "<div class='success_confirm'><a href='javascript:void(0)' onclick='$.unblockUI()'>确定</a></div>";
            //  var timeout = 1000;
            //  var modal = true;
            //    createBlockDialog(content, timeout, modal);
            var res_content = "<div>" + obj.Message + "</div>";
            var message_code = obj.MessageCode;
            if (message_code == "1") {
                res_content = "<div>" + obj.Message + "</div>";
            }
            else if (message_code == "002") {
                res_content = "<div>非活动时间</div>";
            }
            else if (message_code == "006") {
                res_content = "<div>请到菜单页注册会员或继续试玩</div>";
            }
            else {
                res_content = "<div>" +obj.Message + "</div>";
            }

            res_content += "<div class='success_confirm'><a href='javascript:void(0)' onclick='$.unblockUI()'>确定</a></div>";
            var timeout = 1000;
            var modal = true;
            createBlockDialog(res_content, '', modal);
        },
        error: function () {

        }
    });
}