//cyx14998

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.6820158113, lng: 115.8579382435},
        zoom: 13
    });

    var input = document.getElementById('pac-input');

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }

        // Set the position of the marker using the place ID and location(Lat and Lng).
        marker.setPlace({
            placeId: place.place_id,
            location: place.geometry.location
        });
        marker.setVisible(true);

        //infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 'Place ID: ' + place.place_id + '<br>' + place.formatted_address);
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 'Place Lat and Lng: ' + place.geometry.location + '<br>' + place.formatted_address);
        infowindow.open(map, marker);
    });
}