const map = L.map('map').setView([40.7128, -74.0060], 12); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  { name: "Local Food Bank", lat: 40.73061, lng: -73.935242 },
  { name: "Community Clinic", lat: 40.712776, lng: -74.005974 },
  { name: "Shelter NYC", lat: 40.748817, lng: -73.985428 },
  { name: "Hope Food Pantry", type: "Food", lat: 40.7261, lng: -74.0012 },
  { name: "Green Market Pantry", type: "Food", lat: 40.7193, lng: -73.9982 },
  { name: "Brooklyn Harvest Center", type: "Food", lat: 40.7008, lng: -73.9500 },
  { name: "Bronx Meal Support", type: "Food", lat: 40.8265, lng: -73.9226 },
  { name: "St. Mary's Community Kitchen", type: "Food", lat: 40.7132, lng: -74.0094 },
  { name: "Safe Night Shelter", type: "Shelter", lat: 40.7295, lng: -73.9965 },
  { name: "Harbor House Shelter", type: "Shelter", lat: 40.7351, lng: -74.0039 },
  { name: "Brooklyn Family Shelter", type: "Shelter", lat: 40.6900, lng: -73.9600 },
  { name: "East Village Women's Refuge", type: "Shelter", lat: 40.7265, lng: -73.9847 },
  { name: "Midtown Youth Shelter", type: "Shelter", lat: 40.7540, lng: -73.9842 },
  { name: "Sunrise Community Clinic", type: "Clinic", lat: 40.7200, lng: -74.0001 },
  { name: "Downtown Wellness Center", type: "Clinic", lat: 40.7111, lng: -74.0101 },
  { name: "Harlem Free Clinic", type: "Clinic", lat: 40.8142, lng: -73.9401 },
  { name: "Bronx Health Access", type: "Clinic", lat: 40.8173, lng: -73.9165 },
  { name: "Neighborhood Family Clinic", type: "Clinic", lat: 40.7425, lng: -73.9021 }
];

locations.forEach(loc => {
  L.marker([loc.lat, loc.lng]).addTo(map)
    .bindPopup(`<b>${loc.name}</b>`);
});
