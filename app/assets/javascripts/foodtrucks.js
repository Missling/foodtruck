function initMap() {
  var myLatLng = {lat: 37.7833, lng: -122.4167};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var trucks = gon.foodtrucks

  for (var i = 0; i < trucks.length; i ++) {
    var coordinate = { lat: parseFloat(trucks[i].latitude), lng: parseFloat(trucks[i].longitude)}

      var marker = new google.maps.Marker({
        position: coordinate,
        map: map,
      });
  };

  // google.maps.event.addListener(marker,'click', function() {
  //   var contentString = '<div class=specific_food><p>hello</p></div>'
  //   var infoWindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //   infoWindow.close();
  //   infoWindow.open(map, this);
  // });



  google.maps.event.addListener(marker, 'click', function() {


    debugger

    var contentString = '<div id="content">'+
        '<p>stuff</p>'+'</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    infowindow.open(map, this); //this should be marker
  });


}

  $('#name').on('click', function(){
    console.log("hello")
  });


