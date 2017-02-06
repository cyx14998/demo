//cyx14998
var latlng1={ //杭州
    lng: 120.15507000000002,
    lat: 30.274085
}
var latlng2={  //苏州
    lng: 120.58528999999999,
    lat: 31.298979
}
var latlng3={  //上海
    lng: 121.473701,
    lat: 31.230416
}
var preDirectionsRenderer = null;
function initMap(travelMode) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.6820158113, lng: 115.8579382435},
        zoom: 13
    });
    var poly;
    var marker = new google.maps.Marker({
        map: map
    });
    var marker1 = new google.maps.Marker({
        position: latlng1,
        title: '杭州',
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: latlng2,
        title: '苏州',
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: latlng3,
        title: '上海',
        map: map
    });
    var path = [];
    path.push(latlng1);
    path.push(latlng2);
    path.push(latlng3);
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
    requestParms.origin = new google.maps.LatLng(latlng1.lat, latlng1.lng);
    requestParms.destination = new google.maps.LatLng(latlng2.lat, latlng2.lng);
    requestParms.travelMode = travelMode || google.maps.DirectionsTravelMode.DRIVING;
    new google.maps.DirectionsService().route(requestParms, function (directionsResult, directionsStatus) {
        console.log(directionsResult.routes[0].legs[0].duration.text);
        if (directionsStatus == google.maps.DirectionsStatus.OK) {


            //绘制路线图像,(routeIndex没有设置)默认第一条线路
            preDirectionsRenderer = new google.maps.DirectionsRenderer({
                directions: directionsResult,
                suppressMarkers: true,
                map: map
            });
        }
    });
}
$("#bx").on('click',function(){
    initMap(google.maps.DirectionsTravelMode.WALKING);
});
$("#gj").on('click',function(){
    initMap(google.maps.DirectionsTravelMode.TRANSIT);
});
$("#kc").on('click',function(){
    initMap(google.maps.DirectionsTravelMode.DRIVING);
})