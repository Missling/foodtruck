function initMap() {
  var myLatLng = {lat: 37.7833, lng: -122.4167};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });

  // var trucks = gon.foodtrucks
  
  for (var i = 0; i < gon.foodtrucks.length; i ++) {
    var coordinate = { lat: gon.foodtrucks[i].latitude, lng: gon.foodtrucks[i].longitude }

    var marker = new google.maps.Marker({
      position: coordinate,
      map: map,
      title: 'Hello World!'
    });
  };
}



