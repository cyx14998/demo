jQuery.extend(jQuery.validator.messages, { 
	required: "该项必须填写", 
	email: "请输入正确格式的电子邮件", 
	url: "请输入合法的网址", 
	number: "请输入合法的数字", 
	digits: "只能输入整数", 
	maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"), 
	minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"), 
	rangelength: jQuery.validator.format("请输入一个长度介于 0 和 1 之间的字符串"), 
	range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值")
});