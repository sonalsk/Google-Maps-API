function initMap() {
    // Map options
    let options = {
        zoom: 12,
        center: {lat: 28.572200136287556, lng: 77.25833047105452}
    }

    // Create Map
    let map = new google.maps.Map(document.getElementById("map"), options);

    // Create marker
    function addMarker(props) {
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            title: props.title,
        });

        // Marker icon
        if (props.icon) {
            marker.setIcon(props.icon);
        }

        // Marker content
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }

    // markers info
    let markers = [
        {
            coords: { lat: 28.572200136287556, lng: 77.25833047105452 },
            title: 'SS',
            icon: 'http://maps.google.com/mapfiles/kml/paddle/S.png',
            content: '<h1> SS </h1>'
        },
        {
            coords: { lat: 28.533048000727327, lng: 77.25924884876386 },
            title: 'PS',
            icon: 'http://maps.google.com/mapfiles/kml/paddle/P.png',
            content: '<h1> PS </h1>'
        }
    ]

    // Add markers
    for (let m of markers) {
        addMarker(m);
    }
}