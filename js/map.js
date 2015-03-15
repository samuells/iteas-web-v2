var bounds = new google.maps.LatLngBounds();
var mapzoom = 15;
var mapcenter = new google.maps.LatLng(48.146632, 17.162910);
var map;

// get current browser width
function getWidth() {
  if (self.innerHeight) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

// set the zoom according to the browser width
function setZoom() {
  if (getWidth() < 500) {
    zoom = 15;
  } else if (getWidth() < 900) {
    zoom = 15;
  } else {
    zoom = 15;
  }

  map.setZoom(zoom);
}

// initialize the map
function initialize() {

  var map_canvas = document.getElementById('map-canvas');

  var loc = new google.maps.LatLng(48.146632, 17.162910);
  var map_options = {
    // draggable:false,
    disableDefaultUI: true,
    center: loc,
    zoom: 13,
    scrollwheel: false,
    styles: [{
      "featureType": "all",
      "elementType": "all",
      "stylers": [{
        "invert_lightness": true
      }, {
        "saturation": 10
      }, {
        "lightness": 30
      }, {
        "gamma": 0.5
      }, {
        "hue": "#435158"
      }]
    }]
  }
  map = new google.maps.Map(map_canvas, map_options);
  if ((/Android|iPhone|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    map.setOptions({
      draggable: false,
      zoom: 12
    });
  } else if (false && (/iPad/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    map.setOptions({
      draggable: false,
      zoom: 1
    });
  }
  // centering
  // var center;
  // function calculateCenter() {
  //   center = map.getCenter();
  // }
  // google.maps.event.addDomListener(map, 'idle', function() {
  //   calculateCenter();
  // });
  // google.maps.event.addDomListener(window, 'resize', function() {
  //   map.setCenter(center);
  // });
  // map label
  var infobox = new InfoBox({
    content: document.getElementById("maplabel"),
    disableAutoPan: false,
    position: loc,
    pixelOffset: new google.maps.Size(-50, -140)
  });
  infobox.open(map);

  // set zoom correctly according the browser width
  setZoom();

}

google.maps.event.addDomListener(window, 'load', initialize);

// Center the map on resize and set the zoom correctly
google.maps.event.addDomListener(window, 'resize', function() {
  google.maps.event.trigger(map, "resize");
  setZoom();
  map.setCenter(mapcenter);  
});
