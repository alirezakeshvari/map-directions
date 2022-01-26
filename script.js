mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpcmV6YWt2ciIsImEiOiJja3l2ZXlzd2gxd3NpMnBvM3hhd3JtYzdoIn0.hton60MqrEQ9Vg6-e_NzSg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(errorLocation) {
  console.log("Error: " + errorLocation.message);
  setupMap([52.520007, 13.404954], 3);
}

function setupMap(center, zoom = 14) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: zoom,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
