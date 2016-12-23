
setTimeout(function () {
    var tcvst = document.createElement('script');
    tcvst.type = 'text/javascript';
    tcvst.src = '//ditu.google.cn/maps/api/js?key=AIzaSyB05KSOzubEfYJWO4uscBh3mS2GSo8ZhE0&sensor=false';

    tcvst.onreadystatechange = function () {
        var r = tcvst.readyState;
        if (r === 'loaded' || r === 'complete') {
            tcvst.onload = null;
            tcvst.onreadystatechange = null;
            MyMapLoad();
        }
    };
    tcvst.onload = function () {
        tcvst.onreadystatechange = null;
        MyMapLoad();
    }
    var tcsc = document.getElementsByTagName('script')[0]; tcsc.parentNode.insertBefore(tcvst, tcsc);
}, 300);

function MyMapLoad() {

    function InfoBox(opt_opts) {

        opt_opts = opt_opts || {};

        google.maps.OverlayView.apply(this, arguments);
        this.content_ = opt_opts.content || "";
        this.disableAutoPan_ = opt_opts.disableAutoPan || false;
        this.maxWidth_ = opt_opts.maxWidth || 0;
        this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
        this.markerWidthHeight_ = opt_opts.markerWidthHeight || new google.maps.Size(0, 0);

        this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
        this.zIndex_ = opt_opts.zIndex || null;

        this.boxStyle_ = opt_opts.boxStyle || {};
        this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
        this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
        if (opt_opts.closeBoxURL === "") {
            this.closeBoxURL_ = "";
        }
        this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);
        this.isHidden_ = opt_opts.isHidden || false;
        this.pane_ = opt_opts.pane || "floatPane";

        this.div_ = null;
        this.closeListener_ = null;
        this.fixedWidthSet_ = null;
    }


    InfoBox.prototype = new google.maps.OverlayView();


    InfoBox.prototype.createInfoBoxDiv_ = function () {

        var bw;

        if (!this.div_) {

            this.div_ = document.createElement("div");

            this.setBoxStyle_();

            // Apply required styles:
            //
            this.div_.style.position = "absolute";
            this.div_.style.visibility = 'hidden';
            if (this.zIndex_ !== null) {

                this.div_.style.zIndex = this.zIndex_;
            }

            this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;

            // Add the InfoBox DIV to the DOM
            this.getPanes()[this.pane_].appendChild(this.div_);

            this.addClickHandler_();

            if (this.div_.style.width) {

                this.fixedWidthSet_ = true;

            } else {

                if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

                    this.div_.style.width = this.maxWidth_;
                    this.div_.style.overflow = "auto";
                    this.fixedWidthSet_ = true;

                } else { // The following code is needed to overcome problems with MSIE

                    bw = this.getBoxWidths_();

                    this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
                    this.fixedWidthSet_ = false;
                }
            }

            this.panBox_(this.disableAutoPan_);
            google.maps.event.trigger(this, "domready");
        }
    };

    /**
     * Returns the HTML <IMG> tag for the close box.
            */
    InfoBox.prototype.getCloseBoxImg_ = function () {

        var img = "";

        if (this.closeBoxURL_ !== "") {

            img = "<img";
            img += " src='" + this.closeBoxURL_ + "'";
            img += " align=right"; // Do this because Opera chokes on style='float: right;'
            img += " style='";
            img += " position: relative;"; // Required by MSIE
            img += " cursor: pointer;";
            img += " margin: " + this.closeBoxMargin_ + ";";
            img += "'>";
        }

        return img;
    };

    /**
    */
    InfoBox.prototype.addClickHandler_ = function () {

        var closeBox;

        if (this.closeBoxURL_ !== "") {

            closeBox = this.div_.firstChild;
            this.closeListener_ = google.maps.event.addDomListener(closeBox, 'click', this.getCloseClickHandler_());

        } else {

            this.closeListener_ = null;
        }
    };


    InfoBox.prototype.getCloseClickHandler_ = function () {

        var me = this;

        return function () {
            me.close();
            google.maps.event.trigger(me, "closeclick");
        };
    };

    /**
     * Pans the map so that the InfoBox appears entirely within the map's visible area.
            */
    InfoBox.prototype.panBox_ = function (disablePan) {

        if (!disablePan) {

            var map = this.getMap();
            var bounds = map.getBounds();

            // The degrees per pixel
            var mapDiv = map.getDiv();
            var mapWidth = mapDiv.offsetWidth;
            var mapHeight = mapDiv.offsetHeight;
            var boundsSpan = bounds.toSpan();
            var longSpan = boundsSpan.lng();
            var latSpan = boundsSpan.lat();
            var degPixelX = longSpan / mapWidth;
            var degPixelY = latSpan / mapHeight;

            // The bounds of the map
            var mapWestLng = bounds.getSouthWest().lng();
            var mapEastLng = bounds.getNorthEast().lng();
            var mapNorthLat = bounds.getNorthEast().lat();
            var mapSouthLat = bounds.getSouthWest().lat();

            // The bounds of the box
            var position = this.position_;
            var iwOffsetX = this.pixelOffset_.width;
            var iwOffsetY = this.pixelOffset_.height;
            var padX = this.infoBoxClearance_.width;
            var padY = this.infoBoxClearance_.height;
            var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
            var iwEastLng = position.lng() + (iwOffsetX + this.div_.offsetWidth + padX) * degPixelX;
            var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
            var iwSouthLat = position.lat() - (iwOffsetY + this.div_.offsetHeight + padY) * degPixelY;

            // Calculate center shift
            var shiftLng =
              (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
              (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
            var shiftLat =
              (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
              (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);

            if (!(shiftLat === 0 && shiftLng === 0)) {

                // Move the map to the new shifted center.
                //
                var c = map.getCenter();
                map.setCenter(new google.maps.LatLng(c.lat() - shiftLat, c.lng() - shiftLng));
            }
        }
    };

    /**
     * Sets the style of the InfoBox.
    */
    InfoBox.prototype.setBoxStyle_ = function () {

        var i;

        var boxStyle = this.boxStyle_;

        for (i in boxStyle) {

            if (boxStyle.hasOwnProperty(i)) {

                this.div_.style[i] = boxStyle[i];
            }
        }

        // Fix up opacity style for benefit of MSIE:
        //
        if (typeof this.div_.style.opacity !== "undefined") {

            this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
        }
    };

    /**
     * Get the widths of the borders of the InfoBox.
    */
    InfoBox.prototype.getBoxWidths_ = function () {

        var computedStyle;
        var bw = { top: 0, bottom: 0, left: 0, right: 0 };
        var box = this.div_;

        if (document.defaultView && document.defaultView.getComputedStyle) {

            computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

            if (computedStyle) {

                // The computed styles are always in pixel units (good!)
                bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
                bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
                bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
                bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
            }

        } else if (document.documentElement.currentStyle) { // MSIE

            if (box.currentStyle) {

                // The current styles may not be in pixel units, but assume they are (bad!)
                bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
                bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
                bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
                bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
            }
        }

        return bw;
    };

    /**
     * Invoked when <tt>close</tt> is called. Do not call it directly.
     调用当<tt>close</tt>被调用。不要直接调用它。
     */
    InfoBox.prototype.onRemove = function () {

        if (this.div_) {

            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        }
    };

    /**
     * 得出的信息基于当前地图投影和缩放级别。
     */
    InfoBox.prototype.draw = function () {

        this.createInfoBoxDiv_();

        var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

        this.div_.style.left = (pixPosition.x + this.pixelOffset_.width - $(this.div_).width() / 2) + "px";

        this.div_.style.top = (pixPosition.y + this.pixelOffset_.height - this.markerWidthHeight_.height - $(this.div_).height()) + "px";

        if (this.isHidden_) {

            this.div_.style.visibility = 'hidden';

        } else {

            this.div_.style.visibility = "visible";
        }
    };

    /**
     * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
     *  <tt>closeBoxMargin</tt>, and <tt>closeBoxURL</tt> properties have no affect

     设置信息的选项。注意<tt>maxWidth</tt>, <tt>closeBoxMargin</tt>, and <tt>closeBoxURL</tt>属性没有影响
    */
    InfoBox.prototype.setOptions = function (opt_opts) {

        if (typeof opt_opts.boxStyle !== "undefined") { // Must be first

            this.boxStyle_ = opt_opts.boxStyle;
            this.setBoxStyle_();
        }
        if (typeof opt_opts.content !== "undefined") {

            this.setContent(opt_opts.content);
        }
        if (typeof opt_opts.disableAutoPan !== "undefined") {

            this.disableAutoPan_ = opt_opts.disableAutoPan;
        }
        if (typeof opt_opts.maxWidth !== "undefined") {

            this.maxWidth_ = opt_opts.maxWidth;
        }
        if (typeof opt_opts.pixelOffset !== "undefined") {

            this.pixelOffset_ = opt_opts.pixelOffset;
        }
        if (typeof opt_opts.position !== "undefined") {

            this.setPosition(opt_opts.position);
        }
        if (typeof opt_opts.zIndex !== "undefined") {

            this.setZIndex(opt_opts.zIndex);
        }
        if (typeof opt_opts.closeBoxMargin !== "undefined") {

            this.closeBoxMargin_ = opt_opts.closeBoxMargin;
        }
        if (typeof opt_opts.closeBoxURL !== "undefined") {

            this.closeBoxURL_ = opt_opts.closeBoxURL;
        }
        if (typeof opt_opts.infoBoxClearance !== "undefined") {

            this.infoBoxClearance_ = opt_opts.infoBoxClearance;
        }
        if (typeof opt_opts.isHidden !== "undefined") {

            this.isHidden_ = opt_opts.isHidden;
        }

        if (this.div_) {

            this.draw();
        }
    };

    /**
     * Sets the content of the InfoBox.
     设置信息框的内容
     *  The content can be plain text or HTML.
     内容可以是text或者html
    */
    InfoBox.prototype.setContent = function (content) {

        this.content_ = content;

        if (this.div_) {

            if (this.closeListener_) {

                google.maps.event.removeListener(this.closeListener_);
                this.closeListener_ = null;
            }

            // Odd code required to make things work with MSIE.

            //这些奇怪的代码需要做的事情因为IE。
            if (!this.fixedWidthSet_) {

                this.div_.style.width = "";
            }

            this.div_.innerHTML = this.getCloseBoxImg_() + content;

            // Perverse code required to make things work with MSIE.
            // (Ensures the close box does, in fact, float to the right.)
            //
            if (!this.fixedWidthSet_) {

                this.div_.style.width = this.div_.offsetWidth + "px";
                this.div_.innerHTML = this.getCloseBoxImg_() + content;
            }

            this.addClickHandler_();
        }

        /**
         * This event is fired when the content of the InfoBox changes.
         当信息内容变化时这一事件被触发。
    */
        google.maps.event.trigger(this, "content_changed");
    };

    /**
     */
    InfoBox.prototype.setPosition = function (latlng) {

        this.position_ = latlng;

        if (this.div_) {

            this.draw();
        }

        /**
         * This event is fired when the position of the InfoBox changes.
    */
        google.maps.event.trigger(this, "position_changed");
    };

    /**
     * Sets the zIndex style for the InfoBox.
     */
    InfoBox.prototype.setZIndex = function (index) {

        this.zIndex_ = index;

        if (this.div_) {

            this.div_.style.zIndex = index;
        }

        /**
         * This event is fired when the zIndex of the InfoBox changes.
    */
        google.maps.event.trigger(this, "zindex_changed");
    };

    /**
     * Returns the content of the InfoBox.
            */
    InfoBox.prototype.getContent = function () {

        return this.content_;
    };

    /**
     * Returns the geographic location of the InfoBox.
    */
    InfoBox.prototype.getPosition = function () {

        return this.position_;
    };

    /**
     * Returns the zIndex for the InfoBox.
    */
    InfoBox.prototype.getZIndex = function () {

        return this.zIndex_;
    };

    /**
     * Shows the InfoBox.
     */
    InfoBox.prototype.show = function () {

        this.isHidden_ = false;
        this.div_.style.visibility = "visible";
    };

    /**
     * Hides the InfoBox.
     */
    InfoBox.prototype.hide = function () {

        this.isHidden_ = true;
        this.div_.style.visibility = "hidden";
    };

    /**
     * Adds the InfoBox to the specified map. If <tt>anchor</tt>
     *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
     *  of the InfoBox is set to the position of the <tt>anchor</tt>.
    */
    InfoBox.prototype.open = function (map, anchor) {

        if (anchor) {

            this.position_ = anchor.getPosition();
        }

        this.setMap(map);

        if (this.div_) {

            this.panBox_();
        }
    };

    /**
     * Removes the InfoBox from the map.
     */
    InfoBox.prototype.close = function () {

        if (this.closeListener_) {

            google.maps.event.removeListener(this.closeListener_);
            this.closeListener_ = null;
        }

        this.setMap(null);
    };

    /***************自定义叠加层，可作为站点显示在地图上******************/
    function MyMarker(options) {

        // Now initialize all properties.
        this.latlng = options.latlng; //设置图标的位置
        this.index = options.index || 0;
        this.image_ = options.image;  //设置图标的图片
        this.labelText = options.labelText || '标记';
        this.labelClass = options.labelClass || 'shadow';//设置文字的样式
        this.clickFun = options.clickFun || function () { };
        this.mouseoverFun = options.mouseoverFun || function () { };
        this.mouseoutFun = options.mouseoutFun || function () { };
        this.div = null;
        this.isShow = options.isShow;
        this.map = options.map,
        this.setMap(this.map);
    }
    MyMarker.prototype = new google.maps.OverlayView();
    //初始化图标
    MyMarker.prototype.onAdd = function () {
        // Note: an overlay's receipt of onAdd() indicates that
        // the map's panes are now available for attaching
        // the overlay to the map via the DOM.
        // Create the DIV and set some basic attributes.

        var mapDiv = document.createElement('DIV'); //创建存放图片和文字的div

        mapDiv.style.position = "absolute";
        mapDiv.style.cursor = "pointer";
        mapDiv.innerHTML = this.labelText;



        //var panes = this.getPanes();
        //panes.overlayLayer.appendChild(div);

        this.getPanes().overlayImage.appendChild(mapDiv);
        this.div = mapDiv;

        var e = this;
        $(this.div).bind("click", function () { e.clickFun(e.index, e); });
        $(this.div).bind("mouseover", function () { e.mouseoverFun(e.index, e); });
        $(this.div).bind("mouseout", function () { e.mouseoutFun(e.index, e); });
    }
    //绘制图标，主要用于控制图标的位置
    MyMarker.prototype.draw = function () {
        var overlayProjection = this.getProjection();
        var position = overlayProjection.fromLatLngToDivPixel(this.latlng);

        this.div.style.left = position.x - 12 + "px";
        this.div.style.bottom = -position.y + "px";
        if (this.isShow) {
            this.div.style.display = "block";
        }
        else {
            this.div.style.display = "none";
        }

    }
    MyMarker.prototype.onRemove = function () {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }







    //{ lng: 100.62304, lat: 13.8134, name: "暹罗社会酒店", isShow: true }

    MyHotelListMap = new HotelListMap(MyMarker, InfoBox);



    //window.onscroll();

}




function HotelListMap(MyMarker, InfoBox) {

    var mapProp = {
        center: { lat: GhotelLat, lng: GhotelLon },
        zoom: 12,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("MyMap"), mapProp);

    var MarkLists = [];
    var NowCenter = undefined;

    //地图矩形类
    function Rectangle(_minx, _miny, _maxx, _maxy) {
        this.minx = _minx;
        this.miny = _miny;
        this.maxx = _maxx;
        this.maxy = _maxy;
    }

    //获取最大最小范围
    function getRectMinMax(pointArray) {

        if (pointArray.length < 3) {
            return undefined;
        }
        var rect = new Rectangle();
        rect.minx = pointArray[0].Longitude;
        rect.maxx = pointArray[0].Longitude;
        rect.miny = pointArray[0].Latitude;
        rect.maxy = pointArray[0].Latitude;
        for (var i = 0; i <= pointArray.length - 1; i++) {
            if (!pointArray[i].isShow) {
                continue;
            }
            if (pointArray[i].Longitude < rect.minx) {
                rect.minx = pointArray[i].Longitude;
            }
            if (pointArray[i].Longitude > rect.maxx) {
                rect.maxx = pointArray[i].Longitude;
            }
            if (pointArray[i].Latitude < rect.miny) {
                rect.miny = pointArray[i].Latitude;
            }
            if (pointArray[i].Latitude > rect.maxy) {
                rect.maxy = pointArray[i].Latitude;
            }
        }
        return rect;
    }

    var moveFlag = false;
    var obj = this;
    this.PointList = pointList;
    var tilesloaded = true;
    var nowMapTilesTimer = null;
    function MapTilesloaded(e) {
        if (!moveFlag) {
            //获取当前地图的可视范围
            var mapLatLngBounds = map.getBounds();
            if (mapLatLngBounds == undefined)
            {
                return;
            }
            //将地图的边界传递给后台
            var maxX = mapLatLngBounds.getNorthEast().lng();
            var maxY = mapLatLngBounds.getNorthEast().lat();
            var minX = mapLatLngBounds.getSouthWest().lng();
            var minY = mapLatLngBounds.getSouthWest().lat();
            var flag = false;
            for (var i = 0; i <= obj.PointList.length - 1; i++) {
                var item = obj.PointList[i];
                /*if (item.Latitude < minY || item.Latitude > maxY || item.Longitude < minX || item.Longitude > maxX) {
                    flag = true;
                }*/
                if (item.isShow) {
                    if (item.lat < minY || item.lat > maxY || item.lng < minX || item.lng > maxX) {
                        flag = true;
                    }
                }
            }
            var zoom = map.getZoom();
            if (flag) {
                tilesloaded = false;
                if (zoom != 1) {
                    map.setOptions({ position: NowCenter, zoom: zoom - 1 });
                }
            }
        }
    }
    google.maps.event.addListener(map, "tilesloaded", MapTilesloaded);
    google.maps.event.addListener(map, "dragstart", function (e) {
        moveFlag = true;
    });
    /*可以搜索地点*/
    var geocoder = new google.maps.Geocoder();
    document.onkeydown = function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        //当输入框有值
        if($("#address").val()){
            if(e && e.keyCode==27){ // 按 Esc
                //要做的事情
            }
            if(e && e.keyCode==113){ // 按 F2
                //要做的事情
            }
            if(e && e.keyCode==13){ // enter 键
                //要做的事情
                geocodeAddress(geocoder, map);
            }
        }else{
            return;
        }
    };
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });

    // google.maps.event.addListener(map, "zoom_changed", function (e) {
    google.maps.event.addListener(map, "mouseover", function (e) {
        moveFlag = true;
    });
    google.maps.event.addListener(map, "zoom_changed", function (e) {
        for (var i = 0; i <= obj.MarkLists.length - 1; i++) {
            if (obj.MarkLists[i].IsActive) {
                obj.mouseoverFun(i, obj.MarkLists[i]);
            }
        }
    });
    //鼠标移上去效果
    this.mouseoverFun = function (index, obj, isShowMyMapTip) {
        if (obj.isShow) {
            $(".HotelHead").eq(index).addClass("HotelHeadActive");
            $(".HotelItem").eq(index).addClass("HotelItemActive");
            obj.IsActive = true;
            $(".mapMarkerIcon").each(function () {
                $(this).parent().removeClass("mapMarkerActive");
            });
            $(obj.div).addClass("mapMarkerActive");
            var screenCoor = MapCoorToScreenCoor(obj, obj.latlng);
            if (screenCoor == undefined) {
                return;
            }
            var top = screenCoor.clientY - 34 / 2 - $("#myMapTip")[0].offsetHeight / 2;
            var left = screenCoor.clientX - 34 / 2 - $("#myMapTip")[0].offsetWidth + 2;
            if (screenCoor.clientY < 0 || screenCoor.clientX < 0 ||
                screenCoor.clientY > $("#MyMap").height() || screenCoor.clientX > $("#MyMap").width()) {
                obj.mouseoutFun(index, obj);
            }
            else {
                if (isShowMyMapTip != "noshowmyMapTip") {
                    var HotelStarHtml = "";
                    if (obj.hotelStar != undefined) {
                        for (var j = 0; j <= obj.hotelStar - 1; j++) {
                            HotelStarHtml += '<span class="ImageIcon icon_zuan"></span>';
                        }
                    }

                    var HotelScoreHtml = "";
                    if (obj.hotelScore != undefined && obj.hotelScore != "0" && obj.hotelScore != "0.0") {
                        HotelScoreHtml += '<span class="lMHIScore"><span>' + obj.hotelScore + '</span>分</span>';
                    }

                    var HotelAddressHtml = "";
                    if (obj.hotelAddress != undefined && obj.hotelAddress != "") {
                        HotelAddressHtml += '<p class="lMHIAddress">' + SubTitleByLen(obj.hotelAddress, 30) + '</p>';
                    }

                    var hotelImg = '';
                    if (obj.hotelPic != undefined && obj.hotelPic != "null") {
                        hotelImg = obj.hotelPic;
                    } else {
                        hotelImg = '//img1.40017.cn/cn/h/PCGhotel/images/default_165_120.jpg';
                    }

                    var lMHIhtml = '<div class="littleMapHotelInfo">\
                                    <div class="lMHILeft">\
                                        <img src="' + hotelImg + '">\
                                    </div>\
                                    <div class="lMHIRight">\
                                        <p class="lMHITitle">' + SubTitleByLen(obj.TitleText, 30) + '</p>\
                                        <div class="lMHIStarScore">' + HotelStarHtml + HotelScoreHtml + '\
                                            <div class="clear"></div>\
                                        </div>' + HotelAddressHtml + '\
                                    </div>\
                                    <div class="clear"></div>\
                                </div>';
                    $("#myMapTip").css('width','332px');
                    $("#myMapTip").html(lMHIhtml);
                } else {
                    $("#myMapTip").css('width', 'auto');
                    $("#myMapTip").html("");
                }

                $("#myMapTip").data("markerLng", obj.latlng);
                if ($("#myMapTip").width() >= 332) {
                    $("#myMapTip").css("width", "332px");
                }
                else {
                    $("#myMapTip").css("width", "auto");
                }
                $("#myMapTip").css({ visibility: "visible", top: top + "px", left: left + "px" });
            }
        }
        else {
            obj.mouseoutFun(index, obj);
        }
    }
    this.mouseoutFun = function (index, obj) {
        $(".HotelHead").eq(index).removeClass("HotelHeadActive");
        $(".HotelItem").eq(index).removeClass("HotelItemActive");
        obj.IsActive = false;
        $("#myMapTip").css({ visibility: "hidden", left: "-1000px", top: "-1000px" });
        $(obj.div).removeClass("mapMarkerActive");
    };
    this.MarkLists = MarkLists;
    this.InitMarkers = InitMarkers;
    InitMarkers(pointList);
    //初始化地图上的图标
    function InitMarkers(pointList) {
        var oldmoveFlag = moveFlag;
        moveFlag = false;
        $.each(MarkLists, function () {
            this.setMap(null);
        });
        MarkLists = [];
        this.PointList = pointList;
        NowCenter = undefined;
        if (pointList == undefined || pointList.length == 0) {
            return;
        }
        if (NowCenter == undefined) {
            NowCenter = new google.maps.LatLng(pointList[0].Latitude, pointList[0].Longitude);
        }
        var pointArray2 = [];
        for (var i = 0; i <= pointList.length - 1; i++) {
            if (pointList[i].isShow) {
                pointArray2.push(pointList[i]);
            }
        }
        var rect = getRectMinMax(pointArray2);
        if (rect == undefined) {
            if (pointArray2.length == 1) {
                NowCenter = new google.maps.LatLng(pointArray2[0].Latitude, pointArray2[0].Longitude);
            }
            if (pointArray2.length == 2) {
                NowCenter = new google.maps.LatLng((pointArray2[0].Latitude + pointArray2[1].Latitude) / 2, (pointArray2[0].Longitude + pointArray2[1].Longitude) / 2);
            }
        }
        else {
            NowCenter = new google.maps.LatLng((rect.miny + rect.maxy) / 2, (rect.minx + rect.maxx) / 2);
        }
        for (var i = 0; i <= pointList.length - 1; i++) {

            var item = pointList[i];
            var Marker2 = new MyMarker({
                latlng: new google.maps.LatLng(item.Latitude, item.Longitude),
                image: "//img1.40017.cn/cn/v/wanle/2015/details/default-map-1.png",
                labelText: "<span  class='mapMarkerIcon'></span>",
                index: i,
                mouseoverFun: obj.mouseoverFun,
                mouseoutFun: obj.mouseoutFun,
                map: map,
                isShow: item.isShow
            });
            Marker2.EnglishName = item.EnglishName;
            Marker2.TitleText = item.Name;
            Marker2.hotelStar = item.hotelStar;
            Marker2.hotelScore = item.hotelScore;
            Marker2.hotelPic = item.CoverImg;
            Marker2.hotelAddress = item.Address;
            MarkLists.push(Marker2);
        }
        this.MarkLists = MarkLists;
        if (NowCenter != undefined) {
            // map.setOptions({ position: NowCenter, zoom: 12 });
            tilesloaded = false;
            //map.setOptions({ position: NowCenter, zoom: zoom });
            var nowzoom = map.getZoom();
            if (nowzoom != 12 && oldmoveFlag) {
                zoom = 12;
                map.setZoom(12);
            }
            map.setCenter(NowCenter);
        }
        MapTilesloaded();
    }
    function MapCoorToScreenCoor(Marker, latlng) {
        var overlayProjection = Marker.getProjection();
        if (overlayProjection != undefined) {
            var position = overlayProjection.fromLatLngToContainerPixel(latlng);
            return { clientX: position.x, clientY: position.y };
        }
        else {
            return undefined;
        }
    }
}



//js截取字符串，中英文都能用
//如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。
//字符串，长度

/**
 * js截取字符串，中英文都能用
 * @param str：需要截取的字符串
 * @param len: 需要截取的长度
 */
function SubTitleByLen(str, len, replaceTxt) {
    if (str == undefined) {
        return "";
    }
    len = len * 2;

    var str_length = 0;
    var str_len = 0;
    str_cut = new String();

    if (str != undefined && str != "") {
        str_len = str.length;
    }
    for (var i = 0; i < str_len; i++) {
        if (GetLength(str) > len) {
            a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4  
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len && str_cut != str) {
                str_cut = str_cut.concat(replaceTxt != undefined ? replaceTxt : "...");
                return str_cut;
            }
        } else { //如果给定字符串小于指定长度，则返回源字符串；  
            return str;
        }
    }
    return str;
}
//////字符串截取
var GetLength = function (str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (escape(charCode).length > 4) {
            // if (charCode >= 0 && charCode <= 128) {
            realLength += 2;// 如果是中文则长度加2
        } else {
            realLength += 1;
        }
    }
    return realLength;
};

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}