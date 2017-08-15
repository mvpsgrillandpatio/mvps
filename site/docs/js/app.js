var map, map2;

function initialize(condition) {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 20,
    center: {lat: 33.795953, lng: -118.126025}
  });

  var marker = new google.maps.Marker({
  position: {lat: 33.795953, lng: -118.126025},
  map: map
  });

map2 = new google.maps.Map(document.getElementById("map_canvas2"), {
  zoom: 20,
  center: {lat: 33.771660, lng: -118.159220}
  });

  var marker2 = new google.maps.Marker({
  position: {lat: 33.771660, lng: -118.159220},
  map: map2
  });
}
