const map = L.map('map').setView([40.7128, -74.0060], 12); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  { name: "Local Food Bank", lat: 40.73061, lng: -73.935242 },
  { name: "Community Clinic", lat: 40.712776, lng: -74.005974 },
  { name: "Shelter NYC", lat: 40.748817, lng: -73.985428 }
];

locations.forEach(loc => {
  L.marker([loc.lat, loc.lng]).addTo(map)
    .bindPopup(`<b>${loc.name}</b>`);
});
