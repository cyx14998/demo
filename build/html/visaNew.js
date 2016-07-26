/*---------------------------------日历组件开始----------------------------------------------*/
(function (fish) {
    fish.require("Calendar", function () {

        var cal9 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal10 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal11 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal12 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal13 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal14 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal15 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal16 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal17 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal18 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal19 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal20 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal21 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal22 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal23 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal24 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal25 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal26 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal27 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal28 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal29 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal30 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal31 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        var cal32 = new fish.Calendar({
            skin: "green",
            monthNum: 2,
            zIndex: 22,
            isBigRange: true
        });
        fish.ready(function () {

            fish.one("#date11").on("focus", function (e) {
                cal9.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date11").val();
                        cal10.pick({
                            startDate: startDate,
                            elem: fish.one("#date12")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date12").on("focus", function (e) {
                var startDate = fish.one("#date11").val();
                cal10.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate], // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    zIndex: 22
                });
            });
            fish.one("#date13").on("focus", function (e) {
                cal11.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date13").val();
                        cal12.pick({
                            startDate: startDate,
                            elem: fish.one("#date14")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date14").on("focus", function (e) {
                var startDate = fish.one("#date13").val();
                cal12.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date15").on("focus", function (e) {
                cal13.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date15").val();
                        cal14.pick({
                            startDate: startDate,
                            elem: fish.one("#date16")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date16").on("focus", function (e) {
                var startDate = fish.one("#date15").val();
                cal14.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date17").on("focus", function (e) {
                cal15.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date17").val();
                        cal16.pick({
                            startDate: startDate,
                            elem: fish.one("#date18")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date18").on("focus", function (e) {
                var startDate = fish.one("#date17").val();
                cal16.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date19").on("focus", function (e) {
                cal17.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date19").val();
                        cal18.pick({
                            startDate: startDate,
                            elem: fish.one("#date20")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date20").on("focus", function (e) {
                var startDate = fish.one("#date19").val();
                cal18.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date21").on("focus", function (e) {
                cal19.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date21").val();
                        cal20.pick({
                            startDate: startDate,
                            elem: fish.one("#date22")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date22").on("focus", function (e) {
                var startDate = fish.one("#date21").val();
                cal20.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date23").on("focus", function (e) {
                cal21.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date23").val();
                        cal22.pick({
                            startDate: startDate,
                            elem: fish.one("#date24")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date24").on("focus", function (e) {
                var startDate = fish.one("#date23").val();
                cal22.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date25").on("focus", function (e) {
                cal23.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date25").val();
                        cal24.pick({
                            startDate: startDate,
                            elem: fish.one("#date26")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date26").on("focus", function (e) {
                var startDate = fish.one("#date25").val();
                cal24.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date27").on("focus", function (e) {
                cal25.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date27").val();
                        cal26.pick({
                            startDate: startDate,
                            elem: fish.one("#date28")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date28").on("focus", function (e) {
                var startDate = fish.one("#date27").val();
                cal26.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date29").on("focus", function (e) {
                cal27.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date29").val();
                        cal27.pick({
                            startDate: startDate,
                            elem: fish.one("#date30")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date30").on("focus", function (e) {
                var startDate = fish.one("#date27").val();
                cal26.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date31").on("focus", function (e) {
                cal27.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date29").val();
                        cal27.pick({
                            startDate: startDate,
                            elem: fish.one("#date30")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date32").on("focus", function (e) {
                var startDate = fish.one("#date27").val();
                cal26.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date33").on("focus", function (e) {
                cal27.pick({
                    elem: this, // 如果设置了elem的值，且elem参数为input框
                    mode: "rangeFrom",
                    fn: function (y, d, r) {
                        var startDate = fish.one("#date29").val();
                        cal27.pick({
                            startDate: startDate,
                            elem: fish.one("#date30")[0],
                            mode: "rangeTo",
                            showOtherMonth: true,
                            currentDate: [startDate],
                            fn: function (a, b, c) {

                            }
                        });
                    }

                });
            });
            fish.one("#date34").on("focus", function (e) {
                var startDate = fish.one("#date29").val();
                cal28.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate] // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    ,
                    zIndex: 22
                });
            });
            fish.one("#date35").on("focus", function (e) {
                var startDate = new Date();
                cal29.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate], // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    zIndex: 22
                });
            });
            fish.one("#date36").on("focus", function (e) {
                var startDate = new Date();
                cal30.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate], // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    zIndex: 22
                });
            });
            fish.one("#date37").on("focus", function (e) {
                var startDate = new Date();
                cal32.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate], // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    zIndex: 22
                });
            });
            fish.one("#date38").on("focus", function (e) {
                var startDate = new Date();
                cal32.pick({
                    startDate: startDate,
                    elem: this,
                    mode: "rangeTo",
                    showOtherMonth: true,
                    currentDate: [startDate], // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                    zIndex: 22
                });
            });
        });
    });
})(fish)

/*---------------------------------tip提示框组件开始----------------------------------------------*/
; (function () {
    function Tip(param) {
        this.init(param);
    }

    Tip.prototype = {
        init: function (param) {
            this.setOptions(param);
        },
        setOptions: function (param) {
            var defaults = {
                width: 400, // 提示框宽度(只接受不带单位的数字, 带单位的暂未处理)
                title: "", // 提示标题
                text: "", // 提示文字
                sureFn: null, // 确认 回调
                cancelFn: null, // 取消 回调
                beforeClose: null, // 关闭前 回调
                isAutoClose: false, // 是否自动关闭
                autoCloseTime: 1200, // 自动关闭提示延时
                extraClass: "", // #tipBox 添加的class
                isOneBtn: false // 是否只有一个确认按钮
            };
            this.options = $.extend({}, defaults, param);
            this.addHtml();
        },
        addHtml: function () {
            var tipBg = document.querySelector("#tipBg"),
                tipBox = document.querySelector("#tipBox");
            if (tipBg) {
                tipBg.parentNode.removeChild(tipBg);
            }
            if (tipBox) {
                tipBox.parentNode.removeChild(tipBox);
            }
            var html = '<div id="tipBg"></div><div id="tipBox"><h1 class="title"><span></span><a href="javascript:;" class="tipBoxClose close"></a></h1><div class="tip_cont"></div><div class="tip_btn_wrap">' +
                '<a href="javascript:;" id="tipSure" class="entericon">确定</a><a href="javascript:;" id="tipCancel" class="cancelicon">取消</a></div></div>';
            $("body").append(html);
            this.showTip(this.options.text);
        },
        showTip: function (text) {
            var title = this.options.title,
                width = parseInt(this.options.width),
                halfWidth = width / 2,
                isOneBtn = this.options.isOneBtn,
                extraClass = this.options.extraClass,
                isAutoClose = this.options.isAutoClose,
                $tipBox = $("#tipBox"),
                $title = $(".title span", $tipBox),
                $tipCont = $(".tip_cont", $tipBox);
            if (title) {
                $title.html(title);
            } else {
                $title.remove();
            }
            $tipCont.html(text);
            $("#tipBg").show();
            if (extraClass) {
                $tipBox.addClass(extraClass);
            }
            var height = $tipBox.height();
            $tipBox.css("margin-top", -height / 2);
            if (isOneBtn) {
                $("#tipSure", $tipBox).css("width", width / 7);
                $("#tipCancel", $tipBox).remove();
                $("#tipSure", $tipBox).html("确定");
            } else {
                $("#tipSure, #tipCancel", $tipBox).css("width", halfWidth / 3.5);
            }
            $(".tip_btn_wrap", $tipBox).css("width", width);

            if (isAutoClose) {
                $(".tip_btn_wrap", $tipBox).remove();
                var _this = this;
                setTimeout(function () {
                    _this.close();
                }, _this.options.autoCloseTime);
            } else {
                this.clickInit(isOneBtn);
            }
            $tipBox.css({
                "width": width,
                "margin-left": -halfWidth
            }).show();
        },
        clickInit: function (isOneBtn) {
            var _this = this;
            $("#tipSure").click(function () {
                if (_this.options.sureFn) {
                    _this.options.sureFn();
                }
                _this.close();
            });
            if (!isOneBtn) {
                $("#tipCancel").click(function () {
                    if (_this.options.cancelFn) {
                        _this.options.cancelFn();
                    }
                    _this.close();
                });
            }
            $(".tipBoxClose").click(function () {
                _this.close();
            });
        },
        close: function () {
            if (this.options.beforeClose) {
                this.options.beforeClose();
            }
            $("#tipBg").hide();
            $("#tipBox").hide();
        }
    };
    $.tip = function (param) {
        return new Tip(param);
    }
})();

/*---------------------------------page分页组件开始----------------------------------------------*/
(function () {
    var regexpPagenum = /{pagenum}/i,
        isAjaxPage = true; //是否异步，true异步，false非异步
    function mPaging(param) {
        this.param = param;
        this.param.startWithAjax = this.param.startWithAjax != null ? this.param.startWithAjax : true;
        this.num = !isNaN(this.param.num) ? this.param.num : 1;
        this.init();
        if (this.param.onceNum == true) {
            this.param.num = 1;
            this.num = 1;
        }
    }
    mPaging.appendA = function (text, className, bagDiv, thisObj) {
        var a = document.createElement("a");
        a.innerHTML = text;
        a.setAttribute("href", "javascript:void(0);");
        var pageMess = mPaging.changeText(text, thisObj);

        if (pageMess.cls) {
            a.className = className + " " + pageMess.cls;
        } else {
            a.className = className
        }
        if (parseInt(pageMess.pageNum) > 0) {
            a.onclick = function () {
                if (thisObj.CURRENT_PAGE == pageMess.pageNum) {
                    return;
                }
                thisObj.paging(pageMess.pageNum);
            };
        }
        bagDiv.appendChild(a);
        return a;
    }

    mPaging.changeText = function (text, thisObj) {
        var pageMess = {};
        switch (text) {
            case "首页":
                if (thisObj.CURRENT_PAGE - 1 <= 0) {
                    pageMess.pageNum = -3;
                    pageMess.cls = "indexGrey"
                } else {
                    pageMess.pageNum = 1;
                    pageMess.cls = "indexNormal"
                }
                break;
            case "上一页":
                if (thisObj.CURRENT_PAGE - 1 <= 0) {
                    pageMess.pageNum = -1;
                    pageMess.cls = "prevGrey"
                } else {
                    pageMess.pageNum = thisObj.CURRENT_PAGE - 1;
                    pageMess.cls = "prevNormal"
                }
                break;
            case "下一页":
                if (thisObj.CURRENT_PAGE + 1 > thisObj.TOTAI_SIZE) {
                    pageMess.pageNum = -2;
                    pageMess.cls = "nextGrey"
                } else {
                    pageMess.pageNum = thisObj.CURRENT_PAGE + 1;
                    pageMess.cls = "nextNormal"
                }
                break;
            case "末页":
                if (thisObj.CURRENT_PAGE + 1 > thisObj.TOTAI_SIZE) {
                    pageMess.pageNum = -4;
                    pageMess.cls = "lastGrey"
                } else {
                    pageMess.pageNum = thisObj.TOTAI_SIZE;
                    pageMess.cls = "lastNormal"
                }
                break;
            default:
                pageMess.pageNum = text;
                break;
        }
        return pageMess;
    };

    function findParam(str, key) {
        var strArr = str.split(/&/g); //&分割
        for (var n = 0; n < strArr.length; n++) {
            if (strArr[n].substring(0, key.length + 1) == (key + '=')) {
                return strArr[n].substring(key.length + 1);
            }
        }
        return "";
    }

    mPaging.prototype = {
        init: function () {
            this.CURRENT_PAGE = this.num;
            //异步初始化
            if (this.param.startWithAjax) { //开始是否异步
                //直接开始异步分页
                this.paging(this.num);
            } else if (this.param.size) {
                //先手动初始化，再异步分页
                this.build(this.param.size);
            }
        },
        //异步分页
        paging: function (num) {
            num = num <= 0 ? 1 : num;
            if (this.TOTAI_SIZE) {
                num = num > this.TOTAI_SIZE ? this.TOTAI_SIZE : num;
            }
            var datas = (this.param.pageNO + "=" + num),
                _this = this,
                urlArr = _this.param.ajaxObj.url.split('?');
            datas += this.ajaxData ? '&' + this.ajaxData : '';
            datas += (urlArr[1] ? '&' + urlArr[1] : '');
            var config = {
                data: datas.replace("{pageindex}", num),
                dataType: _this.param.ajaxType || "json"
            };
            if (this.param.ajaxObj) {
                $.extend(config, this.param.ajaxObj);
            }
            config.url = urlArr[0];


            if (typeof this.param.beforeAjaxFn === "function") {
                this.param.beforeAjaxFn.call(this, num);
            }

            config.success = function (data) {

                data = (_this.param.ajaxObj && _this.param.ajaxObj.success) ? _this.param.ajaxObj.success.call(_this, data) : data;
                if (data === false) {
                    return;
                }
                _this.CURRENT_PAGE = _this.now = num;
                if (data) {
                    var total = (_this.param.preSortTotal && _this.param.preSortTotal(data));
                    if (total === 0 || total) { } else {
                        total = total.totalSize || 0;
                    }
                    if (total || total === 0) {
                        _this.build(total, num);
                    }
                }

                _this.param.callback.call(_this, data, num);
            };

            $.ajax(config);
        },
        build: function (_size) {
            var size = parseInt(_size, 10);
            this.TOTAI_SIZE = size;
            var _this = this;
            //清空分页
            this.param.appendTo.html("");

            var bagDiv = document.createElement("div");
            bagDiv.className = "bag_page";


            if (typeof this.param.firstLast == "undefined" || this.param.firstLast) {
                mPaging.appendA("首页", "guidnum", bagDiv, this)
            }

            if (typeof this.param.prevNext == "undefined" || this.param.prevNext) {
                mPaging.appendA("上一页", "guidnum", bagDiv, this)
            }
            var pageSatrt = 1,
                pageEnd = 1;

            if (size > 6) {
                if (_this.CURRENT_PAGE <= 4) {
                    pageSatrt = 1;
                    pageEnd = 6;
                } else if (_this.CURRENT_PAGE > size - 3) {
                    pageSatrt = size - 5;
                    pageEnd = size;
                } else {
                    pageSatrt = _this.CURRENT_PAGE - 3;
                    pageEnd = _this.CURRENT_PAGE + 2;
                }

            } else {
                pageSatrt = 1;
                pageEnd = size;
            }


            for (var i = pageSatrt; i <= pageEnd; i++) {
                if (i == _this.CURRENT_PAGE) {
                    var css = "pagenum currentpage";
                } else {
                    var css = "pagenum";
                }
                mPaging.appendA(i, css, bagDiv, this);
            }

            if (_this.CURRENT_PAGE < size - 2 && size > 6) {
                var pDom = document.createElement("span");
                pDom.innerHTML = "..."
                pDom.className = "mr10";
                bagDiv.appendChild(pDom);
            }

            if (typeof this.param.prevNext == "undefined" || this.param.prevNext) {
                mPaging.appendA("下一页", "guidnum", bagDiv, this)
            }

            if (typeof this.param.firstLast == "undefined" || this.param.firstLast) {
                mPaging.appendA("末页", "guidnum", bagDiv, this)
            }
            this.param.appendTo[0].appendChild(bagDiv);
        }
    };

    $.fn.page = function (param) {

        if (!this[0]) {
            return;
        }
        param.appendTo = this;
        return new mPaging(param);
    }
})();

/*---------------------------------界面js开始----------------------------------------------*/
$(".tree").css("width", "225px");
getArea();
getAddress();
getNum();
getVisaType();
orderFn(0, 0, "");
// tab 切换
$(".tab-list li").click(function () {
    var $this = $(this),
        index = $this.index();
    $this.addClass("current").siblings().removeClass("current");
    $(".tab-iton" + index).removeClass("none").siblings().addClass("none");
    if (index == 1 || index == 2) {
        $(".orderNo").val("");
        $(".visaType").val("0");
        $(".tripStartTime").val("");
        $(".tripEndTime").val("");
        $(".tab-iton" + index + " .address").val("");
        //$(".area").val("0");
        $(".fStartTime").val("");
        $(".fEndTime").val("");
        $(".stayTime").val("");
        $(".AndNum").val("");
        $(".sendStartTime").val("");
        $(".sendEndTime").val("");
        $(".traveler").val("");
        checkFn(index);
    } else {
        $(".orderNo").val("");
        $(".visaType").val("0");
        $(".tripStartTime").val("");
        $(".tripEndTime").val("");
        $(".tab-iton" + index + " .address").val("");
        //$(".area").val("0");
        $(".stayTime").val("");
        $(".AndNum").val("");
        $(".orderState").val("");
        $(".submitStartTime").val("");
        $(".submitEndTime").val("");
        $(".mailStartTime").val("");
        $(".mailEndTime").val("");
        $(".mmignStartTime").val("");
        $(".signEndTime").val("");
        $(".fStartTime").val("");
        $(".fEndTime").val("");
        $(".sendStartTime").val("");
        $(".sendEndTime").val("");
        $(".outStartTime").val("");
        $(".outEndTime").val("");
        $(".mailStartTime").val("");
        $(".mailEndTime").val("");
        $(".fmailStartTime").val("");
        $(".fmailEndTime").val("");
        $(".traveler").val("");
        orderFn(index, 0, "");
    }
});

// 查询
$(".tSearch").click(function () {
    var index = $(this).attr("index");
    checkFn(index);
});
$(".orderSearch").click(function () {
    var index = $(this).attr("index");
    orderFn(index, 0, "");
});
$(".orderExport").click(function () {
    var index = $(this).attr("index");
    orderFn(index, 0, "", true);
});
//获取签证类型下拉列表值
function getVisaType() {
    var i = 0;
    $.ajax({
        type: "POST",
        dataType: "jsonp",
        url: (window.host || "") + '/ivacation/VisaInfo/QuerySourceList?keyData={"SupplierId":0,"QueryType":2}',
        success: function (data) {
            if (data.ErrorCode == 0) {
                var list = data.DistrictList,
                    visatypeId = "",
                    visatypeName = "",
                    visatypeHtml = "";
                for (i in list) {
                    visatypeId = list[i].Id;
                    visatypeName = list[i].Name;
                    visatypeHtml = '<option Id = ' + visatypeId + ' value=' + visatypeId + '>' + visatypeName + '</option>';
                    $(".tab-iton0 .visaType,.tab-iton1 .visaType,.tab-iton2 .visaType").append(visatypeHtml);
                }
            }
        }

    });
}
// 获取领区下拉列表值
function getArea() {
    var i = 0;
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: (window.host || "") + '/ivacation/VisaInfo/QuerySourceList?keyData={"SupplierId":0,"QueryType":0}',
        success: function (data) {
            if (data.ErrorCode == 0) {
                var list = data.DistrictList,
                    areaid = "",
                    areaName = "",
                    areaHtml = "";
                for (i in list) {
                    areaid = list[i].Id;
                    areaName = list[i].Name;
                    areaHtml = '<option aid = ' + areaid + ' value=' + areaid + ' >' + areaName + '</option>';
                    $(".tab-iton0 .area,.tab-iton1 .area,.tab-iton2 .area").append(areaHtml);
                }

            }
        }
    });
}

var cacheList = [{}, {}, {}];

// 获取目的地列表值
function getAddress() {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: (window.host || "") + '/ivacation/VisaInfo/QuerySourceList?keyData={"SupplierId":0,"QueryType":1}',
        success: function (data) {
            if (data && data.DistrictList && data.DistrictList.length) {
                var list = data.DistrictList,
                    i = 0,
                    len = list.length,
                    zNodes = [];
                setting = {
                    check: {
                        enable: true
                    },
                    data: {
                        simpleData: {
                            enable: true
                        },
                    },
                    callback: {
                        onCheck: ztreeCheckFn
                    }
                };

                for (i; i < len; i++) {
                    var item = list[i],
                        cList = item.CountryList || [],
                        firNum = i + 1,
                        obj = { id: firNum, pId: 0, name: item.Name, cId: item.Id };
                    zNodes.push(obj);
                    for (var j = 0, _len = cList.length; j < _len; j++) {
                        var _item = cList[j],
                            _obj = { id: parseInt(firNum + "" + (j + 1), 10), pId: firNum, name: _item.Name, cId: _item.Id };
                        zNodes.push(_obj);
                    }
                }

                $(".ztree").each(function (i) {
                    var $this = $(this),
                        $ipt = $this.prev("input"),
                        id = "myTree" + i;
                    $this.attr("id", id);
                    $ipt.attr("id", "treeIpt" + i);
                    $.fn.zTree.init($("#" + id), setting, zNodes);
                });
            }
        }
    });
}

function ztreeCheckFn(e, tId, tNode) {
    var index = parseInt(tId.replace(/[^\d]/g, ""), 10),
        obj = cacheList[index],
        cId = tNode.cId,
        cName = tNode.name,
        isChecked = tNode.checked,
        isParent = tNode.isParent;

    if (isParent) {
        var children = tNode.children,
            n = 0,
            m = children.length;
        for (n; n < m; n++) {
            var __item = children[n],
                __cId = __item.cId,
                __cName = __item.name;
            obj[__cId] = { cId: __cId, cName: __cName, isChecked: isChecked };
        }
    } else {
        obj[cId] = { cId: cId, cName: cName, isChecked: isChecked };
    }
    gatherChecked(index, obj);
}

function gatherChecked(i, obj) {
    var $ipt = $("#treeIpt" + i),
        idList = [],
        nameList = [];
    for (var key in obj) {
        var __obj = obj[key];
        if (__obj.isChecked) {
            idList.push(__obj.cId);
            nameList.push(__obj.cName);
        }
    }
    $ipt.val(nameList.join(",")).attr("cids", idList.join(","));
}

$("body").click(function (e) {
    if (e.target.closest == null) e.target.closest = function () { return false; };
    if (e.target.className.indexOf("treeNav") > 0 || e.target.className.indexOf("tree") > 0 || e.target.closest(".tree")) {
        $(".tree").removeClass("none");
    } else {
        $(".tree").addClass("none");
    }
    if (e.target.className.indexOf("up") > 0) {
        $(".listDetails").addClass("none");
        $(".triangle").removeClass("up").addClass("down");
        $(e.target).removeClass("down").addClass("up");
        $(e.target).siblings(".listDetails").removeClass("none");
    } else {
        $(".listDetails").addClass("none");
        $(".triangle").removeClass("up").addClass("down");
    }
    if (e.target.closest(".listDetails")) {
        $(e.target).closest(".listDetails").removeClass("none");
        $(e.target).closest(".listDetails").siblings(".triangle").addClass("up").removeClass("down");
    }
});
// 获取tab上面显示的数字
function getNum() {
    var i = 1;
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: (window.host || "") + '/ivacation/VisaInfo/QueryVisaTablist?keyData={"SupplierId":0}',
        success: function (data) {
            if (data.ErrorCode == 0) {
                var obj = data.VisaTabList,
                    nums = 0;
                for (i in obj) {
                    nums = obj[i];
                    $(".tab-list li:nth-child(" + i + ") .nums").html(nums);
                }
            }
        }
    });
}

// 获取待送签、待出签两个tab的列表值
function checkFn(index) {
    var orderNo = "",
        visaType = 0,
        tripStartTime = "",
        tripEndTime = "",
        address = "",
        area = 0,
        AddressName = '',
        fStartTime = "",
        fEndTime = "",
        stayTime = "",
        AndNum = "",
        sendStartTime = "",
        sendEndTime = "",
        traveler = "",
        url = "",
        IsQuery = 2,
        checkHtml = "",
        noDateHtml = "",
        currentTab = $(".tab-iton" + index);
    orderNo = $(".orderNo", currentTab).val();
    visaType = parseInt($(".visaType", currentTab).val(), 10);
    tripStartTime = $(".tripStartTime", currentTab).val();
    tripEndTime = $(".tripEndTime", currentTab).val();


    if ($(".tab-iton" + index + " .address").val() == "") {
        address = "";
        AddressName = "";
    } else {
        AddressName = $(".tab-iton" + index + " .address").val();
        address = $(".tab-iton" + index + " .address").attr("cids");
    }
    if (index == 1) {
        IsQuery = 2;
    }
    else {
        IsQuery = 3;
    }
    area = parseInt($(".area", currentTab).val(), 10);
    stayTime = $(".stayTime", currentTab).val();
    AndNum = $(".AndNum", currentTab).val();
    fStartTime = $(".fStartTime", currentTab).val();
    fEndTime = $(".fEndTime", currentTab).val();
    sendStartTime = $(".sendStartTime", currentTab).val();
    sendEndTime = $(".sendEndTime", currentTab).val();
    traveler = $(".traveler", currentTab).val();
    url = (window.host || "") + '/ivacation/VisaInfo/QueryMaterialAudit?keyData={' +
        '"SerialID":' + '"' + orderNo + '"' + ',' +
        '"AddressId":' + '"' + address + '"' + ',' +
            // '"DistrictId":0' + ',' +
        '"DistrictId":' + area + ',' +
        '"MerchantId":0' + ',' +
        '"SupplierId":0' + ',' +
        '"QueryType":' + IsQuery + ',' +
        '"PageIndex":{pageindex}' + ',' +
        '"PageSize":10';

    //判断字段是否为空，若为空，相应参数不传
    if (visaType) {
        url += ',"RelatedName":' + '"' + visaType + '"';
    }
    if (traveler) {
        url += ',"PassengerName":' + '"' + traveler + '"';
    }
    if (AddressName) {
        url += ',"AddressName":' + '"' + AddressName + '"';
    }
    if (stayTime) {
        url += ',"MaxStopTimes":' + '"' + stayTime + '"';
    }
    if (AndNum) {
        url += ',"EnterTimes":' + '"' + AndNum + '"';
    }
    if (fStartTime) {
        url += ',"MaterialFinalExameStart":' + '"' + fStartTime + '"';
    }
    if (fEndTime) {
        url += ',"MaterialFinalExameEnd":' + '"' + fEndTime + '"';
    }
    if (sendStartTime) {
        url += ',"DeliveryStart":' + '"' + sendStartTime + '"';
    }
    if (sendEndTime) {
        url += ',"DeliveryEnd":' + '"' + sendEndTime + '"';
    }
    if (tripStartTime) {
        url += ',"TravelStartDate":' + '"' + tripStartTime + '"';
    }
    if (tripEndTime) {
        url += ',"TravelEndDate":' + '"' + tripEndTime + '"';
    }
    url += '}';

    $(".tpage", currentTab).page({
        ajaxObj: {
            type: "POST",
            dataType: "jsonp",
            beforeSend: function () {
                $(".main-content .tabindex table tbody").html("<div class='data-loading'><div class='bg'></div><span>请稍候,订单信息正在加载中...</span></div>");
            },
            url: url,
            success: function (data) {
                $(".data-loading").remove();
                return data;
            }
        },
        preSortTotal: function (data) {
            return parseInt(Math.ceil((data.TotalCount / 10)), 10);
        },
        pageNO: "PageIndex", //页码的请求参数名
        callback: function (data, num) {

            if (data && data.MaterialAuditList && data.MaterialAuditList.length) {

                var list = data.MaterialAuditList,
                    i = 0,
                    html = "",
                    colspan = "",
                    len = list.length,
                    item = null,
                    MaterialId = "",
                    OrderId = "",
                    OrderSerialId = "",
                    num = "",
                    VisaContinent = "",
                    VisaCountry = "",
                    MaxStopTimes = "",
                    EnterTimes = "",
                    visaType = "",
                    district = "",
                    totalPrice = "",
                    fConfirmDate = "",
                    sendSignDate = "",
                    tripDate = "",
                    linkMan = "",
                    orderState = "",
                    memberState = "",
                    tripMemberList = [],
                    checkDifferentColumn = "",
                    IsElectronicVisa = 0;;
                for (i; i < len; i++) {
                    item = list[i];
                    MaterialId = item.MaterialId;
                    OrderId = item.OrderId;
                    OrderSerialId = item.OrderSerialId;
                    num = item.CustomerSerialId;
                    VisaContinent = item.VisaContinent;
                    VisaCountry = item.VisaCountry;
                    MaxStopTimes = item.MaxStopTimes;
                    EnterTimes = item.EnterTimes;
                    visaType = item.RelatedName;
                    district = item.District;
                    totalPrice = item.TotalContractPrice;
                    fConfirmDate = dateFormat(item.MaterialFinalExameDate);
                    sendSignDate = dateFormat(item.SendVisaDate);
                    tripDate = dateFormat(item.AuditPostDate);
                    linkMan = item.OMLinkMan;
                    orderState = item.OrderStatus;
                    tripMemberList = item.PersonList;
                    IsElectronicVisa = item.IsElectronicVisa;
                    if (index == 1) {
                        checkDifferentColumn = fConfirmDate;
                    } else if (index == 2) {
                        checkDifferentColumn = sendSignDate;
                    }

                    // 出游人列表显示
                    var singleMemberHtml = "",
                        moreMemberHtml = "",
                        mList = [],
                        mid = "",
                        name = "",
                        memberType = "",
                        state = "",
                        t = 0,
                        signState = 0,
                        listHeader = "",
                        listEnd = "",
                        checkboxHtml = "",
                        showDownTriangle = "",
                        innerTr = "",
                        traverHtml = "";
                    if (tripMemberList) {
                        if (tripMemberList.length == 1 || tripMemberList.length > 1) {
                            mList = tripMemberList;
                            mid = mList[0].PassengerId;
                            name = mList[0].PersonName;
                            memberType = mList[0].PersonType;
                            state = mList[0].PersonStatus;
                            signState = mList[0].Status;
                            listHeader = '<div class="listDetails none details' + i + '"><table class="tripMemberList"><tbody>',
                                listEnd = "</tbody></table></div>";
                            if (tripMemberList.length > 1) {
                                var innerId = "",
                                    innerName = "",
                                    innerType = "",
                                    innerState = "",
                                    stateNo = 0,
                                    innerBoxHtml = "";
                                showDownTriangle = '<i class="triangle down"></i>'; //只有出游人大于1的时候才显示下拉列表按钮
                                for (; t < mList.length; t++) {
                                    innerId = mList[t].PassengerId;
                                    innerName = mList[t].PersonName;
                                    innerType = mList[t].PersonType;
                                    innerState = mList[t].PersonStatus;
                                    stateNo = mList[t].Status;
                                    if (index == 1 || index == 2) {
                                        if (index == 1) {
                                            if (stateNo == 2 || stateNo == 3 || stateNo == 4 || IsElectronicVisa == 1) {
                                                innerBoxHtml = '<span class="space"></span>';
                                            }
                                            else {
                                                innerBoxHtml = '<input type="checkbox"  sendSignState="' + stateNo + '" ReadyOutchekDate="' + checkDifferentColumn + '" memberId="' + innerId + '" class="check-box">';
                                            }
                                        }
                                        else {
                                            if (stateNo == 3 || stateNo == 4 || IsElectronicVisa == 1) {
                                                innerBoxHtml = '<span class="space"></span>';
                                            }
                                            else {
                                                innerBoxHtml = '<input type="checkbox"  sendSignState="' + stateNo + '" ReadyOutchekDate="' + checkDifferentColumn + '" memberId="' + innerId + '" class="check-box">';
                                            }
                                        }
                                    }
                                    innerTr += '<tr><td>' + innerBoxHtml + '</td><td class="pos-r2">' + innerName + '</td><td>' + innerType + '</td><td class="pos-r9">' + innerState + '</td></tr>'
                                }
                            }
                            traverHtml = showDownTriangle + listHeader + innerTr + listEnd;
                        }
                        else {
                            innerTr = "";
                            listHeader = "";
                            listEnd = "";
                            showDownTriangle = "";
                        }
                    }
                    if (index == 1) {
                        checkHtml = '<a class="confirm sendSignBtn signBtn" MaterialId="' + MaterialId + '" MerchantId="608" OrderId="' + OrderId + '" OrderSerialId="' + num + '" SerialId="' + OrderSerialId + '" QueryType="2" >送签</a>';
                    } else if (index == 2) {
                        checkHtml = '<a class="confirm outSignBtn signBtn" MaterialId="' + MaterialId + '" MerchantId="608" OrderId="' + OrderId + '" OrderSerialId="' + num + '" SerialId="' + OrderSerialId + '" QueryType="3">出签</a>';
                    }
                    if (index == 1 || index == 2) {
                        if (index == 1) {
                            if (tripMemberList.length > 0) {  //判断是否有出游人
                                if (signState == 2 || signState == 3 || signState == 4 || IsElectronicVisa == 1) {
                                    checkboxHtml = "";
                                } else {
                                    checkboxHtml = '<input type="checkbox"  sendSignState="' + signState + '"  memberId="' + mid + '" class="check-box">';
                                }
                            }
                        } else {
                            if (tripMemberList.length > 0) {  //判断是否有出游人
                                if (signState == 3 || signState == 4 || IsElectronicVisa == 1) {
                                    checkboxHtml = "";
                                } else {
                                    checkboxHtml = '<input type="checkbox"  sendSignState="' + signState + '"  memberId="' + mid + '" class="check-box">';
                                }
                            }
                        }
                        html += '<tr class="singleRow tr' + i + '" ReadyOutchekDate="' + checkDifferentColumn + '" customerSerialId="' + num + '" orderId="' + OrderId + '" serialId="' + OrderSerialId + '">' +
                            '<td>' + num + '</td><td>' + VisaContinent + VisaCountry + '</td><td>' + MaxStopTimes + EnterTimes + '</td><td>' + visaType + '</td><td>' + district + '</td><td>' + totalPrice + '</td><td>' + checkDifferentColumn + '</td><td>' + tripDate + '</td><td>' + linkMan +
                            '</td><td>' + orderState + '</td><td><div class="tourlist">' + checkboxHtml + '<span class="tripName">' + name + '</span>' + traverHtml + '</div>' + '</td><td>' + memberType + '</td><td>' + state + '</td><td>' + checkHtml + '</td></tr>';
                        $(".tab-iton" + index + " .tcontent tbody").first().html(html);
                    }
                }
            } else {
                noDateHtml = '<tr><td colspan=15 class="no-data">暂无数据</td></tr>';
                $(".tab-iton" + index + " .tcontent tbody").html(noDateHtml);
                $(".tpage", currentTab).html("");
            }
        }
    });
}

// 批量送签 批量出签  批量拒签
$(".tbtn .batchSendSign,.tbtn .batchOutSign,.tbtn .batchRefuseSign").click(function () {
    var url = "",
        OutCheckInfoList = [], //出签拒签集合
        singleOrderObj = {}, //单个订单对象
        outCheckList = [], //送签、出签列表
        isTrue = false,
        outCheckType = 0, //出签类型(0:送签;1:出签/拒签)
        num = $(this).attr("num"),
        state = 2,
        currentTab = "",
        btnFlag = $(this).attr("btnFlag"); //按钮标志  批量送签、批量拒签、批量出签

    $(".readyoutchekdate ").val("");
    $(".readTime").addClass("none");

    if (btnFlag == "out") {
        state = 3;
    } else if (btnFlag == "refuse") {
        state = 4;
        $(".refuseSignCont").val("");
        $(".readTime").addClass("none");
    }
    if (num == 0) {
        currentTab = $(".tab-iton1");
    } else {
        currentTab = $(".tab-iton2");
        outCheckType = 1;
    }
    $(".check-box", currentTab).each(function () {
        if (this.checked) {
            isTrue = true;
            return;
        }
    });
    if (isTrue) {
        $(".singleRow", currentTab).each(function () {
            var $this = $(this),
                customerId = $this.attr("customerserialid"), //客户订单号
                orderId = $this.attr("orderid"); //订单ID
            outCheckList = [];
            $(".tourlist .check-box", $this).each(function () {
                if (this.checked) {
                    var $this = $(this),
                        passagerId = parseInt($this.attr("memberid")), //乘客ID
                        obj = {
                            "PassengerId": passagerId,
                            "Status": state
                        };
                    outCheckList.push(obj);
                }
            });
            if (outCheckList.length) {
                singleOrderObj = {
                    "PassengerList": outCheckList
                };
                OutCheckInfoList.push(singleOrderObj);
            }
        });
        url += (window.host || "") + '/ivacation/VisaInfo/OutCheckExame?keyData={' +
            '"OutCheckType":' + outCheckType + ',' +
            '"OutCheckInfoList":' + JSON.stringify(OutCheckInfoList);
        if (btnFlag == "send") {
            showFn($(".batchSendSignDialog"), $(".batchSendSignDialogCont"));
        }
        else if (btnFlag == "out") {
            showFn($(".batchOutSignDialog"), $(".batchOutSignDialogCont"));
        }
        else {
            showFn($(".batchreFuseSignDialog"), $(".batchreFuseSignDialogCont"));
            url += ',"Remark":{remark}';
        }
        url += '}';
        $(this).attr("url", url);
    } else {
        $.tip({
            title: '操作确认',
            text: '<p style="text-align:center">亲，请选择要批量的项哦？</p>',
            isOneBtn: true
        });
    }
});
//批量出签订单状态改变,确认弹框弹出
$("#batchOutSignEnter").click(function () {
    var url = $(".batchOutSign").attr("url");
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        success: function (data) {
            if (data.ErrorCode == 0) {
                getNum();
                checkFn(2);
                closeFn($(".batchOutSignDialog"), $(".batchOutSignDialogCont"));
                $(".tab-Content input[type=checkbox]").each(function () {
                    this.checked = false;
                });
            } else {
                closeFn($(".batchOutSignDialog"), $(".batchOutSignDialogCont"));
                $.tip({
                    title: '操作确认',
                    text: '<p style="text-align:center">' + data.ErrorDes + '</p>',
                    isOneBtn: true
                });
            }
        }
    });
});
//批量送签订单状态改变，弹出确认弹框
$("#batchSendSignEnter").click(function () {
    var url = $(".batchSendSign").attr("url");
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        success: function (data) {
            if (data.ErrorCode == 0) {
                closeFn($(".batchSendSignDialog"), $(".batchSendSignDialogCont"));
                checkFn(1);
                getNum();
                $(".tcontent input[type=checkbox]").each(function () {
                    this.checked = false;
                });
            } else {
                closeFn($(".batchSendSignDialog"), $(".batchSendSignDialogCont"));
            }
        }
    });
});

//批量拒签弹框确认按钮
$("#batchRefuseSignEnter").click(function () {
    var url = $(".batchRefuseSign").attr("url"),
        remark = ""; //备注信息

    remark = $(".refuseSignCont").val();
    if (remark == "") {
        $(".readTime").removeClass("none");
        return;
    }
    url = url.replace("{remark}", '"' + remark + '"');
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        success: function (data) {
            if (data.ErrorCode == 0) {
                closeFn($(".batchreFuseSignDialog"), $(".batchreFuseSignDialogCont"));
                checkFn(2);
                getNum();
            } else {
                closeFn($(".batchreFuseSignDialog"), $(".batchreFuseSignDialogCont"));
            }
        }
    });
});
// 弹框显示
function showFn(currentDialog, dialogCont) {
    $(currentDialog).removeClass("none");
    $(dialogCont).removeClass("none");
}
// 弹框关闭
function closeFn(currentDialog, dialogCont) {
    $(currentDialog).addClass("none");
    $(dialogCont).addClass("none");
}

/***********************待送签列表界面脚本********************/
(function () {
    // 全选
    $("#btnCheckAll").bind("click", function () {
        $("[name = chkItem]:checkbox").attr("checked", true);
        $(this).html("取消");
    });
    $(".sendClose").click(function () {
        closeFn($(".sendSignDialog"), $(".sendSign_main_content"));
    });
    // 出游人列表全选
    $(".tab-iton1 .travelSelect").click(function () {
        if (this.checked) {
            $(".tab-iton1 .check-box").each(function () {
                this.checked = true;
            });
        } else {
            $(".tab-iton1 .check-box").each(function () {
                this.checked = false;
            });
        }
    });
    $(".tab-iton1").delegate(".check-box", "click", function () {
        var isAll = true;
        $(".tab-iton1 .check-box").each(function () {
            if (this.checked) {
                isAll = true;
            } else {
                isAll = false;
                return false;
            }
        });
        $(".tab-iton1 .travelSelect")[0].checked = isAll;
    });
})();


/**************************待出签列表界面脚本********************/
(function () {
    // 待出签列表页面的出游人列表
    $(".tab-iton1,.tab-iton2").delegate(".triangle", "click", function () {

        var $this = $(this);
        if ($this.hasClass("down")) {
            $this.removeClass("down").addClass("up");
            $this.closest(".tourlist").children(".listDetails").removeClass("none");
        } else {
            $this.removeClass("up").addClass("down");
            $this.closest(".tourlist").children(".listDetails").addClass("none");
        }
    });

    // 全选
    $("#outCheckAll").bind("click", function () {
        $("[name = outbox]:checkbox").attr("checked", true);
        $(this).html("取消");
    });
    $(".outClose").click(function () {
        closeFn($(".outSignDialog"), $(".outSign_main_content"));
    });
    // 批量送签弹框关闭
    $(".batchSendSignClose").click(function () {
        closeFn($(".batchSendSignDialog"), $(".batchSendSignDialogCont"));
        $(".tcontent input[type=checkbox]").each(function () {
            this.checked = false;
        });
    });

    // 批量拒签弹框关闭
    $(".batchreFuseSignClose").click(function () {
        closeFn($(".batchreFuseSignDialog"), $(".batchreFuseSignDialogCont"));
        $(".tcontent input[type=checkbox]").each(function () {
            this.checked = false;
        });
    });
    // 待出签出游人列表全选
    $(".tab-iton2 .travelSelect").click(function () {
        if (this.checked) {
            $(".tab-iton2 .check-box").each(function () {
                this.checked = true;
            });
        } else {
            $(".tab-iton2 .check-box").each(function () {
                this.checked = false;
            });
        }
    });
    $(".tab-iton2").delegate(".check-box", "click", function () {
        var isAll = true;
        $(".tab-iton2 .check-box").each(function () {
            if (this.checked) {
                isAll = true;
            } else {
                isAll = false;
                return false;
            }
        });
        $(".tab-iton2 .travelSelect")[0].checked = isAll;
    });
})();
//格式转换
function dateFormat(d) {
    d = d == "" ? "" : d.split("T")[0];
    d = d == "1900-01-01" ? "无" : d;
    d = d == "2100-01-01" ? "无" : d;
    return d;
}
//时间转换
function timeFormat(t) {
    t = t == "" ? "" : t.split('.')[0].split('T')[0].concat(' ', t.split('.')[0].split('T')[1]);
    t = t == "1900-01-01" ? "无" : t;
    t = t == "2100-01-01" ? "无" : t;
    return t;
}
/**************************我的订单界面脚本********************/
function orderFn(index, Issort, sorturl, isExport) {

    var orderNo = "",
        visaType = 0,
        tripStartTime = "",
        tripEndTime = "",
        address = "",
        AddressName = '',
        EBVARegionId = '',
        area = 0,
        stayTime = "",
        AndNum = "",
        orderState = 0,
        submitStartTime = "",
        submitEndTime = "",
        mailStartTime = "",
        mailEndTime = "",
        signStartTime = "",
        signEndTime = "",
        fStartTime = "",
        fEndTime = "",
        sendStartTime = "",
        sendEndTime = "",
        outStartTime = "",
        outEndTime = "",
        fmailStartTime = "",
        fmailEndTime = "",
        traveler = "",
        checkHtml = "",
        url = "",
        IsNeedFast = "",
        ContactMoblie = "",
        OutSerialid = "",
        IsReconciliation = "",
        currentTab = $(".tab-iton0");

    orderNo = $(".orderNo", currentTab).val();
    visaType = parseInt($(".visaType", currentTab).val(), 10);
    tripStartTime = $(".tripStartTime", currentTab).val();
    tripEndTime = $(".tripEndTime", currentTab).val();
    if ($(".finalAddress ").val() == "") {
        address = "";
    } else {
        AddressName = $(".tab-iton" + index + " .address").val();
        address = $(".tab-iton" + index + " .address").attr("cids");
    }

    area = parseInt($(".area", currentTab).val(), 10);

    stayTime = $(".stayTime", currentTab).val();
    AndNum = $(".AndNum", currentTab).val();
    orderState = $(".orderState", currentTab).val();
    submitStartTime = $(".submitStartTime", currentTab).val();
    submitEndTime = $(".submitEndTime", currentTab).val();
    mailStartTime = $(".mailStartTime", currentTab).val();
    mailEndTime = $(".mailEndTime", currentTab).val();
    signStartTime = $(".signStartTime", currentTab).val();
    signEndTime = $(".signEndTime", currentTab).val();
    fStartTime = $(".fStartTime", currentTab).val();
    fEndTime = $(".fEndTime", currentTab).val();
    sendStartTime = $(".sendStartTime", currentTab).val();
    sendEndTime = $(".sendEndTime", currentTab).val();
    outStartTime = $(".outStartTime", currentTab).val();
    outEndTime = $(".outEndTime", currentTab).val();
    fmailStartTime = $(".fmailStartTime", currentTab).val();
    fmailEndTime = $(".fmailEndTime", currentTab).val();
    traveler = $(".traveler", currentTab).val();
    IsNeedFast = $(".IsNeedFast", currentTab).val();
    ContactMoblie = $(".ContactMoblie", currentTab).val();
    OutSerialid = $(".OutSerialid", currentTab).val();
    IsReconciliation = $(".IsReconciliation", currentTab).val();
    url = (window.host || "") + '/ivacation/VisaInfo/QueryOrderList?keyData={' +
        '"CostmerSerialId":' + '"' + orderNo + '"' + ',' +
        '"OrderStatus":' + '"' + orderState + '"' + ',' +
        '"PageIndex":{pageindex}' + ',' +
        '"PageSize":10' + ',' +

        '"DistrictId":' + '"' + area + '"' + ',' +
        '"AddressId":' + '"' + address + '"' + ',' +
        '"ContactMoblie":' + '"' + ContactMoblie + '"' + ',' +
        '"OutSerialid":' + '"' + OutSerialid + '"' + ',' +
        '"IsReconciliation":' + '"' + IsReconciliation + '"' + ',' +
        '"IsNeedFast":' + IsNeedFast;
    if (visaType) {
        url += ',"RelatedName":' + '"' + visaType + '"';
    }
    if (AddressName) {
        url += ',"AddressName":' + '"' + AddressName + '"';
    }
    //if(area) {
    //    url += ',"DistrictId":' + '"' + area + '"' ;
    //}
    if (traveler) {
        url += ',"PassengerName":' + '"' + traveler + '"';
    }
    if (stayTime) {
        url += ',"MaxStopTimes":' + '"' + stayTime + '"';
    }
    if (AndNum) {
        url += ',"EnterTimes":' + '"' + AndNum + '"';
    }
    if (signStartTime) {
        url += ',"MaterialReceiptStart":' + '"' + signStartTime + '"';
    }
    if (signEndTime) {
        url += ',"MaterialReceiptEnd":' + '"' + signEndTime + '"';
    }
    if (fmailStartTime) {
        url += ',"VisaMailStart":' + '"' + fmailStartTime + '"';
    }
    if (fmailEndTime) {
        url += ',"VisaMailEnd":' + '"' + fmailEndTime + '"';
    }
    if (tripStartTime) {
        url += ',"TravelStartDate":' + '"' + tripStartTime + '"';
    }
    if (tripEndTime) {
        url += ',"TravelEndDate":' + '"' + tripEndTime + '"';
    }
    if (sendStartTime) {
        url += ',"DeliveryStart":' + '"' + sendStartTime + '"';
    }
    if (sendEndTime) {
        url += ',"DeliveryEnd":' + '"' + sendEndTime + '"';
    }
    if (submitStartTime) {
        url += ',"MaterialPostStart":' + '"' + submitStartTime + '"';
    }
    if (submitEndTime) {
        url += ',"MaterialPostEnd":' + '"' + submitEndTime + '"';
    }
    if (mailStartTime) {
        url += ',"MaterialMailStart":' + '"' + mailStartTime + '"';
    }
    if (mailEndTime) {
        url += ',"MaterialMaiEnd":' + '"' + mailEndTime + '"';
    }
    if (fStartTime) {
        url += ',"MaterialFinalExameStart":' + '"' + fStartTime + '"';
    }
    if (fEndTime) {
        url += ',"MaterialFinalExameEnd":' + '"' + fEndTime + '"';
    }
    if (outStartTime) {
        url += ',"MaterialOutCheckStart":' + '"' + outStartTime + '"';
    }
    if (outEndTime) {
        url += ',"MaterialOutCheckEnd":' + '"' + outEndTime + '"';
    }
    if (Issort == 0) {
        url += ',"TravelStartOrderBy":2';
    }
    else if (Issort == 1) {
        url += sorturl;
    }
    url += '}';
    if (isExport) {
        $(".downLoad").attr("href", url.replace("{pageindex}", $(".currentpage").html()) + "&IsExport=1");
        $(".downLoad")[0].click();;
        return;
    }

    $(".tpage", currentTab).page({
        ajaxObj: {
            type: "GET",
            dataType: "jsonp",
            beforeSend: function () {
                $(".main-content .tabindex table tbody").html("<div class='data-loading'><div class='bg'></div><span>请稍候,订单信息正在加载中...</span></div>");
            },
            url: url,
            success: function (data) {
                $(".data-loading").remove();
                return data;
            }
        },
        preSortTotal: function (data) {
            return parseInt(Math.ceil((data.TotalCount / 10)), 10);
        },
        pageNO: "PageIndex", //页码的请求参数名
        callback: function (data, num) {
            if (data && data.OrderList && data.OrderList.length) {

                var list = data.OrderList,
                    i = 0,
                    html = "",
                    len = list.length,
                    item = null,
                    orderId = "",
                    num = "",
                    VisaContinent = "",
                    VisaCountry = "",
                    MaxStopTimes = "",
                    EnterTimes = "",
                    visaType = "",
                    district = "",
                    totalPrice = "",
                    submitDate = "",
                    mailDate = "",
                    MaterialSignDate = "",
                    finalCheckDate = "",
                    sendSignDate = "",
                    outSignDate = "",
                    VisaMailDate = "",
                    tripDate = "",
                    orderState = "",
                    PageFlag = "",
                    stateHtml = "";

                for (i; i < len; i++) {
                    item = list[i];
                    orderId = item.OrderSerialId;
                    num = item.CustomerSerialId;
                    VisaContinent = item.VisaContinent;
                    VisaCountry = item.VisaCountry;
                    MaxStopTimes = item.MaxStopTimes;
                    EnterTimes = item.EnterTimes;
                    visaType = item.RelatedName;
                    district = item.District;
                    totalPrice = item.TotalContractAmount;
                    submitDate = dateFormat(item.MaterialPostDate);
                    mailDate = dateFormat(item.MaterialMailDate);
                    MaterialSignDate = dateFormat(item.MaterialReceiptDate);
                    finalCheckDate = dateFormat(item.MaterialFinalExameDate);
                    sendSignDate = dateFormat(item.MaterialSendCheckDate);
                    outSignDate = dateFormat(item.MaterialOutCheckDate);
                    VisaMailDate = dateFormat(item.VisaMailDate);
                    tripDate = dateFormat(item.TravelDate);
                    orderState = item.OrderStatus;
                    PageFlag = item.PageFlag;
                    stateHtml = '<td>' + orderState + '</td>';
                    if (index == 0) {
                        if (PageFlag == "FF") {
                            checkHtml = '<a class="confirm myOrderBtn"  MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="1">初审</a>';
                        }
                        else if (PageFlag == 1) {
                            checkHtml = '<a class="confirm myOrderBtn"  MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="1">签收</a>';
                        }
                        else if (PageFlag == 2) {
                            checkHtml = '<a class="confirm myOrderBtn"  MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="2">终审</a>';
                        }
                        else if (PageFlag == 3) {
                            checkHtml = '<a class="confirm myOrderBtn" MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="3">送签</a>';
                        }
                        else if (PageFlag == 4) {
                            checkHtml = '<a class="confirm myOrderBtn" MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="4">出签</a>';
                        }
                        else if (PageFlag == 5) {
                            checkHtml = '<a class="confirm myOrderBtn"  MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="5">邮寄</a>';
                        }
                        else if (orderState == "已退款") {
                            checkHtml = '<a class="confirm"  MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '">退款</a>';
                        }
                        else if (orderState == "已支付") {
                            checkHtml = '<a class="confirm myOrderBtn"  MerchantId="608" OrderId="' + orderId + '" OrderSerialId="' + num + '" PageFlag="1">签收</a>';
                        }
                    }
                    html += '<tr class="' + (item.IsNeedFast == 1 ? "red" : "") + '"><td>' + num + '</td><td>' + VisaContinent + VisaCountry + '</td><td>' + MaxStopTimes + EnterTimes + '</td><td>' + visaType + '</td><td>' + district + '</td><td>' + totalPrice + '</td><td>'
                        + submitDate + '</td><td>' + mailDate + '</td><td>' + MaterialSignDate + '</td><td>' + finalCheckDate + '</td><td>' + sendSignDate +
                        '</td><td>' + outSignDate + '</td><td>' + VisaMailDate + '</td><td>' + tripDate + '</td>' + stateHtml + '<td>' + checkHtml + '</td></tr>';
                }
            } else {
                html = '<tr><td colspan="16" class="no-data">暂无数据</td></tr>';
                $(".tpage", currentTab).html("");
            }
            $(".tab-iton" + index + " tbody").html(html);
        }
    });
}
/*-----------------------------20151171548何莉送签、出签弹框详情---------------------------------------------------*/
$(".tab-Content").delegate(".signBtn", "click", function () {
    var $this = $(this),
        $querytype = $this.attr("querytype"),
        OrderSerialId = $this.attr("orderSerialId"),
        SerialId = $(this).attr("SerialId"),
        $currentDialog = "",
        url = "",
        PageFlag = "",
        IsDetail = 1,
        urlDown = "";
    $("#sendSignSure").attr("OrderSerialId", OrderSerialId);
    $("#outSignSure").attr("orderSerialId", OrderSerialId);
    if ($querytype == 2) {
        PageFlag = 3;
        showFn($(".sendSignDialog"), $(".sendSign_main_content"));
        $currentDialog = $(".sendSign_main_content");
        $("input[type=checkbox]", $currentDialog).each(function () {
            this.checked = false;
        });

    } else if ($querytype == 3) {
        PageFlag = 4;
        showFn($(".outSignDialog"), $(".outSign_main_content"));
        $currentDialog = $(".outSign_main_content");
        $("input[type=checkbox]", $currentDialog).each(function () {
            this.checked = false;
        });
    }
    urlDown = IsUrl(PageFlag, OrderSerialId, SerialId);
    detailBDownAjax(urlDown, PageFlag, "", IsDetail);
});

/*****************转化日期格式为yyyy-mm-dd********************/
function getNowFormatDate() {
    var day = new Date();
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    //初始化时间
    //Year= day.getYear();//有火狐下2008年显示108的bug
    Year = day.getFullYear(); //ie火狐下都可以
    Month = day.getMonth() + 1;
    Day = day.getDate();
    //Hour = day.getHours();
    // Minute = day.getMinutes();
    // Second = day.getSeconds();
    CurrentDate += Year + "-";
    if (Month >= 10) {
        CurrentDate += Month + "-";
    } else {
        CurrentDate += "0" + Month + "-";
    }
    if (Day >= 10) {
        CurrentDate += Day;
    } else {
        CurrentDate += "0" + Day;
    }
    return CurrentDate;
}
//送签相关操作
$("body").delegate(".innerBatchSendSign", "click", function () {
    var $this = $(this);
    $(".sendSign_details .signBox").each(function () {
        if (this.checked) {
            $(this).parent().parent().find(".signSelect").val("2");
        }
    });
});

$("body").delegate(".sendSign_details .signSelect", "change", function () {
    var stateValue = $(this).val();//获得选择的Value值

    if (stateValue == "1") {
        $(this).parent().parent().find(".signBox")[0].checked = false;
    }
    if (stateValue == "2") {
        $(this).parent().parent().find(".signBox")[0].checked = true;
    }
});
/*----------------------------------20160309byqhl/订单详情页-----------------------------*/
//点击出游人切换样式和数据
$(".cont_tourman ul").delegate('li', 'click', function () {
    var $this = $(this),
        index = $this.index(),
        PageFlag = "",
        num = index + 1;
    var matriNum = $('.Downtour').find('.item:nth-child(' + num + ')').attr("data-matriNum");
    $('#J_matriNum',$($(".outline")[1])).html(matriNum);
    $(".tourbtn").attr("index", index);
    $this.addClass("current").siblings().removeClass("current");
    $('.tourman:nth-child(' + num + ')', $this.closest(".listbox")).removeClass("none").siblings().addClass("none");
    $('.item:nth-child(' + num + ')', $this.closest(".listbox")).removeClass("none").siblings().addClass("none");
});
/*-------------------订单详情页初审、终审、签收等状态切换----------------------------------*/
$(".decideType ul").delegate('li', 'click', function () {
    var $this = $(this),
        index = $this.index(),
        urlDown = "",
        flag = index + 1,
        OrderSerialId = "",
        SerialId = "";
    OrderSerialId = $(".tab" + index).attr("OrderSerialId");
    SerialId = $(".tab" + index).attr("SerialId");
    $this.addClass("current").siblings().removeClass("current");
    $($(".outline")[index]).removeClass("none").siblings().addClass("none");
    $('.cont_tourman ul li:nth-child(1)').addClass("current").siblings().removeClass("current");
    urlDown = IsUrl(flag, OrderSerialId, SerialId);
    if (flag == 1 || flag == 2) {
        detailADownAjax(urlDown, flag, 0);
    }
    else if (flag == 3 || flag == 4) {
        detailBDownAjax(urlDown, flag, "", "");
    }
    else {
        detailCDownAjax(urlDown, flag, "");
    }
});
$(".myorder_content").delegate('.myorderCheckclose', 'click', function () {
    closeFn($(".myorderCheckDialog"), $(".myorder_content"));
});
/*-------------------------订单详情页弹出框时接入数据-----------------------------------*/

$(".tab-Content").delegate('.myOrderBtn', 'click', function () {
    showFn($(".myorderCheckDialog"), $(".myorder_content"));
    var $this = $(this),
        OrderSerialId = $this.attr("orderSerialId"),
        PageFlag = $this.attr("PageFlag"),
        SerialId = $this.attr("OrderId"),
        UserId = "",
        urlDown = "",
        MaterialId = "",
        urlUp = (window.host || "") + '/ivacation/VisaInfo/QueryOrderDetail?PageIndex=1&keyData={"OrderSerialid":"' + SerialId + '"}';
    if (PageFlag == 1 || PageFlag == 2) {
        $(".diftourman", $this).each(function () {
            UserId = $(this).attr("UserId");
            MaterialId = $(this).attr("MaterialId");
            $(".tourbtn", $this).attr({
                "UserId": UserId,
                "MaterialId": MaterialId
            });
        });
    }
    else {
        UserId = $this.attr("UserId");
    }
    $(".examType").attr({ OrderSerialId: OrderSerialId, SerialId: SerialId });
    urlDown = IsUrl(PageFlag, OrderSerialId, SerialId);
    orderUpAjax(urlUp, PageFlag);
    if (PageFlag == 1 || PageFlag == 2) {
        detailADownAjax(urlDown, PageFlag, 0);
    }
    else if (PageFlag == 3 || PageFlag == 4) {
        detailBDownAjax(urlDown, PageFlag, "", "");
    }
    else {
        detailCDownAjax(urlDown, PageFlag, "");
    }
});
function IsUrl(PageFlag, OrderSerialId, SerialId) {
    var urlDown = "";
    if (PageFlag == 1) {
        urlDown = (window.host || "") + '/ivacation/VisaInfo/QueryMaterialAuditDetail?keyData={"OrderSerialId":"' + OrderSerialId + '","SerialId":"' + SerialId + '","QueryType": "2"}';
    }
    else if (PageFlag == 2) {
        urlDown = (window.host || "") + '/ivacation/VisaInfo/QueryMaterialAuditDetail?keyData={"OrderSerialId":"' + OrderSerialId + '","SerialId": "' + SerialId + '","QueryType": "1"}';
    }
    else if (PageFlag == 3) {
        urlDown = (window.host || "") + '/ivacation/VisaInfo/QueryOutCheckDetail?keyData={"CustomerSerialID":"' + OrderSerialId + '","QueryType":1,}';
    }
    else if (PageFlag == 4) {
        urlDown = (window.host || "") + '/ivacation/VisaInfo/QueryOutCheckDetail?keyData={"CustomerSerialID":"' + OrderSerialId + '","QueryType":2}';
    }
    else if (PageFlag == 5) {
        urlDown = (window.host || "") + '/ivacation/VisaInfo/QueryVisaMail?keyData={"CustomerSerialID":"' + OrderSerialId + '"}';
    }
    return urlDown;
}
function getQueryOrderDetail(OrderSerialId, callback) {
    var url = (window.host || "") + '/ivacation/VisaInfo/QueryOrderDetail?keyData={"OrderSerialid":"' + OrderSerialId + '"}';
    $.ajax({
        Type: "POST",
        dataType: "jsonp",
        url: url,
        success: function (data) {
            callback(data);
        }
    });
}
/*----------------------------------------订单详情页渲染页面开始---------------------------------*/
/*
 *  urlDown: 异步地址
 *  PageFlag:区分初审、签收、终审、出签、送签、邮寄的参数
 *  tourindex:初审、终审、签收页面记录出游人index值
 */
//页面上半部分数据一致
function orderUpAjax(urlUp, PageFlag) {
    var index = PageFlag - 1;
    $(".tab" + index).addClass("current").siblings().removeClass("current");
    $($(".outline")[index]).removeClass("none").siblings().addClass("none");
    $.ajax({
        Type: "GET",
        dataType: "jsonp",
        url: urlUp,
        success: function (data) {
            if (data.ErrorCode == 0) {
                if (data && data.OrderInfo) {
                    var list = "",
                        CustomerSerialId = "",
                        VisaContinent = "",
                        VisaCountry = "",
                        destination = "",
                        MaxStopTimes = "",
                        EnterTimes = "",
                        stayAndTimes = "",
                        RelatedName = "";
                    list = data.OrderInfo;
                    CustomerSerialId = list.CustomerSerialId;
                    VisaContinent = list.VisaContinent;
                    VisaCountry = list.VisaCountry;
                    MaxStopTimes = list.MaxStopTimes;
                    EnterTimes = list.EnterTimes;
                    RelatedName = list.RelatedName;
                    destination = VisaContinent + VisaCountry;
                    stayAndTimes = MaxStopTimes + EnterTimes;
                    $(".CustomerSerialId").html(CustomerSerialId);

                    $(".OrderSerialid").val(list.OrderSerialId);
                    $(".destination").html(destination);
                    $(".stayAndTimes").html(stayAndTimes);
                    $(".VisaTypeName").html(RelatedName);
                }
            }
        }
    });
}
//签收、终审
function detailADownAjax(urlDown, PageFlag, tourindex) {
    getQueryOrderDetail($($(".examType[serialid]")).attr("serialid"), function (orderdetail) {
        console.log(orderdetail);
        $.ajax({
            Type: "POST",
            dataType: "jsonp",
            url: urlDown,
            success: function (data) {
                if (data.ErrorCode == 0) {
                    if (data && data.TravelPersonList && data.RemarkInfoList) {
                        var index = PageFlag - 1;
                        $(".tab" + index).addClass("current").siblings().removeClass("current");
                        $($(".outline")[index]).removeClass("none").siblings().addClass("none");
                        //出游人tab切换名显示
                        var tourlist = '',
                            num = tourindex + 1,
                            manlist = "",
                            manitemlist = "",
                            remarklist = "",
                            Uptourlist = "",
                            Downtourlist = "",
                            CustomerSerialId = "",
                            OrderSerialId = "",
                            UserId = "",
                            uName = "",
                            persontype = "",
                            $thisType = "";
                        var currentPageFlag = 0;
                        if (orderdetail && orderdetail.OrderInfo) {
                            currentPageFlag = orderdetail.OrderInfo.PageFlag;
                        }
                        manlist = data.TravelPersonList;
                        remarklist = data.RemarkInfoList;
                        $thisType = $($(".outline")[index]);
                        for (var i = 0; i < manlist.length; i++) {
                            manitemlist = manlist[i].UserMaterialList;
                            CustomerSerialId = manlist[i].CustomerSerialId;
                            OrderSerialId = manlist[i].OrderSerialId;
                            UserId = manlist[i].UserId;
                            uName = manlist[i].UserName;
                            persontype = manlist[i].PersonType;
                            tourlist += '<li class="diftourman" index="' + i + '" CustomerSerialId="' + CustomerSerialId + '" OrderSerialId="' + OrderSerialId + '">' + uName + '</li>';

                            // 材料列表显示
                            if (manitemlist.length == 0) {
                                $('.cont_details table tbody').html('<tr><td colspan="4">暂无数据</td></tr>');
                            }
                            else {
                                var materialHtml = '',
                                    checkHeadHtml = '',
                                    passHeadHtml = '';
                                for (var t = 0, tLen = manitemlist.length; t < tLen ; t++) {
                                    var mList = manitemlist,
                                        mNd = mList[t].MaterialId,
                                        mName = mList[t].MaterialName,
                                        mstatus = mList[t].Status,
                                        mRemark = mList[t].Remark,
                                        Enclosure = mList[t].EnclosureList,
                                        checkHtml = '',
                                        passHtml = '',
                                        remarkHtml = '',
                                        EnclosureName = "",
                                        IsTrue = true,
                                        EnclosureHref = "",
                                        EnclosureNum = [],
                                        EnclosureStr = "",
                                        mstatusvalue = mList[t].StatusValue;
                                    for (var ELen = 0; ELen < Enclosure.length; ELen++) {
                                        EnclosureNum = Enclosure[ELen].split(",");
                                        EnclosureName = EnclosureNum[0];
                                        EnclosureHref = EnclosureNum[1];
                                        EnclosureStr += '<a class="enclosure" href="' + EnclosureHref + '">' + EnclosureName + '</a>';
                                    }
                                    if (PageFlag == 1) {
                                        if (currentPageFlag > 1) {
                                            if (mstatus == "已签收") {
                                                checkHtml = '<input id="' + mNd + '" class="checkbox" type="checkbox" name="checkbox" checked disabled="disabled" mstatusvalue="' + mstatusvalue + '"/>';
                                            }
                                            else {
                                                checkHtml = '<input id="' + mNd + '" class="checkbox" type="checkbox" name="checkbox" disabled="disabled" mstatusvalue="' + mstatusvalue + '"/>';
                                            }
                                        }
                                        else {
                                            if (mstatus == "已签收") {
                                                checkHtml = '<input id="' + mNd + '" class="checkbox" type="checkbox" name="checkbox" checked mstatusvalue="' + mstatusvalue + '"/>';
                                            }
                                            else {
                                                checkHtml = '<input id="' + mNd + '" class="checkbox" type="checkbox" name="checkbox" mstatusvalue="' + mstatusvalue + '"/>';
                                            }
                                        }
                                        if (mRemark) {
                                            remarkHtml = '<input type="text" placeholder="" size="50" value="' + mRemark + '"/>';
                                        }
                                        else {
                                            remarkHtml = '<input type="text" placeholder="" size="50" /></td>';
                                        }
                                        materialHtml += '<tr><td>' + mName + '</td>' + '<td class="status" MaterialId="' + mNd + '" UserId="' + UserId + '" status="' + mstatusvalue + '" currentPageFlag="' + currentPageFlag + '">' + mstatus + '</td>' + '<td>' + checkHtml + '</td>' +
                                            '<td>' + remarkHtml + '</td></tr>';
                                    }
                                    else if (PageFlag == 2) {
                                        if (mRemark) {
                                            remarkHtml = '<input class="getval" type="text" placeholder="请填写不通过原因" size="50" value="' + mRemark + '"/>';
                                        }
                                        else {
                                            remarkHtml = '<input class="getval" type="text" placeholder="请填写不通过原因" size="50" />';
                                        }
                                        if (currentPageFlag > 2) { //
                                            if (mstatus == "通过") {
                                                Uptourlist += '<div class="tourman none" index="' + i + '"><table cellspacing="0"><thead><tr><th class="w_10">出游人姓名</th><th class="w_10">出游人类型</th><th class="w_10">性别</th><th class="w_10">证件类型</th><th class="w_10">证件号码</th><th class="w_20">材料状态</th><th class="w_20">备注</th><th class="w_10">操作</th></tr></thead><tbody><tr><td>'+uName+'</td><td>'+ persontype +'</td><td></td><td>'+ manlist[i].VisaTypeName +'</td><td>'+ manlist[i].CustomerSerialId +'</td><td>通过</td><td><input type="text" class="passTime" id="date38" placeholder="请选择预送签时间"></td><td><a href="javascript:;" class="cont_btn btn1 tourbtn sure save">保存</a></td></tr></tbody></table></div>';
                                                passHtml = '<span class="orderTxt" style="color: rgb(255, 102, 0);" ispass="Pass">通过</span> <span class="orderTxt distance">不通过</span>';
                                            }
                                            else if (mstatus == "不通过") {
                                                Uptourlist += '<div class="tourman none" index="' + i + '"><table cellspacing="0"><thead><tr><th class="w_10">出游人姓名</th><th class="w_10">出游人类型</th><th class="w_10">性别</th><th class="w_10">证件类型</th><th class="w_10">证件号码</th><th class="w_20">材料状态</th><th class="w_20">备注</th><th class="w_10">操作</th></tr></thead><tbody><tr><td>'+uName+'</td><td>'+ persontype +'</td><td></td><td>'+ manlist[i].VisaTypeName +'</td><td>'+ manlist[i].CustomerSerialId +'</td><td>审核不通过</td><td>'+remarkHtml+'</td><td><a href="javascript:;" class="cont_btn btn1 tourbtn sure save">保存</a></td></tr></tbody></table></div>';
                                                passHtml = '<span class="orderTxt" >通过</span> <span class="orderTxt distance" style="color: rgb(255, 102, 0);" ispass="noPass">不通过</span>';
                                            }
                                            else {
                                                passHtml = '<span class="orderTxt" >通过</span> <span class="orderTxt distance" >不通过</span>';
                                            }
                                        }
                                        else {
                                            if (mstatus == "通过") {
                                                passHtml = '<span class="orderTxt detailfinalpass" style="color: rgb(255, 102, 0);" ispass="Pass">通过</span> <span class="orderTxt distance detailfinalnopass">不通过</span>';
                                            }
                                            else if (mstatus == "不通过") {
                                                passHtml = '<span class="orderTxt detailfinalpass" >通过</span> <span class="orderTxt distance detailfinalnopass" style="color: rgb(255, 102, 0);" ispass="noPass">不通过</span>';
                                            }
                                            else {
                                                passHtml = '<span class="orderTxt detailfinalpass" >通过</span> <span class="orderTxt distance detailfinalnopass" >不通过</span>';
                                            }
                                        }

                                        materialHtml += '<tr class="J_data" materialid="'+ mNd +'" userid ="'+ UserId +'" status="' + mstatusvalue + '" currentPageFlag="' + currentPageFlag + '"><td>' + mName + '</td>' + '<td>' + EnclosureStr + '</td></tr>';
                                    }
                                }
                                if (PageFlag == 1) {
                                    if (currentPageFlag > 1) {
                                        checkHeadHtml = '<input type="checkbox" name="checkbox" class="signCheckAll" disabled="disabled">操作</th>';
                                    }
                                    else if (mstatusvalue >= 0 && mstatusvalue < 8) {
                                        checkHeadHtml = '<input type="checkbox" name="checkbox" class="signCheckAll">操作</th>';
                                    }
                                    Uptourlist += '<div class="cont_confirm tourman none" index=' + i + '><div><span>出游人：</span><span class="UserName">' + uName + '</span> </div><div> <span>人员类型：</span> <span class="manType">' + persontype + '</span></div></div>';
                                    Downtourlist += '<div class="item none"><div class="listbox"><div class="cont_details "><table cellspacing="0"><thead><tr>'
                                        + '<th class="w_25">材料名称</th><th class="w_20">签收状态</th><th class="w_20">'
                                        + checkHeadHtml + '<th class="w_35">备注</th></tr></thead><tbody>' + materialHtml + '</tbody></table></div></div></div>';
                                }
                                else if (PageFlag == 2) {
                                    /*if (currentPageFlag > 2) {
                                        passHeadHtml = '<div class="cont_btn passhead">通过</div>操作<div class="cont_btn nopasshead">不通过</div>';
                                    }
                                    else {
                                        passHeadHtml = '<div class="cont_btn finalpass passhead">通过</div>操作<div class="cont_btn finalnopass nopasshead">不通过</div>';
                                    }*/
                                    Uptourlist += '<div class="tourman none" index="' + i + '"><table cellspacing="0"><thead><tr><th class="w_10">出游人姓名</th><th class="w_10">出游人类型</th><th class="w_10">性别</th><th class="w_10">证件类型</th><th class="w_10">证件号码</th><th class="w_20">材料状态</th><th class="w_20">备注</th><th class="w_10">操作</th></tr></thead><tbody><tr><td>'+uName+'</td><td>'+ persontype +'</td><td></td><td>'+ manlist[i].VisaTypeName +'</td><td>'+ manlist[i].CustomerSerialId +'</td><td><select id="J_matriSel"><option value="0">请选择材料状态</option><option value="1">审核不通过</option><option value="2">通过</option></select></td><td id="J_isPassOrNot"><input type="text" class="noPassReson none" placeholder="请填写不通过原因"/><input type="text" class="passTime none" id="date38" placeholder="请选择预送签时间"></td><td class="J_saveBtn"><a href="javascript:;" class="cont_btn btn1 tourbtn sure save none">保存</a></td></tr></tbody></table></div>';
                                    Downtourlist += '<div class="item none" data-matriNum = "'+ tLen +'" index=' + i + '><div class="listbox"><div class="cont_details"><table cellspacing="0"><thead><tr><th class="w_20">材料内容</th>'
                                        + '<th class="w_245">附件列表</th></tr></thead><tbody>' + materialHtml + '</tbody></table></div></div></div>';
                                }
                            }
                            $('.Uptour', $thisType).html(Uptourlist);
                            $('.Downtour', $thisType).html(Downtourlist);
                            $('#J_matriNum', $thisType).html(manlist[0].UserMaterialList.length);
                            var cal38 = new fish.Calendar({
                                skin: "green",
                                monthNum: 2,
                                zIndex: 22,
                                isBigRange: true
                            });
                            fish.all(".passTime").on("focus", function (e) {
                                var startDate = new Date();
                                cal38.pick({
                                    startDate: startDate,
                                    elem: this,
                                    mode: "rangeTo",
                                    showOtherMonth: true,
                                    currentDate: [startDate], // 直接使用日期对象或者日期字符串，表示使用单选模式，使用数组，表示使用区间选择模式，第一个是开始时间，第二个是结束时间，也是选中的时间，如果使用区间选择，最佳实践是startDate与第一个时间保持一致，区间选择可以选择后面一个日期，也可以选择2个日期，currentDate，有正向和反向区间之分
                                    zIndex: 22
                                });
                            });
                            //终审切换材料状态
                            $(document).on("change","#J_matriSel",function(){
                                var self = $(this);
                                var val = self.val();
                                if(val == 1){
                                    self.parent("td").siblings("#J_isPassOrNot").find(".passTime").addClass("none");
                                    self.parent("td").siblings("#J_isPassOrNot").find(".noPassReson").removeClass("none");
                                    self.parent("td").siblings(".J_saveBtn").find("a").removeClass("none");
                                }else if(val == 2){
                                    self.parent("td").siblings("#J_isPassOrNot").find(".noPassReson").addClass("none");
                                    self.parent("td").siblings("#J_isPassOrNot").find(".passTime").removeClass("none");
                                    self.parent("td").siblings(".J_saveBtn").find("a").removeClass("none");
                                }else if(val == 0){
                                    self.parent("td").siblings("#J_isPassOrNot").find("input").addClass("none");
                                    self.parent("td").siblings(".J_saveBtn").find("a").addClass("none");
                                }
                            });
                            var dt = new Date(data.CODESendDate);
                            if (dt.getYear() > 0) {

                                $("#date38").val(data.CODESendDate.substring(0, 10));
                            }
                            else {
                                $("#date38").val("");
                            }
                        }

                        $('.cont_tourman ul', $thisType).html(tourlist);
                        $('.cont_tourman ul li:nth-child(' + num + ')', $thisType).addClass("current");
                        $('.tourman:nth-child(' + num + ')', $thisType).removeClass("none");
                        $('.item:nth-child(' + num + ')', $thisType).removeClass("none");
                        addAllBtn();
                        signcli();
                        /*----------------------操作日志数据导入----------------------*/
                        if (remarklist.length == 0) {
                            $('.cont_note table tbody', $thisType).html('<tr><td colspan="4">暂无数据</td></tr>');
                        }
                        else {
                            var operationHtml = "",
                                operationCont = $('.cont_note table tbody', $thisType);
                            for (var t = 0, tLen = remarklist.length; t < tLen ; t++) {
                                var RemarkDate = timeFormat(remarklist[t].RemarkDate),
                                    RemarkPoint = remarklist[t].Status,
                                    RemarkDesc = remarklist[t].RemarkDesc,
                                    Remarker = remarklist[t].Remarker;
                                operationHtml += '<tr><td>' + RemarkDate + '</td>' + '<td>' + RemarkPoint + '</td>' + '<td>' + RemarkDesc + '</td>' +
                                    '<td>' + Remarker + '</td></tr>';
                            }
                            operationCont.html(operationHtml);
                        }
                    }
                }
                else {
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center;color:red;">' + data.ErrorDes + '</p>',
                        isOneBtn: true,
                    });
                }
            },
            error: function () {
                $.tip({
                    title: '操作确认',
                    text: '<p style="text-align:center;color:red;">' + data.ErrorDes + '</p>',
                    isOneBtn: true,
                });
            }
        });
    });

}
//出签、送签
function detailBDownAjax(urlDown, PageFlag, tourindex, IsDetail) {
    getQueryOrderDetail($($(".examType[serialid]")).attr("serialid"), function (orderdetail) {
        console.log(2);
        $.ajax({
            Type: "POST",
            dataType: "jsonp",
            url: urlDown,
            success: function (data) {
                if (data.ErrorCode == 0) {
                    if (data && data.OutCheckList && data.RemarkInfoList) {
                        var index = PageFlag - 1;
                        $(".tab" + index).addClass("current").siblings().removeClass("current");
                        $($(".outline")[index]).removeClass("none").siblings().addClass("none");
                        var signmanlist = "",
                            signremarklist = "";
                        signmanlist = data.OutCheckList;
                        signremarklist = data.RemarkInfoList;
                        if (signmanlist.length == 0) {
                            $('.cont_details table tbody').html('<tr><td colspan="4">暂无数据</td></tr>');
                        }
                        else {
                            var signmaterialHtml = '',
                                remarkHtml = '',
                                signmateriaCont = $('.cont_details table tbody');
                            var currentPageFlag = 0;
                            var orderFlag = "";
                            if (orderdetail && orderdetail.OrderInfo) {
                                currentPageFlag = orderdetail.OrderInfo.PageFlag;
                                orderFlag = orderdetail.OrderInfo.OrderStatus;
                            }

                            for (var k = 0, kLen = signmanlist.length; k < kLen ; k++) {
                                var signmList = signmanlist,
                                    ETAHtml = "",
                                    cancel = 0,
                                    ETAName = signmList[k].ETAName,
                                    ETAPath = signmList[k].ETAPath,
                                    IsETA = signmList[k].IsETA,
                                    remark = signmList[k].Remark,
                                    signmNd = signmList[k].UserId,
                                    signmName = signmList[k].UserName,
                                    signmstatus = signmList[k].Status,
                                    signmstatusvalue = signmList[k].UserStatus;

                                var signcheckHtml = '',
                                    signpassHtml = '',
                                    ETAIsnone = '';
                                if (PageFlag == 3) {
                                    if (currentPageFlag > 3) {
                                        if (signmstatusvalue == "待送签") {
                                            signcheckHtml = '<input id="' + signmNd + '" class="checkbox" type="checkbox" name="checkbox" disabled="disabled"/>';
                                        }
                                        else {
                                            signcheckHtml = '<input id="' + signmNd + '" class="checkbox" type="checkbox" name="checkbox" checked disabled="disabled"/>';
                                        }
                                    }
                                    else {
                                        if (signmstatusvalue == "待送签") {
                                            signcheckHtml = '<input id="' + signmNd + '" class="checkbox" type="checkbox" name="checkbox"/>';
                                        }
                                        else {
                                            signcheckHtml = '<input id="' + signmNd + '" class="checkbox" type="checkbox" name="checkbox" checked/>';
                                        }
                                    }
                                    if (remark) {
                                        remarkHtml = '<input PassengerId="' + signmNd + '" status="' + signmstatus + '" class="signRemark" type="text" placeholder="送签后请在此维护预出签日期" size="50" value="' + remark + '"/>';
                                    }
                                    else {
                                        remarkHtml = '<input PassengerId="' + signmNd + '" status="' + signmstatus + '" class="signRemark" type="text" placeholder="送签后请在此维护预出签日期" size="50" />';
                                    }
                                    signmaterialHtml += '<tr><td  class="signPassen" >' + signmName + '</td>' + '<td class="changeStatus" PassengerId="' + signmNd + '" status="' + signmstatus + '">' + signmstatusvalue + '</td>' +
                                        '<td>' + signcheckHtml + '</td>' + '<td class="remark">' + remarkHtml + '</td></tr>';
                                }
                                else if (PageFlag == 4) {
                                    if (currentPageFlag > 4 || orderFlag == "已出签") {
                                        if (signmstatusvalue == "已出签") {
                                            signpassHtml = '<span class="signTxt outsignpass" issign="Sign" style="color: rgb(255, 102, 0);">出签</span> <span class="signTxt distance outsignnopass">拒签</span>';
                                        }
                                        else if (signmstatusvalue == "拒签") {
                                            signpassHtml = '<span class="signTxt outsignpass"  >出签</span> <span class="signTxt distance outsignnopass" issign="NoSign" style="color: rgb(255, 102, 0);">拒签</span>';
                                        }
                                        else {
                                            signpassHtml = '<span class="signTxt outsignpass" >出签</span> <span class="signTxt distance outsignnopass">拒签</span>';
                                        }
                                    }
                                    else {
                                        if (signmstatusvalue == "已出签") {
                                            signpassHtml = '<span class="signTxt outsignpass" issign="Sign" style="color: rgb(255, 102, 0);">出签</span> <span class="signTxt distance outsignnopass">拒签</span>';
                                        }
                                        else if (signmstatusvalue == "拒签") {
                                            signpassHtml = '<span class="signTxt outsignpass" >出签</span> <span class="signTxt distance outsignnopass" issign="NoSign" style="color: rgb(255, 102, 0);">拒签</span>';
                                        }
                                        else {
                                            signpassHtml = '<span class="signTxt outsignpass">出签</span> <span class="signTxt distance outsignnopass">拒签</span>';
                                        }
                                    }
                                    if (IsETA) {
                                        if (ETAName) {
                                            ETAHtml = '<a ETAName="' + ETAName + '" class="ETAName" href="' + ETAPath + '" target="_blank" PassengerId=' + signmNd + ' CustomerSerialId="' + $(".CustomerSerialId").html() + '" PassengerName="' + signmName + '" >' + ETAName + '</a><i class="cancel" onclick="delETA(this)"></i>';
                                        }
                                        else {
                                            ETAHtml = ETAHtml = '<a class="ETAPath" href="javascript:;" ETAName="' + ETAName + '" PassengerId=' + signmNd + ' PassengerName="' + signmName + '" CustomerSerialId="' + $(".CustomerSerialId").html() + '"  onclick="upload(this)">上传</a>';
                                        }
                                        $(".eta").removeClass("none");
                                        ETAIsnone = '<td class="etaTxt" ETAPath="' + ETAPath + '" ETAName="' + ETAName + '">' + ETAHtml + '</td>';
                                        $(".changew").css("width", "35%");
                                    }
                                    else {
                                        $(".eta").addClass("none");
                                        ETAIsnone = '<td class="etaTxt none">' + ETAHtml + '</td>';
                                        $(".changew").css("width", "50%");
                                    }
                                    if (remark) {
                                        remarkHtml = '<input class="refuse" type="text" placeholder="拒签请填写拒签原因 " size="50" value="' + remark + '"/>';
                                    }
                                    else {
                                        remarkHtml = '<input class="refuse" type="text" placeholder="拒签请填写拒签原因 " size="50" />';
                                    }
                                    signmaterialHtml += '<tr><td>' + signmName + '</td>' + '<td class="changeOutStatus"  PassengerId="' + signmNd + '" status="' + signmstatus + '" currentPageFlag="' + currentPageFlag + '" orderFlag="' + orderFlag + '">' + signmstatusvalue + '</td>' +
                                        '<td class="outAndRefuse" PassengerId="' + signmNd + '" Status="' + signmstatus + '">' + signpassHtml + '</td>' +
                                        ETAIsnone + '<td class="remark">' + remarkHtml + '</td></tr>';
                                }
                            }
                            signmateriaCont.html(signmaterialHtml);
                        }
                        /*----------------------操作日志数据导入----------------------*/
                        if (signremarklist.length == 0) {
                            $('.cont_note table tbody').html('<tr><td colspan="4">暂无数据</td></tr>');
                        }
                        else {
                            var signoperationHtml = "",
                                signoperationCont = $('.cont_note table tbody');
                            for (var s = 0, sLen = signremarklist.length; s < sLen ; s++) {
                                var signRemarkDate = timeFormat(signremarklist[s].RemarkDate),
                                    signRemarkPoint = signremarklist[s].Status,
                                    signRemarkDesc = signremarklist[s].RemarkDesc,
                                    signRemarker = signremarklist[s].Remarker;
                                signoperationHtml += '<tr><td>' + signRemarkDate + '</td>' + '<td>' + signRemarkPoint + '</td>' + '<td>' + signRemarkDesc + '</td>' +
                                    '<td>' + signRemarker + '</td></tr>';
                            }
                            signoperationCont.html(signoperationHtml);
                        }
                    }
                }
                else {
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center;color:red;">' + data.ErrorDes + '</p>',
                        isOneBtn: true,
                    });
                }
            },
            error: function () {
                $.tip({
                    title: '操作确认',
                    text: '<p style="text-align:center;color:red;">' + data.ErrorDes + '</p>',
                    isOneBtn: true,
                });
            }
        });
    });

}
//邮寄
function detailCDownAjax(urlDown, PageFlag, tourindex) {
    $.ajax({
        Type: "POST",
        dataType: "jsonp",
        url: urlDown,
        success: function (data) {
            if (data.ErrorCode == 0) {
                if (data && data.Passenger && data.RemarkInfoList) {
                    var index = PageFlag - 1;
                    $(".tab" + index).addClass("current").siblings().removeClass("current");
                    $($(".outline")[index]).removeClass("none").siblings().addClass("none");
                    var mailList = "",
                        mailRemarkList = "";
                    mailList = data.Passenger;
                    mailRemarkList = data.RemarkInfoList;
                    if (mailList.length == 0) {
                        $('.cont_details table tbody').html('<tr><td colspan="4">暂无数据</td></tr>');
                    }
                    else {
                        var mailmaterialHtml = '',
                            mailmateriaCont = $('.cont_details table tbody');
                        for (var m = 0, mLen = mailList.length; m < mLen ; m++) {
                            var mailmList = mailList,
                                mailmNd = mailmList[m].PassengerId,
                                mailmName = mailmList[m].PassengerName,
                                mailmId = mailmList[m].MailId,
                                mailrName = mailmList[m].Recipient,
                                mailAddress = mailmList[m].MailAddress,
                                mailCompany = mailmList[m].MailCompany,
                                mailNumber = mailmList[m].MailNumber,
                                mailmstatus = mailmList[m].MailStatus,
                                mailPhone = mailmList[m].Phone;
                            if (mailmstatus == '已邮寄') {
                                var mailcheckHtml = '<input id="' + mailmNd + '" class="checkbox" type="checkbox" name="checkbox" disabled="disabled"/>';
                            }
                            else {
                                var mailcheckHtml = '<input id="' + mailmNd + '" class="checkbox" type="checkbox" name="checkbox"/>';
                            }
                            if (mailCompany == 529) {
                                var selectHtml = '<select name="" id="" class=""> <option id="529" value="529" selected="selected">顺丰快递</option><option id="530" value="530">EMS</option></select>';
                            }
                            else if (mailCompany == 530) {
                                var selectHtml = '<select name="" id="" class=""> <option id="529" value="529" >顺丰快递</option><option id="530" value="530" selected="selected">EMS</option></select>';
                            }
                            else {
                                var selectHtml = '<select name="" id="" class=""> <option selected="selected" value="0">--请选择--</option> <option id="529" value="529">顺丰快递</option><option id="530" value="530">EMS</option></select>';
                            }
                            mailmaterialHtml += '<tr><td>' + mailmName + '</td>' + '<td class="name"><input type="text" value="' + mailrName + '" size="10" /></td>' +
                                '<td class="mailPhone"><input type="text" value="' + mailPhone + '" size="10" /></td>' +
                                '<td class="address"><input type="text" value="' + mailAddress + '" size="40" /></td>' + '<td class="company">' + selectHtml + '</td>' +
                                '<td class="num"><input type="text" placeholder="" size="10" value="' + mailNumber + '"/></td>' + '<td class="mailstatus"PassengerId="' + mailmNd + '" PassengerName="' + mailmName + '" MailId="' + mailmId + '" Recipient="' + mailrName + '"  MailAddress="' + mailAddress + '" MailCompany="' + mailCompany + '" MailNumber="' + mailNumber + '" MailStatus="' + mailmstatus + '">' + mailmstatus + '</td>' +
                                '<td class="mailcheck">' + mailcheckHtml + '</td></tr>';
                        }
                        mailmateriaCont.html(mailmaterialHtml);
                    }
                    /*----------------------操作日志数据导入----------------------*/
                    if (mailRemarkList.length == 0) {
                        $('.cont_note table tbody').html('<tr><td colspan="4">暂无数据</td></tr>');
                    }
                    else {
                        var mailoperationHtml = "",
                            mailoperationCont = $('.cont_note table tbody');
                        for (var mm = 0, mmLen = mailRemarkList.length; mm < mmLen ; mm++) {
                            var mailRemarkDate = timeFormat(mailRemarkList[mm].RemarkDate),
                                mailRemarkPoint = mailRemarkList[mm].Status,
                                mailRemarkDesc = mailRemarkList[mm].RemarkDesc,
                                mailRemarker = mailRemarkList[mm].Remarker;
                            mailoperationHtml += '<tr><td>' + mailRemarkDate + '</td>' + '<td>' + mailRemarkPoint + '</td>' + '<td>' + mailRemarkDesc + '</td>' +
                                '<td>' + mailRemarker + '</td></tr>';
                        }
                        mailoperationCont.html(mailoperationHtml);
                    }
                }
            }
            else {
                $.tip({
                    title: '操作确认',
                    text: '<p style="text-align:center;color:red;">' + data.ErrorDes + '</p>',
                    isOneBtn: true,
                });
            }
        },
        error: function () {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center;color:red;">' + data.ErrorDes + '</p>',
                isOneBtn: true,
            });
        }
    });
}
/*----------------------------------------订单详情页渲染页面结束---------------------------------*/
/*------------------------------订单详情页审核材料操作开始---------------------------------------*/
//签收全选、单选时的状态改变
//签收
function signcli() {
    var collid = $($(".outline")[0]).find(".signCheckAll"),
        singleCheck = $($(".outline")[0]).find(".Downtour .checkbox"),
        objs = $($(".outline")[0]).find(".status"),
        coll = "";
    for (var i = 0; i < objs.length; i++) {
        var thisStatus = objs.eq(i),
            statusvalue = thisStatus.attr("status");
        if (statusvalue < 8 && statusvalue != 4) {
            if (collid.attr("disabled")) {
                collid.removeAttr("disabled");
                break;
            }
        }
    }
    collid.click(function () {
        var thisCheck = $(this),
            i = "",
            sameParents = $(this).closest("table"),
            status = sameParents.find(".status"),
            statusvalue = '';
        coll = sameParents.find(".checkbox");
        if (thisCheck.is(':checked')) {
            for (i = 0 ; i < coll.length; i++) {
                statusvalue = status.eq(i).attr("status");
                var currentPageFlag = status.attr("currentPageFlag");
                if (currentPageFlag <= 1) {
                    coll[i].checked = true;
                    status.eq(i).html("已签收");
                }
            }
        }
        else {
            for (i = 0; i < coll.length; i++) {
                statusvalue = status.eq(i).attr("status");
                var currentPageFlag = status.attr("currentPageFlag");
                if (currentPageFlag <= 1) {
                    coll[i].checked = false;
                    status.eq(i).html("待签收");
                }
            }
        }
    });
    singleCheck.click(function () {
        var thisCheck = $(this),
            parent = $(this).parent(),
            status = parent.prev();
        if (thisCheck.is(':checked')) {
            status.html("已签收");
        } else {
            status.html("待签收");
        }
    });
};
//终审
function addAllBtn() {
    var current = $($(".outline")[1]).find(".Downtour .passhead"),
        $parent = current.closest("table"),
        status = '',
        statusvalue = "",
        objs = $parent.find(".status");
    for (var i = 0; i < objs.length; i++) {
        status = objs.eq(i);
        statusvalue = status.attr("mstatus");
        var currentPageFlag = status.attr("currentPageFlag");
        if (currentPageFlag <= 2) {
            if (!status.parents("table").find(".passhead").hasClass("finalpass")) {
                status.parents("table").find(".passhead").addClass("finalpass");
                status.parents("table").find(".nopasshead").addClass("finalnopass");
            }
            break;
        }
    }
}
$($(".outline")[1]).find(".Downtour").delegate('.finalpass', 'click', function () {
    var current = $(this);
    AllPassBtn(1, current);
});
$($(".outline")[1]).find(".Downtour").delegate('.finalnopass', 'click', function () {
    var current = $(this);
    AllPassBtn(0, current);
});
function AllPassBtn(index, current) {
    var close = current.siblings(),
        $parent = current.closest("table"),
        attr = "IsPass",
        pass = '',
        nopass = '',
        status = '',
        statusvalue = "",
        attrpassvalue = "Pass",
        objs = $parent.find(".status"),
        attrnopassvalue = "noPass";

    if (current.attr("allselect")) {
        current.removeAttr("allselect");
    }
    else {
        current.attr("allselect", "select");
        if (close.attr("allselect")) {
            close.removeAttr("allselect");
        }
    }

    for (var i = 0; i < objs.length; i++) {
        status = objs.eq(i);
        statusvalue = status.attr("status");
        pass = status.next().find(".detailfinalpass");
        nopass = status.next().find(".detailfinalnopass");
        var currentPageFlag = status.attr("currentPageFlag");
        if (currentPageFlag <= 2) {
            if (index) {
                if (current.attr("allselect")) {
                    pass.attr(attr, attrpassvalue);
                    pass.css("color", "#f60");
                    status.html("通过");
                    if (!close.attr("allselect")) {
                        nopass.css("color", "#008000");
                        nopass.removeAttr(attr);
                    }
                }
                else {
                    pass.css("color", "#008000");
                    pass.removeAttr(attr);
                    status.html("待审核");
                }
            }
            else {
                if (current.attr("allselect")) {
                    nopass.attr(attr, attrnopassvalue);
                    nopass.css("color", "#f60");
                    status.html("不通过");
                    if (!close.attr("allselect")) {
                        pass.css("color", "#008000");
                        pass.removeAttr(attr);
                    }
                }
                else {
                    nopass.css("color", "#008000");
                    nopass.removeAttr(attr);
                    status.html("待审核");
                }
            }

        }
    }
}
$($(".outline")[1]).find(".Downtour").delegate('.detailfinalpass', 'click', function () {
    var current = $(this);
    SinglePassBtn(1, current)
});
$($(".outline")[1]).find(".Downtour").delegate('.detailfinalnopass', 'click', function () {
    var current = $(this);
    SinglePassBtn(0, current);
});
function SinglePassBtn(index, current) {
    var attr = "IsPass",
        oppose = current.siblings(),
        status = current.parent().prev();
    if (index) {
        if (current.attr(attr) == "Pass") {
            current.css("color", "#008000");
            current.removeAttr(attr);
            status.html("待审核");
        }
        else {
            if (oppose.attr(attr) == "noPass") {
                oppose.css("color", "#008000");
                oppose.removeAttr(attr);
            }
            current.attr(attr, "Pass");
            current.css("color", "#f60");
            status.html("通过");

        }
    }
    else {
        if (current.attr(attr) == "noPass") {
            current.css("color", "#008000");
            current.removeAttr(attr);
            status.html("待审核");
        }
        else {
            if (oppose.attr(attr) == "Pass") {
                oppose.css("color", "#008000");
                oppose.removeAttr(attr);
            }
            current.attr(attr, "noPass");
            current.css("color", "#f60");
            status.html("不通过");
        }
    }
}
//送签
$("#givesignCheckAll").click(function () {
    var current = $(this);
    SendSignBtn(current);

});
$("#sendSignCheckAll").click(function () {
    var current = $(this);
    SendSignBtn(current);

});
$($(".outline")[2]).find(".cont_details").delegate(".checkbox", 'click', function () {
    var current = $(this);
    SingleSendSignBtn(current);
});
$(".sendSign_main_content .cont_details").delegate('.checkbox', 'click', function () {
    var current = $(this);
    SingleSendSignBtn(current);
});
function SendSignBtn(current) {
    var Singlecurrent = current.parents("table").find(".checkbox"),
        status = Singlecurrent.parent().prev(),
        statusvalue = '';
    var currentPageFlag = status.attr("currentPageFlag");
    if (currentPageFlag > 3)
        return;
    if (current.is(':checked')) {
        for (var i = 0; i < Singlecurrent.length; i++) {
            statusvalue = status.eq(i).attr("status");
            Singlecurrent[i].checked = true;
            status.eq(i).html("已送签");
        }
    }
    else {
        for (var i = 0; i < Singlecurrent.length; i++) {
            statusvalue = status.eq(i).attr("status");
            Singlecurrent[i].checked = false;
            status.eq(i).html("待送签");

        }

    }
}
function SingleSendSignBtn(current) {
    var parent = current.parent(),
        status = parent.prev(),
        statusvalue = status.attr("status");
    if (current.is(':checked')) {
        status.html("已送签");
    }
    else {
        if (statusvalue == 0) {
            status.html("审核中");
        }
        else {
            status.html("待送签");
        }
    }
}
//出签、拒签
$(".outbtn").click(function () {
    var current = $(this).parents("table").find(".outsignpass"),
        status = current.parent().prev(),
        IsPass = 0,
        statusvalue = '';
    for (var i = 0; i < status.length; i++) {
        statusvalue = status.eq(i).attr("status");
        var currentPageFlag = status.attr("currentPageFlag");
        var orderFlag = status.attr("orderFlag");
        if (currentPageFlag <= 4 && orderFlag != "已出签" && orderFlag != "拒签") {
            IsPass = 1;
        }
        break;
    }
    if (IsPass) {
        PassBtn(current);
    }

});
$(".refusebtn").click(function () {
    var current = $(this).parents("table").find(".outsignnopass"),
        status = current.parent().prev(),
        IsPass = 0,
        statusvalue = '';
    for (var i = 0; i < status.length; i++) {
        statusvalue = status.eq(i).attr("status");
        var currentPageFlag = status.attr("currentPageFlag");
        var orderFlag = status.attr("orderFlag");
        if (currentPageFlag <= 4 && orderFlag != "已出签" && orderFlag != "拒签") {
            IsPass = 1;
        }
        break;
    }
    if (IsPass) {
        NoPassBtn(current);
    }
});
$(".outSign_main_content .cont_details").delegate(".outsignpass", 'click', function () {
    var current = $(this);
    PassBtn(current);
});
$($(".outline")[3]).find(".cont_details").delegate(".outsignpass", 'click', function () {
    var current = $(this);
    PassBtn(current);
});
$(".outSign_main_content .cont_details").delegate(".outsignnopass", 'click', function () {
    var current = $(this);
    NoPassBtn(current);
});
$($(".outline")[3]).find(".cont_details").delegate(".outsignnopass", 'click', function () {
    var current = $(this);
    NoPassBtn(current);
});
function PassBtn(current) {
    var that = current.siblings(),
        status = current.parent().prev(),
        statusvalue = status.attr("status");
    if (current.attr("IsSign") == "Sign") {
        current.css("color", "rgb(0, 128, 0)");
        current.removeAttr("IsSign");
        status.html("已送签");
    }
    else {
        current.css("color", "rgb(255, 102, 0)");
        current.attr("IsSign", "Sign");
        that.removeAttr("IsSign");
        that.css("color", "rgb(0, 128, 0)");
        status.html("已出签");
    }
}
function NoPassBtn(current) {
    var that = current.siblings(),
        status = current.parent().prev(),
        statusvalue = status.attr("status");
    if (current.attr("IsSign") == "NoSign") {
        current.css("color", "rgb(0, 128, 0)");
        current.removeAttr("IsSign");
        status.html("已送签");
    }
    else {
        current.css("color", "rgb(255, 102, 0)");
        current.attr("IsSign", "NoSign");
        that.removeAttr("IsSign");
        that.css("color", "rgb(0, 128, 0)");
        status.html("拒签");
    }

}
//邮寄
$($(".outline")[4]).delegate(".actCheckAll", 'click', function () {
    var current = $(this);
    actcli(current);
});
function actcli(current) {
    var collid = current,
        IsMail = 1,
        status = current.parents("table").find(".mailstatus"),
        coll = "";

    for (var i = 0; i < status.length; i++) {
        if (status.eq(i).attr("mailstatus") == "待邮寄") {
            IsMail = 0;
        }
        break;
    }
    if (IsMail) {
        if (!collid.attr("disabled")) {
            collid.attr("disabled", 'disabled');
        }
    }
    else {
        for (var i = 0; i < status.length; i++) {
            if (status.eq(i).attr("mailstatus") == "待邮寄") {
                coll = status.eq(i).next().find(".checkbox");
                if (!current.prop("checked")) {
                    coll.removeAttr("checked");
                    status.eq(i).html("待邮寄");
                }
                else {
                    coll.prop("checked", true);
                    status.eq(i).html("已邮寄");
                }
            }
        }
    };
}
$($(".outline")[4]).find("tbody ").delegate(".checkbox", 'click', function () {
    var thisCheck = $(this),
        parent = $(this).parent(),
        status = parent.prev();
    if (thisCheck.is(':checked')) {
        status.html("已邮寄");
    } else {
        status.html("待邮寄");
    }
});
initEve();
function initEve() {
    $(document).delegate(".outline .sure", 'click', function () {
        var i = $(this).parents(".outline").index();
        var pageFlag = i + 1;
        orderBtn(pageFlag, "",$(this));
    });
    $('#sendSignSure').click(function () {
        var this1 = $(this),
            PageFlag = this1.attr("flag"),
            IsDetail = 1;
        orderBtn(PageFlag, IsDetail);
    });
    $('#outSignSure').click(function () {
        var this1 = $(this),
            PageFlag = this1.attr("flag"),
            IsDetail = 1;
        orderBtn(PageFlag, IsDetail);
    });
}
function orderBtn(PageFlag, IsDetail,self) {
    var orderserialid = "",
        serialid = "",
        thisAttr = $($(".outline")[PageFlag - 1]),
        flag = PageFlag + 1;
    orderserialid = $(".examType").attr("orderserialid");
    serialid = $(".examType").attr("serialid");
    if (PageFlag == 1) {
        var ExameList = [],
            MaterialId = "",
            ReadySendDate = "",
            UserId = "",
            url = "",
            keyData = '',
            statusvalue = '',
            Remark = "",
            ExameType = "",
            urlDown = "",
            obj = "",
            IsAllProcess = true;
        var objs = $($(".outline")[0]).find(".Downtour .status");


        for (var i = 0; i < objs.length; i++) {
            var this1 = objs.eq(i);
            MaterialId = this1.attr('MaterialId');
            UserId = this1.attr('UserId');
            ExameType = 2;
            Remark = $("input[type=text]", this1.parent()).val();
            statusvalue = this1.attr("status");
            if (this1.html() == "待签收") {
                IsAllProcess = false;
            }
            var Action = 0
            if ($(".checkbox:checked", this1.parent()).length == 0) {
                Action = -1;
            }
            obj = {
                "MaterialId": MaterialId,
                "UserId": UserId,
                "Remark": Remark,
                "Action": Action
            }
            ExameList.push(obj);
        }
        if (ExameList.length == 0) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，请选择出游人材料签收哦</p>',
                isOneBtn: true
            });
        }
        else if (IsAllProcess) {
            showFn($(".orderBtnSignDialog"), $(".orderBtnSignDialogCont"));
        }
        else {
            showFn($(".orderBtnSignpartDialog"), $(".orderBtnSignpartDialogCont"));
        }
        url = (window.host || "") + '/ivacation/VisaInfo/MaterialAuditExame';
        keyData = 'keyData={ExameType:' + ExameType + ',ExameList:' + JSON.stringify(ExameList) + "}";
        thisAttr.attr({
            "url": url,
            "IsIndex": IsIndex,
            "flag": flag,
            "keyData": keyData,
            "orderserialid": orderserialid,
            "serialid": serialid
        });
    }
    else if (PageFlag == 2) {
        var ExameList = [],
            MaterialId = "",
            ReadySendDate = "",
            UserId = "",
            Remark = "",
            urlDown = "",
            obj = "",
            keyData = '',
            IsOperate = 1,
            Action = 0,
            IsAllActionTrue = true,
            IsWaitActionTrue = true;
        IsRemark = 0,
        IsSkip = 0;
        var passheads = $($(".outline")[1]).find(".passhead");
        for (var j = 0; j < passheads.length; j++) {
            if (passheads.hasClass("finalpass")) {
                IsOperate = 0;
            }
            break;
        }
        var objs = $($(".outline")[1]).find(".Downtour").find(".J_data");
        var tourman = $($(".outline")[1]).find(".Uptour").find(".tourman");
        //把Remark值放在J_data上面，根据之前的接口所需字段处理的。不知道之后的接口需不需要
        for(var t=0; t< tourman.length; t++){
            $($($(".outline")[1]).find(".Downtour").find(".item")[t]).find(".J_data").attr("Remark",$(tourman[t]).find('.noPassReson:not(".none")').val()||"");
        }
        ReadySendDate = $("#date38").val();
        for (var i = 0; i < objs.length; i++) {
            var this1 = objs.eq(i);
            MaterialId = this1.attr('MaterialId');
            UserId = this1.attr('UserId');
            Remark = this1.attr("Remark");//办理人所有材料的不通过的原因是一样的。
            obj = {
                "MaterialId": MaterialId,
                "UserId": UserId,
                "Remark": Remark,
                "Action": Action
            }
            ExameList.push(obj);
        }


        /*for (var i = 0; i < objs.length; i++) {
            var this1 = objs.eq(i);
            MaterialId = this1.attr('MaterialId');
            UserId = this1.attr('UserId');
            Remark = this1.siblings(".remark").find("input").val();
            var next1 = this1.next();
            if (this1.html() != "通过") {
                IsAllActionTrue = false;
            }
            if (this1.html() == "待审核") {
                IsWaitActionTrue = false;
            }
            if (next1.find("span[ispass=Pass]").length > 0) {
                Action = 0;
            }
            else if (next1.find("span[ispass=noPass]").length > 0) {
                Action = 1;
                IsSkip = 1;
                if ($(".noPassReson").val() == "" && !$(".noPassReson").hasClass("none")) {
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center">亲，不通过要写不通过原因哦</p>',
                        isOneBtn: true
                    });
                    return;
                }
            }
            else {
                Action = -1;
            }
            obj = {
                "MaterialId": MaterialId,
                "UserId": UserId,
                "Remark": Remark,
                "Action": Action
            }
            ExameList.push(obj);
        }*/
        var matriStatus = $($(".outline")[1]).find(".Uptour").find(".tourman").find("select");//判断材料的状态
        for(var m=0; m< matriStatus.length; m++){
            var self = $(matriStatus[m]);
            if (self.val() == 0) {
                $.tip({
                    title: '操作确认',
                    text: '<p style="text-align:center">亲，请选择材料终审哦</p>',
                    isOneBtn: true
                });
                return;
            }
            if(self.val() == 1){
                Action = 1;
                IsSkip = 1;
                if(self.parent("td").siblings("#J_isPassOrNot").find(".noPassReson").val() == ""){
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center">亲，不通过要写不通过原因哦</p>',
                        isOneBtn: true
                    });
                    return;
                }
            }
            if(self.val() == 2){
                Action = 0;
                if(self.parent("td").siblings("#J_isPassOrNot").find(".passTime").val() == ""){
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center">亲，还有预送签日期没有填哦</p>',
                        isOneBtn: true
                    });
                    return;
                }
            }
        }
        /*if ($(".noPassReson").val() == "" && !$(".noPassReson").hasClass("none")) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，不通过要写不通过原因哦</p>',
                isOneBtn: true
            });
            return;
        }
        if (IsAllActionTrue && !ReadySendDate && !$("#date38").hasClass("none")) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，还有预送签日期没有填哦</p>',
                isOneBtn: true
            });
            return;
        }
        if ($("#J_matriSel").val() == 0) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，请选择材料终审哦</p>',
                isOneBtn: true
            });
            return;
        }
        else */
        if (IsSkip) {
            showFn($(".orderBtnNoDialog"), $(".orderBtnNoDialogCont"));
        }
        else if (IsWaitActionTrue) {
            showFn($(".orderBtnfinalDialog"), $(".orderBtnfinalDialogCont"));
        }
        else {
            showFn($(".orderBtnfinalpartDialog"), $(".orderBtnfinalpartDialogCont"));
        }
        var url = (window.host || "") + '/ivacation/VisaInfo/MaterialAuditExame';
        keyData = 'keyData={ReadySendDate:"' + (ReadySendDate ? ReadySendDate : "1900-1-1") + '",ExameType:1,ExameList:' + JSON.stringify(ExameList) + "}";
        thisAttr.attr({
            "url": url,
            "flag": flag,
            "keyData": keyData,
            "orderserialid": orderserialid,
            "serialid": serialid
        });
    }
        //-------送签操作----------
    else if (PageFlag == 3) {
        var PassengerId = "",
            status = "",
            statusvalue = "",
            Remark = "",
            urlDown = "",
            PassengerList = [],
            signRemark = '',
            IsIndex = '',
            keyData = '',
            objs = '',
            datalist = [],
            IsAllProcess = true;
        if (IsDetail) {
            objs = $(".sendSign_main_content .cont_details .changeStatus");
            orderserialid = $("#sendSignSure ").attr("orderserialid");
            IsIndex = 1;
        }
        else {
            objs = $($(".outline")[2]).find(".cont_details .changeStatus");
        }

        for (var i = 0; i < objs.length; i++) {
            var this1 = objs.eq(i);
            PassengerId = this1.attr('PassengerId');
            statusvalue = this1.attr("status");
            status = 2;
            if (this1.html() == "审核中" || this1.html() == "待送签") {
                IsAllProcess = false;
            }
            Remark = this1.siblings(".remark").find("input").val();
            if ($(".checkbox:checked", this1.parent()).length == 0) {
                status = 1;
            }
            obj = {
                "PassengerId": PassengerId,
                "Status": status,
                "Remark": Remark,
            }
            PassengerList.push(obj);


        }
        if (PassengerList.length == 0) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，请选择出游人送签哦</p>',
                isOneBtn: true
            });
        }
        else if (IsAllProcess) {
            showFn($(".orderBtnOutSignDialog"), $(".orderBtnOutSignDialogCont"));
        }
        else {
            showFn($(".orderBtnOutSignpartDialog"), $(".orderBtnOutSignpartDialogCont"));
        }
        var data = {
            "OutCheckType": 0,
            "OutCheckInfoList": [{ "PassengerList": PassengerList }],
        }
        var url = (window.host || "") + '/ivacation/VisaInfo/OutCheckExame';
        keyData = 'keyData=' + JSON.stringify(data);
        thisAttr.attr({
            "url": url,
            "IsIndex": IsIndex,
            "flag": flag,
            "keyData": keyData,
            "orderserialid": orderserialid,
            "serialid": serialid
        })

    }
    else if (PageFlag == 4) {
        var PassengerId = "",
            Status = "",
            Remark = "",
            IsETA = 1,
            etaContent = true,
            urlDown = "",
            PassengerList = [],
            objs = '',
            signRemark = '',
            IsTrue = true,
            IsIndex = '',
            keyData = '',
            datalist = [],
            isAllProcess = true;
        IsRefuse = true;
        //是否电子签
        if ($(".eta").hasClass("none")) {
            IsETA = 0;
        }
        if (IsDetail) {
            objs = $(".outSign_main_content .cont_details .changeOutStatus");
            orderserialid = $("#outSignSure ").attr("orderserialid");
            IsIndex = 1;
        }
        else {
            objs = $($(".outline")[3]).find(".cont_details .changeOutStatus");
        }
        //读取出签信息
        for (var i = 0; i < objs.length; i++) {
            var thisStatus = objs.eq(i),
                statusvalue = thisStatus.attr("status"),
                attrpass = thisStatus.next().find(".outsignpass[issign=Sign]").length > 0,
                attrnopass = thisStatus.next().find(".outsignnopass[issign=NoSign]").length > 0;
            PassengerId = thisStatus.attr('PassengerId');
            Remark = thisStatus.siblings(".remark").find("input").val();
            var ishaveETA = $(thisStatus).parent().find(".cancel").length > 0;
            if (attrpass) {
                Status = 3;
            }
            else if (attrnopass) {
                Status = 4;
                if (Remark == "") {
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center">亲，拒签请填写拒签原因哦</p>',
                        isOneBtn: true
                    });
                    return;
                }
            }
            else {
                if (!(thisStatus.html() == "已出签" || thisStatus.html() == "拒签")) {
                    isAllProcess = false;
                }
                Status = 2;
            }
            if (Status != 2) {
                if (IsETA == 1 && !ishaveETA) {
                    $.tip({
                        title: '操作确认',
                        text: '<p style="text-align:center">亲，电子签必须上传文件哦</p>',
                        isOneBtn: true
                    });
                    return;
                }
            }

            obj = {
                "PassengerId": PassengerId,
                "Status": Status,
                "Remark": Remark
            }
            PassengerList.push(obj);
        }
        if (PassengerList.length == 0) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，请选择出游人出签哦</p>',
                isOneBtn: true
            });
            return;
        }
        else if (isAllProcess && IsETA == 1) {
            showFn($(".orderBtnEtaDialog"), $(".orderBtnEtaDialogCont"));
        }
        else if (isAllProcess) {
            showFn($(".orderBtnOutDialog"), $(".orderBtnOutDialogCont"));
        }
        else {
            showFn($(".orderBtnOutpartDialog"), $(".orderBtnOutpartDialogCont"));
        }
        var data = {
            "Action": 0,
            "OutCheckType": 1,
            "OutCheckInfoList": [{ "PassengerList": PassengerList }],
        }
        var url = (window.host || "") + '/ivacation/VisaInfo/OutCheckExame';
        keyData = 'keyData=' + JSON.stringify(data);
        thisAttr.attr({
            "url": url,
            "IsIndex": IsIndex,
            "flag": flag,
            "orderserialid": orderserialid,
            "IsETA": IsETA,
            "keyData": keyData,
            "serialid": serialid
        });
    }
    else {
        var ExameList = [],
            PassengerId = "",
            PassengerName = "",
            Recipient = "",
            MailAddress = "",
            MailCompany = "",
            MailNumber = "",
            MailStatus = "",
            IsMail = true,
            Remark = "",
            obj = "",
            Phone = "",
            IsTrue = true,
            reg = /^\d{11}$/;
        var objs = $($(".outline")[4]).find(".cont_details  .mailstatus");
        for (var i = 0; i < objs.length; i++) {
            var this1 = objs.eq(i);
            var isCheckedFalse = this1.siblings(".mailcheck").find(".checkbox:checked").length == 0;
            if (isCheckedFalse) {
                if (this1.html() != "已邮寄") {
                    IsTrue = false;
                }
                continue;
            }
            PassengerId = this1.attr('PassengerId');
            PassengerName = this1.attr('PassengerName');
            Recipient = this1.siblings(".name").find("input").val();
            MailAddress = this1.siblings(".address").find("input").val();
            MailCompany = this1.siblings(".company").find("select").val();
            MailNumber = this1.siblings(".num").find("input").val();
            Phone = this1.siblings(".mailPhone").find("input").val().trim();
            if (!reg.test(Phone)) {
                $.tip({
                    title: '操作确认',
                    text: '<p style="text-align:center">亲，手机号格式错误，请重新填写哦</p>',
                    isOneBtn: true
                });
                return;
            }
            obj = {
                "PassengerId": PassengerId,
                "PassengerName": PassengerName,
                "Recipient": Recipient,
                "MailAddress": MailAddress,
                "MailCompany": MailCompany,
                "MailNumber": MailNumber,
                "MailStatus": "已邮寄",
                "Phone": Phone,
            }
            ExameList.push(obj);

        }
        if (ExameList.length == 0) {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，请选择材料邮寄哦</p>',
                isOneBtn: true
            });
            return;
        }
        else if (IsTrue) {
            showFn($(".orderBtnMailDialog"), $(".orderBtnMailDialogCont"));
        }
        else {
            $.tip({
                title: '操作确认',
                text: '<p style="text-align:center">亲，还有材料未邮寄哦</p>',
                isOneBtn: true
            });
            return;
        }

        var data = {
            "MailMesaageInfoList": ExameList,
            "Remark": "",
            "Action": 0,
            "CustomerSerialid": orderserialid
        }
        var url = (window.host || "") + '/ivacation/VisaInfo/VisaMail';
        keyData = 'keyData=' + JSON.stringify(data);
        thisAttr.attr("url", url);
        thisAttr.attr("keyData", keyData);
    }
}
//出签到邮寄
BtnA();
function BtnA() {
    var urlDown = '',
        this1 = $($(".outline")[3]),
        url = '',
        flag = '',
        IsETA,
        keyData = '',
        isrun = false,
        serialid = '',
        orderserialid = '',
        IsIndex = '';
    $(document).delegate(".orderBtnOutClose", "click", function () {
        closeFn($(".orderBtnOutDialog"), $(".orderBtnOutDialogCont"));
    });
    $(document).delegate(".orderBtnOutpartClose", "click", function () {
        closeFn($(".orderBtnOutpartDialog"), $(".orderBtnOutpartDialogCont"));
    });
    $(document).delegate(".orderBtnEtaClose", "click", function () {
        closeFn($(".orderBtnEtaDialog"), $(".orderBtnEtaDialogCont"));
    });
    $(document).delegate(".EtaenterBtn", "click", function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            IsIndex = this1.attr("IsIndex");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    if (IsIndex) {
                        checkFn(2);
                        closeFn($(".outSign_main_content"), $(".outSignDialog"));
                        closeFn($(".orderBtnEtaDialog"), $(".orderBtnEtaDialogCont"));
                    }
                    else {
                        orderFn(0, '', '');
                        closeFn($(".orderBtnEtaDialog"), $(".orderBtnEtaDialogCont"));
                        closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                    }
                },
                complete: function () {
                    isrun = false;
                }
            });
        }
    });
    $(document).delegate(".OutenterBtn", "click", function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            IsIndex = this1.attr("IsIndex");
            IsETA = this1.attr("IsETA");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    console.log(1);
                    closeFn($(".orderBtnOutDialog"), $(".orderBtnOutDialogCont"));
                    if (IsIndex) {
                        checkFn(2);
                        closeFn($(".outSign_main_content"), $(".outSignDialog"));
                    }
                    else {
                        urlDown = IsUrl(flag, orderserialid, serialid);
                        detailCDownAjax(urlDown, flag, "");
                    }
                },
                complete: function () {
                    isrun = false;
                }
            });
        }
    });
    $(document).delegate(".OutenterpartBtn", "click", function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            IsIndex = this1.attr("IsIndex");
            IsETA = this1.attr("IsETA");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnOutpartDialog"), $(".orderBtnOutpartDialogCont"));
                    if (IsIndex) {
                        checkFn(2);
                        closeFn($(".outSign_main_content"), $(".outSignDialog"));
                    }
                    else {
                        closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                    }

                },
                complete: function () {
                    isrun = false;
                }
            });
        }
    });
}
//签收到终审
BtnB();
function BtnB() {
    var urlDown = '',
        this1 = $($(".outline")[0]),
        url = '',
        isrun = false,
        flag = '',
        serialid = '',
        keyData = '',
        orderserialid = '',
        IsIndex = '';
    $(".orderBtnSignClose").click(function () {
        closeFn($(".orderBtnSignDialog"), $(".orderBtnSignDialogCont"));
    });
    $(".orderBtnSignpartClose").click(function () {
        closeFn($(".orderBtnSignpartDialog"), $(".orderBtnSignpartDialogCont"));
    });
    $(".SignenterBtn").click(function () {
        if (!isrun) {
            keyData = this1.attr("keyData");
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            IsIndex = this1.attr("IsIndex");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnSignDialog"), $(".orderBtnSignDialogCont"));
                    urlDown = IsUrl(flag, orderserialid, serialid);
                    detailADownAjax(urlDown, flag, 0);
                },
                complete: function () {
                    isrun = false;
                }
            });
        }

    });
    $(".SignenterpartBtn").click(function () {
        if (!isrun) {
            keyData = this1.attr("keyData");
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            IsIndex = this1.attr("IsIndex");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnSignpartDialog"), $(".orderBtnSignpartDialogCont"));
                    closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                },
                complete: function () {
                    isrun = false;
                }
            });
        }

    });
}
//终审到送签
BtnC();
function BtnC() {
    var urlDown = '',
        this1 = $($(".outline")[1]),
        url = '',
        flag = '',
        isrun = false,
        serialid = '',
        keyData = '',
        orderserialid = '';
    $(document).delegate(".orderBtnfinalClose", "click", function () {
        closeFn($(".orderBtnfinalDialog"), $(".orderBtnfinalDialogCont"));
    });
    $(document).delegate(".orderBtnNoClose", "click", function () {
        closeFn($(".orderBtnNoDialog"), $(".orderBtnNoDialogCont"));
    });
    $(document).delegate(".orderBtnfinalpartClose", "click", function () {
        closeFn($(".orderBtnfinalpartDialog"), $(".orderBtnfinalpartDialogCont"));
    });
    $(document).delegate(".NoenterBtn", "click", function () {
        if (!isrun) {
            keyData = this1.attr("keyData");
            isrun = true;
            url = this1.attr("url");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnNoDialog"), $(".orderBtnNoDialogCont"));

                    urlDown = IsUrl(2, orderserialid, serialid);
                    detailADownAjax(urlDown, 2, 0, "");
                },
                complete: function () {
                    isrun = false;
                }
            });
        }
    });
    $(document).delegate(".FinalpartBtn", "click", function () {
        if (!isrun) {
            keyData = this1.attr("keyData");
            isrun = true;
            url = this1.attr("url");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnfinalpartDialog"), $(".orderBtnfinalpartDialogCont"));
                    closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                },
                complete: function () {
                    isrun = false;
                }
            });
        }
    });
    $(document).delegate(".finalenterBtn", "click", function () {
        if (!isrun) {
            keyData = this1.attr("keyData");
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnfinalDialog"), $(".orderBtnfinalDialogCont"));
                    urlDown = IsUrl(flag, orderserialid, serialid);
                    detailBDownAjax(urlDown, flag, 0, "");
                },
                complete: function () {
                    isrun = false;
                }
            });
        }
    });
}
//送签到出签
BtnD();
function BtnD() {
    var urlDown = '',
        this1 = $($(".outline")[2]),
        url = '',
        flag = '',
        keyData = '',
        isrun = false,
        serialid = '',
        orderserialid = '',
        IsIndex = '';
    $(document).delegate(".orderBtnOutSignClose", "click", function () {
        closeFn($(".orderBtnOutSignDialog"), $(".orderBtnOutSignDialogCont"));
    });
    $(document).delegate(".orderBtnOutSignpartClose", "click", function () {
        closeFn($(".orderBtnOutSignpartDialog"), $(".orderBtnOutSignpartDialogCont"));
    });
    $(document).delegate(".OutSignenterBtn", "click", function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            IsIndex = this1.attr("IsIndex");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnOutSignDialog"), $(".orderBtnOutSignDialogCont"));
                    if (IsIndex) {
                        checkFn(1);
                        closeFn($(".sendSign_main_content"), $(".sendSignDialog"));
                    }
                    else {
                        urlDown = IsUrl(flag, orderserialid, serialid);
                        detailBDownAjax(urlDown, flag, "");
                    }
                },
                complete: function () {
                    isrun = false;
                }
            });
        }

    });
    $(document).delegate(".OutSignenterpartBtn", "click", function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            flag = parseInt(this1.attr("flag"));
            IsIndex = this1.attr("IsIndex");
            orderserialid = this1.attr("orderserialid");
            serialid = this1.attr("serialid");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                data: keyData,
                url: url,
                success: function (data) {
                    closeFn($(".orderBtnOutSignpartDialog"), $(".orderBtnOutSignpartDialogCont"));
                    if (IsIndex) {
                        checkFn(1);
                        closeFn($(".sendSign_main_content"), $(".sendSignDialog"));
                    }
                    else {
                        closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                        urlDown = IsUrl(flag, orderserialid, serialid);
                        detailBDownAjax(urlDown, flag, "");
                    }
                },
                complete: function () {
                    isrun = false;
                }
            });
        }

    });
}
//邮寄到我的订单页面
BtnE();
function BtnE() {
    var url = "",
        isrun = false,
        keyData = "",
        this1 = $($(".outline")[4]);
    $(".orderBtnMailClose").click(function () {
        closeFn($(".orderBtnMailDialog"), $(".orderBtnMailDialogCont"));
    });
    $(".orderBtnMailpartClose").click(function () {
        closeFn($(".orderBtnMailpartDialog"), $(".orderBtnMailpartDialogCont"));
    });
    $(".MailenterBtn").click(function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                url: url,
                data: keyData,
                success: function (data) {
                    closeFn($(".orderBtnMailDialog"), $(".orderBtnMailDialogCont"));
                    closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                    orderFn(0, "", "");
                },
                complete: function () {
                    isrun = false;
                }
            });
        }

    });

    $(".MailenterpartBtn").click(function () {
        if (!isrun) {
            isrun = true;
            url = this1.attr("url");
            keyData = this1.attr("keyData");
            $.ajax({
                type: "POST",
                url: url,
                data: keyData,
                success: function (data) {
                    closeFn($(".orderBtnMailpartDialog"), $(".orderBtnMailpartDialogCont"));
                    closeFn($(".myorder_content"), $(".myorderCheckDialog"));
                    orderFn(0, "", "");
                },
                complete: function () {
                    isrun = false;
                }
            });
        }

    });
}
/*-------------------------------订单详情页审核材料操作结束----------------------------------------------*/

/*-----------------------------我的订单列表页排序--------------------------------------------*/
$(document).delegate(".tab-iton0 .tcontent .datesort", "click", function () {

    var _this = $(this),
        sort = 0,
        sorturl = "",
        index = _this.attr("index"),
        _Up = _this.hasClass("up"),
        _Down = _this.hasClass("down"),
        _iUp = _this.find("i").hasClass("up"),
        isSelected = _this.hasClass("selected");
    if (isSelected) {
        if (_Up) {
            sort = 1;
            _this.removeClass("up").addClass("down");
            _this.find("i").removeClass("up").addClass("down");
            sorturl = sortAjax(sort, index);
        }
        else if (_Down) {
            sort = 2;
            _this.removeClass("down").addClass("up");
            _this.find("i").removeClass("down").addClass("up");
            sorturl = sortAjax(sort, index);
        }

    }
    else if (!isSelected) {
        sort = 0;
        _this.siblings().removeClass("selected");
        _this.addClass("selected");
        sorturl = sortAjax(sort, index);
    }
    orderFn(0, 1, sorturl);
});
function sortAjax(sort, index) {
    var url = "";
    if (index == 0) {
        url += ',"MaterialPostOrderBy":' + '"' + sort + '"';
    }
    if (index == 1) {
        url += ',"MaterialMailOrderBy":' + '"' + sort + '"';
    }
    if (index == 2) {
        url += ',"MaterialReceiptOrderBy":' + '"' + sort + '"';
    }
    if (index == 3) {
        url += ',"MaterialFinalOrderBy":' + '"' + sort + '"';
    }
    if (index == 4) {
        url += ',"DeliveryOrderBy":' + '"' + sort + '"';
    }
    if (index == 5) {
        url += ',"MaterialOutCheckOrderBy":' + '"' + sort + '"';
    }
    if (index == 6) {
        url += ',"VisaMailOrderBy":' + '"' + sort + '"';
    }
    if (index == 7) {
        url += ',"TravelStartOrderBy":' + '"' + sort + '"';
    }
    return url;
}
/*-----------------------------我的订单列表页结束--------------------------------------------*/

var t;
function upload(sender) {
    var btn = $("#file");
    t = $(sender);
    btn.click();

}

function upload2(sender) {
    if (sender.value == 1 || sender.value == "" || sender.value == null)
        return;
    var path = sender.value;
    var form = $("#form");
    var btn = $("#file");
    var uploadbtn = $("#upload");
    var url = (window.host || "") + '/ivacation/VisaInfo/UploadETA?q=1';
    sender = $(sender);
    url += "&PassengerId=" + t.attr("PassengerId");
    url += "&PassengerName=" + t.attr("PassengerName");
    url += "&CustomerSerialId=" + t.attr("CustomerSerialId");
    url += "&OrderSerialid=" + $(".OrderSerialid").val();
    form.attr("action", url);
    uploadbtn.click();
}
function savedata() {
    $("#form").ajaxSubmit({
        success: function (data) {
            alert("上传成功");
            $("#file")[0].value = "";
            data = JSON.parse(data);
            t.parent().append('<a ETAName="' + t.attr("ETAName") + '" target="_black" class="ETAName" href="' + data.Path + '"  PassengerId="' + t.attr("PassengerId") + '" PassengerName="' + t.attr("PassengerName") + '" CustomerSerialId="' + t.attr("CustomerSerialId") + '"> ' + data.Name + ' </a><i class="cancel" onclick="delETA(this)"></i>');
            t.remove();
            t.next().remove();
        }
    });
    return false;
}

function delETA(sender) {
    var btn = $(sender).prev();
    var url = (window.host || "") + '/ivacation/VisaInfo/DelETA?q=1';
    url += "&PassengerId=" + btn.attr("PassengerId");
    url += "&PassengerName=" + btn.attr("PassengerName");
    url += "&CustomerSerialId=" + btn.attr("CustomerSerialId");
    url += "&OrderSerialid=" + $(".OrderSerialid").val();
    $.post(url, null, function (data) {
        alert("删除成功");
        btn.parent().append('<a target="_black" etaname="null" class="ETAName" href="Javascript:;"  PassengerId="' + btn.attr("PassengerId") + '" PassengerName="' + btn.attr("PassengerName") + '" CustomerSerialId="' + $(".CustomerSerialId").val() + '" onclick="upload(this)">上传</a>');
        btn.remove();
        $(sender).remove();
    });
}



