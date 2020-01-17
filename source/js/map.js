function initMap() {
  var pognali = {lat: 59.936, lng: 30.321};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: pognali});
  var marker = new google.maps.Marker({position: pognali, map: map, icon: {url: "img/map-marker.svg",	scaledSize: new google.maps.Size(41, 41)}});
}
