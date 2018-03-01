function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 55.3781,
            lng: 3.4360
                }
    });
            
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
    var locations = [
        {lat: 53.378051, lng: -1.435973 },
        {lat: 53.800755, lng: -1.549077 },
        {lat: 53.699729, lng: -1.782501 }
        
    ];
    
                
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
                label: labels[i % labels.length]
            });
    });
            
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
      }

 