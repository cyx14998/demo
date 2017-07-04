//cyx14998
var poly;
var preDirectionsRenderer = null;
var latlng={  //无锡
    lng: 120.31191000000001,
    lat: 31.49117,
    title: '无锡'
}
var map = {
    lnglat: [
        {//杭州
            lng: 120.15507000000002,
            lat: 30.274085,
            title: "杭州"
        },
        {//苏州
            lng: 120.58528999999999,
            lat: 31.298979,
            title: "苏州"
        },
        {//上海
            lng: 121.473701,
            lat: 31.230416,
            title: "上海"
        }
    ],
    initMap: function (travelMode) {
        var self = this;
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 30.274085, lng: 120.58528999999999},
            zoom: 7 
        });
        map.addListener('click', function(e) {
            self.placeMarkerAndPanTo(e.latLng, map);
        });
        var lnglat = self.lnglat;
        for(var i=0; i< lnglat.length; i++){
            var marker = new google.maps.Marker({
                position: lnglat[i],
                title: lnglat[i].title,
                map: map,
                icon: "//img1.40017.cn/cn/v/2015/zhuanti/2016/picture/default-map-" + (i + 1) + ".png"
            });
            self.mouseOverEvent(marker, lnglat[i].title);
        }
        var marker5 = new google.maps.Marker({
            position: latlng,
            title: latlng.title,
            map: map
        });
        var infowindow5 = new google.maps.InfoWindow();
        google.maps.event.addListener(marker5, 'mouseover', function() {
            var html= '<div id="tjxc" data-latlng = "' + encodeURIComponent(JSON.stringify(latlng)) + '">添加到行程</div>';
            infowindow5.setContent(html);
            infowindow5.open(map, this);
        });
        $(document).on("click","#tjxc",function(){
            var path = poly.getPath();

            // Because path is an MVCArray, we can simply append a new coordinate
            // and it will automatically appear.
            var latlng = new google.maps.LatLng(JSON.parse(decodeURIComponent($(this).attr("data-latlng"))));
            path.push(latlng);

            // Add a new marker at the new plotted point on the polyline.
            var marker = new google.maps.Marker({
                position: event.latLng,
                title: '#' + path.getLength(),
                map: map
            });
        })
        var path = [];
        path.push(lnglat[0]);
        path.push(lnglat[1]);
        path.push(lnglat[2]);
        poly = new google.maps.Polyline({
            path: path,
            strokeColor: '#000000',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });
        poly.setMap(map);
        var requestParms = {
            origin: null, //原点
            destination: null, //目的地
            waypoints: [], //中途经过的点
            travelMode: "", //搜索类型
            avoidHighways: false, //避免高速
            avoidTolls: false //避免收费
        }
        requestParms.origin = new google.maps.LatLng(lnglat[2].lat, lnglat[2].lng);
        requestParms.destination = new google.maps.LatLng(lnglat[1].lat, lnglat[1].lng);
        requestParms.travelMode = travelMode || google.maps.DirectionsTravelMode.DRIVING;

        new google.maps.DirectionsService().route(requestParms, function (directionsResult, directionsStatus) {
            console.log(directionsResult.routes[0]);
            if (directionsStatus == google.maps.DirectionsStatus.OK) {


                //绘制路线图像,(routeIndex没有设置)默认第一条线路
                preDirectionsRenderer = new google.maps.DirectionsRenderer({
                    //routeIndex: 2, //这边index可以选择公交方式
                    directions: directionsResult,
                    suppressMarkers: true,
                    map: map
                });
            }
        });
        $("#bx").on('click',function(){
            initMap(google.maps.DirectionsTravelMode.WALKING);
        });
        $("#gj").on('click',function(){
            initMap(google.maps.DirectionsTravelMode.TRANSIT);
        });
        $("#kc").on('click',function(){
            initMap(google.maps.DirectionsTravelMode.DRIVING);
        })
    },
    mouseOverEvent: function(marker, secretMessage) {
        var infowindow = new google.maps.InfoWindow({
            disableAutoPan: false,
            content: secretMessage
        });

        marker.addListener('mouseover', function() {
            infowindow.open(marker.get('map'), marker);
        });
        marker.addListener('mouseout', function() {
            setTimeout(function(){
                infowindow.close(marker.get('map'), marker);
            },20)
        });
    },
    placeMarkerAndPanTo: function(latLng, map) {
        var self = this;
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        map.panTo(latLng);
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'mouseover', function() {
            var html= '<div id="tjxc" data-latlng = "' + encodeURIComponent(JSON.stringify(latLng)) + '">添加到行程</div>';
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }
}

map.initMap();