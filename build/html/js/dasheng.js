/*from tccdn minify at 2015-12-1 13:36:46,file：/touch/app/pub/DoubleTwelve/main.js?v=201512011056*/
!(function(q, d) {
    var k = [{
        inside: "http://www.ly.com/zhuanti/runningman-zizhuyou?wvc1=1&wvc2=1&tcwvcnew=1",
        out: "http://www.ly.com/zhuanti/runningman-zizhuyou?wvc1=1&wvc2=1&tcwvcnew=1"
    }, {
        inside: "http://m.ly.com/dujia/zhuanti/12dacu.html?channelid=140&memberId=tcwvmid&wvc1=1&wvc2=1&tcwvcnew=1",
        out: "http://m.ly.com/dujia/zhuanti/12dacu.html?channelid=140&memberId=tcwvmid&wvc1=1&wvc2=1&tcwvcnew=1"
    }, {
        inside: "http://m.ly.com/zhuanti/djdc?channelid=143&wvc1=1&wvc2=1&tcwvcnew=1",
        out: "http://m.ly.com/zhuanti/djdc?channelid=143&wvc1=1&wvc2=1&tcwvcnew=1"
    }, {
        inside: "http://m.ly.com/youlun/cruisesale?channelid=141&lid=81&wvc1=1&wvc2=1&tcwvcnew=1",
        out: "http://m.ly.com/youlun/cruisesale?channelid=141&lid=81&wvc1=1&wvc2=1&tcwvcnew=1"
    }, {
        inside: "http://shouji.17u.cn/internal/h5/file/10/view/groupMsgList.html?wvc1=1&wvc2=1&mid=tcwvmid&tagID=45&tagName=%E5%8D%95%E8%BA%AB%E7%94%B7%E5%A5%B3",
        out: "http://appnew.ly.com/wsq/BbsTagIndex/?tagID=45&mid=tcwvmid&wvc1=1&wvc2=1&fromid=51"
    }, {
        inside: "http://www.yiqiyou.com/ThemeTravel/ThemeTravel/ThemeTravel/Index?cid=2&tcwvcwl&cityId=tcwvscid&tcwvcnew=1",
        out: "http://www.yiqiyou.com/ThemeTravel/ThemeTravel/ThemeTravel/Index?cid=2&tcwvcwl&cityId=tcwvscid&tcwvcnew=1"
    }, {
        inside: "http://www.ly.com/zhuanti/wenquankhd11/?tcwvcnew=1",
        out: "http://www.ly.com/zhuanti/wenquankhd11/?tcwvcnew=1"
    }, {
        inside: "http://shouji.17u.cn/internal/hotel/home?tcwvcnew=1",
        out: "http://m.17u.cn/client/qr/" + ($("#refid").val()) + "shouji.17u.cn%7Cinternal%7Chotel%7Chome%3Ftcwvcnew%3D1"
    }, {
        inside: "http://app.ly.com/train/html/train/oldWithNew/oldWithNew.html?channelid=146&mid=tcwvmid&wvc3=1&tcwvclogin&_wv=1&wvc1=1&wvc2=1&tcwvcnew=1",
        out: "http://app.ly.com/train/html/train/oldWithNew/oldWithNew.html?channelid=146&mid=tcwvmid&wvc3=1&tcwvclogin&_wv=1&wvc1=1&wvc2=1&tcwvcnew=1"
    }, {
        inside: "http://shouji.17u.cn/internal/flight/home?tcwvcnew=1&channelid=147&wvc1=1&wvc2=1",
        out: "http://m.17u.cn/client/qr/" + ($("#refid").val()) + "shouji.17u.cn%7Cinternal%7Cflight%7Chome%3Ftcwvcnew%3D1%26channelid%3D147%26wvc1%3D1%26wvc2%3D1"
    }, ];
    var n = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    var a = {};
    var p = $(".select_box select");
    var b = new c({
        container: ".broadcast",
        eTime: 500,
        delay: 1500
    });
    var j = new Date($("#nowTime").val().replace(/-/g, "/"));
    var h = new Date();
    var i = new Date(h.setTime(h.getTime() + 24 * 60 * 60 * 1000));
    var o = 0;
    q._tc_web_util = {};
    var l = {
        time: 10000,
        areaType: "华东",
        tabType: [1, 3, 11],
        init: function() {
            this.autoLogin();
            this.setInput();
            this.scroll();
            this.getProduct();
            this.getNowFormatDate();
            b.init();
            $(".everyDayRob_tab li").on("click", function() {
                l.setEvent("d12_1st_" + $(this).attr("data-click") + "_" + $(".select_box div").attr("data-click"));
                l.everyDayTab($(this));
                $(q).scroll()
            }
            );
            $(".nav_hide").on("click", function() {
                $(".nav_hide").hide();
                $(".nav_show").show()
            }
            );
            $(".nav_show").on("click", function() {
                $(".nav_hide").show();
                $(".nav_show").hide()
            }
            );
            $(".nav_content li").on("click", function() {
                var e = $(this).attr("data-index");
                $("body")[0].scrollTop = $("#nav_" + e).offset().top
            }
            );
            $(".more_rob").on("click", function() {
                l.setEvent("d12_1st_gdqg_" + $(".select_box div").attr("data-click"));
                if (g.isTc) {
                    location.href = "http://shouji.17u.cn/internal/h5/file/12/main.html?wvc1=1&wvc2=1#/panicbuy/0/index"
                } else {
                    location.href = "http://m.17u.cn/client/qr/78292511/tchome%7Ctchome%7C%3Ftab%3DflashSale%26tcwvshare%3Dindex"
                }
            }
            );
            $(".scrollSelectBox li").on("click", function() {
                var e = $(this).parent().attr("data-index");
                l.setEvent("d12_1st_" + $(this).attr("data-click") + "_" + $(".select_box div").attr("data-click"));
                if (e == 1) {
                    $("body")[0].scrollTop = parseInt($(".outBoundDouble").offset().top) - $(".scrollSelectBox")[0].clientHeight;
                    l.outBoundTab($(this))
                } else {
                    $("body")[0].scrollTop = parseInt($(".inlandDouble").offset().top) - $(".scrollSelectBox")[0].clientHeight;
                    l.inlandTab($(this))
                }
                $(q).scroll()
            }
            );
            $(".resource_content").delegate(".areaChoice", "click", function(s) {
                var r = 0;
                var t = $(this).attr("data-resourceNum");
                $(this).parent().find("li").each(function() {
                    if ($(this).attr("data-area") == $(".select_box select").val()) {
                        r++;
                        if ($(this).attr("data-resourceNum") == t) {
                            l.setEvent("d12_1st_" + $(this).parent().attr("data-click") + "_" + r + "_" + $(".select_box div").attr("data-click"))
                        }
                    }
                }
                );
                if (s.target.classList[0] == "resources_img" || s.target.className == "order") {
                    if (g.isTc) {
                        url = l.resetUrl($(this).attr("data-url"));
                        location.href = url
                    } else {
                        url = $(this).attr("data-url2");
                        l.setPos();
                        location.href = url
                    }
                }
            }
            );
            $(".otherContent li").on("click", function() {
                var e = $(this).attr("data-index") - 1;
                l.setEvent("d12_1st_" + $(this).attr("data-click") + "_" + $(".select_box div").attr("data-click"));
                if (g.isTc) {
                    location.href = k[e].inside
                } else {
                    location.href = k[e].out
                }
            }
            );
            $(".broadcast a").on("click", function() {
                l.setEvent("d12_1st_wzlz_" + $(".select_box div").attr("data-click"))
            }
            );
            $(".btn_closed").on("click", function() {
                $(".layer_phone").hide()
            }
            );
            $(".redList").on("click", function() {
                var u = $(this);
                var e = $(this).attr("data-index");
                var r = $(this).attr("data-projectid");
                var t = $(this).find("span").text();
                var s = $(this).find("em").text();
                if ($(this).find("button").hasClass("hasRed")) {} else {
                    if (g.isTc) {
                        if (g.memberId != undefined) {
                            l.getEvelope(r, t, s, u)
                        } else {
                            location.href = "http://shouji.17u.cn/internal/login/"
                        }
                    } else {
                        $(".layer_phone").show();
                        $(".layer_phone button").off("click");
                        $(".layer_phone button").on("click", function() {
                            l.validatePhone(r, t, s, u)
                        }
                        )
                    }
                }
            }
            )
        },
        getNowFormatDate: function() {
            var r = "-";
            var s = ":";
            var e = i.getMonth() + 1;
            var t = i.getDate();
            if (e >= 1 && e <= 9) {
                e = "0" + e
            }
            if (t >= 0 && t <= 9) {
                t = "0" + t
            }
            i = i.getFullYear() + r + e + r + t + " 08:55:00"
        },
        everyDayTab: function(e) {
            $(".everyDayRob_tab li").removeClass("everyDayRob_tab_select");
            $(".roundDot").hide();
            e.addClass("everyDayRob_tab_select").find("span").show();
            $(".everyDayRob_resource").hide();
            $("#tabPage_" + e.attr("data-index")).show();
            l.tabType[0] = e.attr("data-index")
        },
        outBoundTab: function(e) {
            e.parent().find("li").removeClass("scrollSelect_1");
            e.addClass("scrollSelect_1");
            $(".outBoundResource").hide();
            $("#tabPage_" + e.attr("data-index")).show();
            $(".outBoundDouble p").text(e.text() + "篇");
            l.tabType[1] = e.attr("data-index")
        },
        inlandTab: function(e) {
            e.parent().find("li").removeClass("scrollSelect_2");
            e.addClass("scrollSelect_2");
            $(".inlandResource").hide();
            $("#tabPage_" + e.attr("data-index")).show();
            $(".inlandDouble p").text(e.text() + "篇");
            l.tabType[2] = e.attr("data-index")
        },
        setEvent: function(t) {
            var s = {
                param: {
                    eventId: "a_1604",
                    type: t,
                    tagname: ""
                },
                CBPluginName: "",
                CBTagName: ""
            };
            try {
                q._tc_bridge_util.set_event(s)
            } catch (r) {
                console.log("bridge is error")
            }
        },
        scroll: function() {
            $(q).scroll(function() {
                if ($("body")[0].scrollTop >= parseInt($(".outBoundDouble").offset().top) && $("body")[0].scrollTop < parseInt($("#nav_3").offset().top)) {
                    $(".scrollSelectBox").removeClass("tabFix");
                    $("#scrollTab_1").addClass("tabFix")
                } else {
                    if ($("body")[0].scrollTop >= parseInt($(".inlandDouble").offset().top) && $("body")[0].scrollTop < parseInt($("#nav_4").offset().top)) {
                        $(".scrollSelectBox").removeClass("tabFix");
                        $("#scrollTab_2").addClass("tabFix")
                    } else {
                        $(".scrollSelectBox").removeClass("tabFix")
                    }
                }
            }
            )
        },
        validatePhone: function(e, s, r, t) {
            var u = $(".phone").val().trim();
            if (!u) {
                hintMsg.show("请输入手机号码");
                return
            }
            if (!/^1\d{10}$/.test(u)) {
                hintMsg.show("请输入正确的手机号码");
                return
            }
            l.getEvelope(e, s, r, t, u)
        },
        setInput: function() {
            $(".phone").on("input", function() {
                $(this)[0].value = $(this)[0].value.replace(/[^\d]/g, "").slice(0, 11);
                if ($(this)[0].value.length == 11) {
                    $(this)[0].blur()
                }
            }
            )
        },
        resetUrl: function(e) {
            return e.indexOf("shouji") != -1 ? e : e.indexOf("?") != -1 ? e + "&tcwvcnew" : e + "?tcwvcnew"
        },
        todaySetResource: function(t, s, e) {
            var r = ((s.PreferentialPrice / s.OriginalPrice) * 10).toFixed(1);
            n[t - 1] += '<li data-resourceNum="' + o + '" class="everyDayRob_resource_li areaChoice" data-area="' + e + '" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '">';
            n[t - 1] += '    <figure class="everyDayRob_figure">';
            n[t - 1] += '         <img data-jump="jumpToDetail" class="resources_img lazyimg" src="http://img1.40017.cn/touch/app/pub/LovePromise/lazyload.png" data-original="' + s.ImageUrl + '" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '" />';
            n[t - 1] += "        <figcaption>";
            n[t - 1] += "             <p>" + s.Title + "</p>";
            n[t - 1] += "             <ul>";
            n[t - 1] += "                 <li>" + s.Subtitle + "</li>";
            n[t - 1] += "                 <li>" + s.GroupStage + "</li>";
            n[t - 1] += "             </ul>";
            n[t - 1] += "         </figcaption>";
            n[t - 1] += "         <div>" + s.Details + "</div>";
            n[t - 1] += "     </figure>";
            n[t - 1] += '    <div class="everyDayRob_price">';
            n[t - 1] += "         <p>￥<span>" + s.PreferentialPrice + "</span>起</p>";
            n[t - 1] += '         <div class="everyDayRob_discount">';
            n[t - 1] += "             <div>" + r + "折</div>";
            n[t - 1] += "             <del>&yen;" + s.OriginalPrice + "</del>";
            n[t - 1] += "         </div>";
            if (t == 1) {
                n[t - 1] += '         <button data-jump="jumpToDetail" class="order" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '">立即预订</button>'
            } else {
                n[t - 1] += '         <button class="remind green" data-index="' + s.PCImageUrl + '">设置提醒</button>'
            }
            n[t - 1] += "    </div>";
            n[t - 1] += "</li>"
        },
        outBandSetResource: function(t, s, e) {
            var r = s.OriginalPrice - s.PreferentialPrice;
            n[t - 1] += '<li data-resourceNum="' + o + '" class="areaChoice" data-area="' + e + '" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '">';
            n[t - 1] += '    <figure class="outBoundFigure">';
            n[t - 1] += '        <img data-jump="jumpToDetail" class="resources_img lazyimg" src="http://img1.40017.cn/touch/app/pub/LovePromise/lazyload.png" data-original="' + s.ImageUrl + '" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '" />';
            n[t - 1] += "        <figcaption>";
            n[t - 1] += "             <p>" + s.Title + "</p>";
            n[t - 1] += "             <span>" + s.Departure + " | " + s.GroupStage + "</span>";
            n[t - 1] += "         </figcaption>";
            n[t - 1] += "         <div>" + s.Remark + "</div>";
            n[t - 1] += "    </figure>";
            n[t - 1] += '    <div class="outBoundPrice">';
            n[t - 1] += '         <div class="outBoundTitle">☆' + s.Subtitle + "</div>";
            n[t - 1] += "         <p><span>￥</span>" + s.PreferentialPrice + "</p>";
            n[t - 1] += '         <div class="outBoundDiscount">';
            n[t - 1] += "             <div>降" + r + "元</div>";
            n[t - 1] += "             <del>&yen;" + s.OriginalPrice + "</del>";
            n[t - 1] += "         </div>";
            n[t - 1] += '         <button data-jump="jumpToDetail" class="order" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '">立即预订</button>';
            n[t - 1] += "    </div>";
            n[t - 1] += "</li>"
        },
        insideSetResource: function(t, s, e) {
            var r = s.OriginalPrice - s.PreferentialPrice;
            n[t - 1] += '<li data-resourceNum="' + o + '" class="areaChoice" data-area="' + e + '" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '">';
            n[t - 1] += '     <figure class="inlandFigure">';
            n[t - 1] += '         <img data-jump="jumpToDetail" class="resources_img lazyimg" src="http://img1.40017.cn/touch/app/pub/LovePromise/lazyload.png" data-original="' + s.ImageUrl + '" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '" />';
            n[t - 1] += "         <figcaption>" + s.GroupStage + " | " + s.Departure;
            n[t - 1] += "         </figcaption>";
            n[t - 1] += "     </figure>";
            n[t - 1] += '     <div class="inlandPrice">';
            n[t - 1] += '         <div class="inlandTitle">' + s.Title + "</div>";
            n[t - 1] += "         <p><span>￥</span>" + s.PreferentialPrice + "</p>";
            n[t - 1] += '         <div class="inlandDiscount">';
            n[t - 1] += "             <div>降" + r + "元</div>";
            n[t - 1] += "             <del>&yen;" + s.OriginalPrice + "</del>";
            n[t - 1] += "         </div>";
            n[t - 1] += '         <button data-jump="jumpToDetail" class="order" data-url="' + s.DirectUrl + '" data-url2="' + s.PCDirectUrl + '">立即抢购</button>';
            n[t - 1] += "    </div>";
            n[t - 1] += " </li>"
        },
        getProduct: function() {
            $.ajax({
                url: "/pub/Resource/GetResourcesByPrice?activityId=313",
                data: "",
                dataType: "jsonp",
                cache: false,
                success: function(e) {
                    if (e && e.State == 200 && e.ResourceList.length > 0) {
                        l.callback(e)
                    } else {
                        hintMsg.show("抱歉,资源加载失败,请稍后再试!!!");
                        return
                    }
                },
                error: function() {
                    hintMsg.show("抱歉,系统繁忙,请稍后再试!!!");
                    return
                }
            })
        },
        callback: function(e) {
            e.ResourceList.forEach(function(w) {
                o++;
                var x = w.Introduction;
                var v = "";
                if (w.SaleCitys == "华东") {
                    v = "江浙沪地区"
                } else {
                    if (w.SaleCitys == "华南") {
                        v = "珠三角地区"
                    } else {
                        if (w.SaleCitys == "华北") {
                            v = "京津冀地区"
                        } else {
                            v = "川渝地区/其它"
                        }
                    }
                }
                if (v && !a[v]) {
                    a[v] = v
                }
                if (x == 1 || x == 2) {
                    l.todaySetResource(x, w, v)
                } else {
                    if (x >= 3 && x <= 10) {
                        l.outBandSetResource(x, w, v)
                    } else {
                        l.insideSetResource(x, w, v)
                    }
                }
            }
            );
            for (var r = 0; r < 18; r++) {
                $("#tabPage_" + (r + 1)).html(n[r])
            }
            $(".resources_img").lazyload();
            l.setRemind();
            for (var r in a) {
                p.append("<option data-index=" + r + ' value="' + r + '" >' + r + "</option>")
            }
            var t = $(".areaChoice");
            var u;
            var s = 0;
            p.on("change", function() {
                $(this).prev().text(u = $(this).val());
                if ($(this).val() == "江浙沪地区") {
                    $(".select_box div").attr("data-click", "hd")
                } else {
                    if ($(this).val() == "珠三角地区") {
                        $(this).prev().attr("data-click", "hn")
                    } else {
                        if ($(this).val() == "京津冀地区") {
                            $(this).prev().attr("data-click", "hb")
                        } else {
                            $(this).prev().attr("data-click", "qt")
                        }
                    }
                }
                if (u) {
                    t.forEach(function(v) {
                        ($(v).attr("data-area") == u) ? $(v).show() : $(v).hide()
                    }
                    );
                    l.areaType = $(this).val();
                    $(q).scroll()
                }
            }
            );
            p.val({
                hd: "江浙沪地区",
                hx: "川渝地区/其它",
                hb: "京津冀地区",
                hn: "珠三角地区",
                hz: "川渝地区/其它"
            }[$("#areaId").val()]);
            p.trigger("change");
            if (sessionStorage.getItem("back") == 1 && !g.isTc) {
                l.getPos()
            }
        },
        getPos: function() {
            var e = sessionStorage.getItem("areaSet");
            var r = JSON.parse(sessionStorage.getItem("tabSet"));
            p.val(e);
            p.trigger("change");
            l.everyDayTab($("#tabLi_" + r[0]));
            l.outBoundTab($("#tabLi_" + r[1]));
            l.inlandTab($("#tabLi_" + r[2]));
            q.scrollTo(0, sessionStorage.getItem("pos"));
            sessionStorage.setItem("back", 0)
        },
        setPos: function() {
            sessionStorage.setItem("back", 1);
            sessionStorage.setItem("pos", q.scrollY);
            sessionStorage.setItem("areaSet", l.areaType);
            sessionStorage.setItem("tabSet", JSON.stringify(l.tabType))
        },
        hasOver: function(s, r) {
            var e = {
                title: "您已领取过",
                conTxt: '<span class="bold">' + s + "" + r + "</span><br/>满减红包",
                confirm: "返回主会场",
                doubleBtn: false,
            };
            msg(e)
        },
        hasSuccess: function(s, r) {
            var e = {
                title: "恭喜您成功领取",
                conTxt: '<span class="bold">' + s + "" + r + "</span><br/>满减红包",
                confirm: "返回主会场",
                doubleBtn: false,
            };
            msg(e)
        },
        getEvelope: function(r, t, s, u, e) {
            e = e == undefined ? "" : e;
            $.ajax({
                url: "/client/RedActivity/Receive",
                dataType: "json",
                type: "get",
                data: {
                    ActivityId: "1042",
                    ProjectId: r,
                    Mobile: e
                },
                beforeSend: function() {
                    $(".loading").show()
                },
                success: function(v) {
                    if (v.State == 100) {
                        $(".layer_phone").hide();
                        l.hasSuccess(t, s);
                        u.find("button").addClass("hasRed").html("已<br/>领取")
                    } else {
                        if (v.State == 300 || v.State == 301) {
                            $(".layer_phone").hide();
                            l.hasOver(t, s);
                            u.find("button").addClass("hasRed").html("已<br/>领取")
                        } else {
                            hintMsg.show(v.Msg)
                        }
                    }
                },
                error: function() {},
                complete: function() {
                    $(".loading").hide()
                }
            })
        },
        setRemind: function() {
            if (g.isTc) {
                $(".remind").each(function() {
                    var s = $(this);
                    e("http://app.ly.com/pub/DoubleTwelve/main/index?wvc1=1&wvc2=1&cityId=tcwvcid&citysId=tcwvscid&tcwvcwl=1&set=" + s.attr("data-index"), function(u, t) {
                        if (u) {
                            hintMsg.show("获取提醒失败,请退出重试")
                        } else {
                            t = JSON.parse(t.CBData);
                            if (t.status == 0) {
                                s.html("已设置");
                                s.addClass("reminded")
                            }
                        }
                    }
                    )
                }
                )
            }
            $(".remind").on("click", function() {
                var s = $(this);
                if (s.hasClass("reminded")) {
                    return
                }
                if (!g.isTc) {
                    dialog.alert("", "本活动由同程旅游客户端专享<br/>请下载客户端", "下载客户端", function() {
                        location.href = "http://m.17u.cn/client/qr/78163843/" + encodeURIComponent("app.ly.com|pub|DoubleTwelve|main|index?wvc1=1&wvc2=1&cityId=tcwvcid&citysId=tcwvscid")
                    }
                    );
                    return
                }
                r("http://app.ly.com/pub/DoubleTwelve/main/index?wvc1=1&wvc2=1&cityId=tcwvcid&citysId=tcwvscid&tcwvcwl=1&set=" + s.attr("data-index"), function(u, t) {
                    if (u) {
                        hintMsg.show("设置提醒失败,请退出重试")
                    } else {
                        t = JSON.parse(t.CBData);
                        if (t.status == 0) {
                            hintMsg.show("设置提醒成功<br/>系统将在开售时提醒您");
                            s.addClass("reminded");
                            s.html("已设置")
                        } else {
                            hintMsg.show("设置提醒失败,请稍后重试")
                        }
                    }
                }
                )
            }
            );
            function r(v, s) {
                var u = {
                    param: {
                        tagname: "alarm_status",
                        alarmInfo: {
                            alarmTitle: "同程12.12抢购即将开始",
                            alarmContent: "您预约的抢购即将开始，请提前摆好姿势！" + v,
                            alarmStartTime: i,
                            alarmUrl: v
                        }
                    },
                    CBPluginName: "_tc_web_util",
                    CBTagName: "set_alarm_info"
                };
                q._tc_web_util.set_alarm_info = function(w) {
                    s(null , w)
                }
                ;
                try {
                    q._tc_bridge_util.set_alarm_info(u)
                } catch (t) {
                    s(t)
                }
            }
            function e(v, s) {
                var u = {
                    param: {
                        tagname: "alarm_status",
                        alarmInfo: {
                            alarmUrl: v
                        }
                    },
                    CBPluginName: "_tc_web_util",
                    CBTagName: "get_alarm_info"
                };
                q._tc_web_util.get_alarm_info = function(w) {
                    s(null , w)
                }
                ;
                try {
                    q._tc_bridge_util.get_alarm_info(u)
                } catch (t) {
                    s(t)
                }
            }
        },
        autoLogin: function() {
            if (g.isTc && g.memberId) {
                $.ajax({
                    type: "post",
                    url: "/pub/autologin.html",
                    data: {
                        memberId: g.memberId
                    },
                    cache: false,
                    async: false,
                    dataType: "json",
                    success: function(e) {
                        if (e.State == "100") {} else {
                            dialog.alert("", "抱歉,用户登录失败,请重新进入!", "重新进入", function() {
                                location.reload()
                            }
                            )
                        }
                    },
                    error: function(r, e) {}
                })
            }
        },
    };
    try {
        var m = {
            param: {
                right: [{
                    tagname: "tag_click_share",
                    value: "同程12.12压轴大促，先领券，再消费。主打性价比！12元门票随意购！",
                    icon: "i_share"
                }]
            },
            CBPluginName: "_tc_bridge_bar",
            CBTagName: "_tc_bridge_custom_share"
        };
        q._tc_bridge_bar.set_navbar(m);
        q._tc_bridge_bar._tc_bridge_custom_share = function(e) {
            l.setEvent("d12_1st_fxtb_" + $(".select_box div").attr("data-click"));
            location.href = "http://shouji.17u.cn/internal/share/all"
        }
    } catch (f) {}
    function c(e) {
        this.container = e.container;
        this.eTime = e.eTime || 200;
        this.delay = e.delay || 2000;
        this.cBox = $(this.container).find("ul");
        this.total = this.cBox.find("li").length;
        this.index = 0;
        this.cHeight = 2.2
    }
    c.prototype.init = function() {
        this.cBox.append(this.cBox.find("li:first-child").clone());
        var e = this;
        setTimeout(function() {
            e.next()
        }
        , this.eTime + this.delay);
        return this
    }
    ;
    c.prototype.next = function() {
        this.index++;
        this.cBox.css({
            "-webkit-transition": "-webkit-transform " + this.eTime + "ms linear",
            transition: "transform " + this.eTime + "ms linear",
            "-webkit-transform": "translate3d(0," + (-this.index * this.cHeight) + "rem,0)",
            transform: "translate3d(0," + (-this.index * this.cHeight) + "rem,0)",
        });
        var e = this;
        if (this.index == this.total) {
            this.index = 0;
            this.cBox.css("transform");
            setTimeout(function() {
                e.cBox.css({
                    "-webkit-transition": "initial",
                    transition: "initial",
                    "-webkit-transform": "translate3d(0,0,0)",
                    transform: "translate3d(0,0,0)",
                })
            }
            , this.eTime)
        }
        setTimeout(function() {
            e.next()
        }
        , this.eTime + this.delay);
        return this
    }
    ;
    var g = {};
    TongChengInfo(function(e) {
        g = e;
        l.init()
    }
    )
}
)(window, document);
var hintMsg = function() {
    var b, a, c, d;
    return {
        show: function(f, e) {
            if (b) {
                return
            }
            b = document.createElement("div");
            a = "position: fixed; top: 50%; left: 50%; z-index: 200; ";
            a += "width: 200px;line-height: 18px; text-align: center; padding:20px 10px; margin-top: 20px; word-break: break-all;";
            a += "font-size: 14px; color: rgba(255, 255, 255, 1); background-color: rgba(0, 0, 0, 0.6); border-radius: 6px; opacity: 1;";
            a += "-webkit-transform: translate3d(-50%,-50%,0); transform: translate3d(-50%,-50%,0);";
            a += "-webkit-transition: opacity 300ms linear, margin-top 200ms linear; transition: opacity 300ms linear, margin-top 200ms linear;";
            b.style.cssText = a;
            b.innerHTML = f;
            document.body.appendChild(b);
            if (e == undefined) {
                e = 2500
            }
            b.offsetHeight = b.offsetHeight;
            b.style.marginTop = "0";
            c = window.setTimeout(function() {
                b.style.opacity = 0
            }
            , e);
            d = window.setTimeout(function() {
                document.body.removeChild(b);
                b = null
            }
            , e + 300)
        },
        hide: function() {
            if (!b) {
                return
            }
            window.clearTimeout(c);
            window.clearTimeout(d);
            document.body.removeChild(b);
            b = null
        }
    }
}
();
