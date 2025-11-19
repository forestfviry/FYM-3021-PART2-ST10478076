function initMap() {
  // Location: Rosebank College, Braamfontein
  const location = { lat: -26.2015, lng: 28.0446 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location
  });

  // Marker
  new google.maps.Marker({
    position: location,
    map: map,
    title: "FYM3021 - Rosebank College"
  });
}