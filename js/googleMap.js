function initMap() {
  var myLatLng = {lat: 10.1612262, lng: -68.8962913};

  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var mapOptions = {
      center: myLatLng,
      scrollwheel: false,
      styles: styleArray,
      zoom: 18
  };
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title:"Hello World!"
  });

  // To add the marker to the map, call setMap();
  //marker.setMap(map);

}