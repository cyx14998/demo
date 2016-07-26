(function(){
	window.onload=function(){
        var url = location.href;
        if(url.indexOf("tcwvcwl") > 0){
            return;
        }
        if(url.indexOf("?") > 0){
            url = url + "&tcwvcwl";
        }else{
            url = url + "?tcwvcwl";
        }
        location.replace(url);
	};
	/*获取设备信息*/
	function get_device_info(shareKey){
	    var jsonObj = {
            "param": {
                "tagname":"device_info"
            },
            "CBPluginName": "_tc_web_user",
            "CBTagName": "get_device_info"
        };
	    window._tc_bridge_user.get_device_info(jsonObj);
	};
	/*登录*/
	function user_login(mobile){
        var jsonObj = {
            "param": {
                "tagname":"logininfo"
            },
            "CBPluginName": "_tc_web_user",
            "CBTagName": "user_login"
        };
        window._tc_bridge_user.user_login(jsonObj);
	};
    /*注销*/
    function user_logout(){
    	var jsonObj = {
            "param":{
                "tagname":"logout"
            },
            "CBPluginName": "_tc_web_user",
            "CBTagName": "user_logout"
        };
        window._tc_bridge_user.user_logout(jsonObj);
    };
    /*获取手机联系人*/
    function get_contacts(){
    	var jsonObj = {
            "param":{
                "tagname":"contacts"
            },
            "CBPluginName": "_tc_web_user",
            "CBTagName": "get_contacts"
        };
        window._tc_bridge_user.get_contacts(jsonObj);
    }
    /*回调函数*/
	window._tc_web_user={
		get_device_info: function(data){
			alert(JSON.stringify(data));
		},
        user_logout: function(){
        	alert("user_logout");
        },
        user_login: function(){
        	alert("user_login");
        },
        get_contacts: function(){
        	alert("get_contacts");
        }
    }
})();