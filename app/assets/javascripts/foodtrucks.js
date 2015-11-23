function initMap(){
  var myLatLng = {lat: 37.7833, lng: -122.4167};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var trucks = gon.foodtrucks
  var markers = []

  for (var i = 0; i < trucks.length; i ++) {
    var coordinate = { lat: parseFloat(trucks[i].latitude), lng: parseFloat(trucks[i].longitude)}

    var marker = new google.maps.Marker({
      position: coordinate,
      map: map,
      description: trucks[i].description,
      name: trucks[i].name,
    });

    markers.push(marker)

    google.maps.event.addListener(marker, 'mouseover', function(){

      var contentString = '<div id="content">'+
          '<p>'+'food truck: '+this.name+'</p>'+'<p>'+'menu: ' +this.description+'</p>'+'</div>';
      marker.infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      marker.infowindow.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseout', function() {
      marker.infowindow.close();
    });
  }; 
};














