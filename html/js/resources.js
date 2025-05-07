
// Get stored resources from localStorage
let resources = JSON.parse(localStorage.getItem('resources')) || [
  {
    name: "Downtown Food Bank",
    category: "food",
    address: "123 Main St",
    hours: "9 AM - 5 PM"
  },
  {
    name: "Central Shelter",
    category: "shelter", 
    address: "456 Park Ave",
    hours: "24/7"
  },
  {
    name: "Community Clinic",
    category: "health",
    address: "789 Health Dr",
    hours: "8 AM - 8 PM"
  }
];

const categorySelect = document.getElementById('categorySelect');
const resourceTable = document.getElementById('resourceTable').getElementsByTagName('tbody')[0];

function displayResources(category = 'all') {
  resourceTable.innerHTML = '';
  
  resources.filter(resource => 
    category === 'all' || resource.category === category
  ).forEach(resource => {
    const row = resourceTable.insertRow();
    
    const imgCell = row.insertCell();
    imgCell.innerHTML = `<img src="images/${resource.category}.jpg" alt="${resource.category}" style="width:50px;height:50px;">`;
    
    const nameCell = row.insertCell();
    nameCell.textContent = resource.name;
    
    const categoryCell = row.insertCell();
    categoryCell.textContent = resource.category;
    
    const addressCell = row.insertCell();
    addressCell.textContent = resource.address;
    
    const hoursCell = row.insertCell();
    hoursCell.textContent = resource.hours;
  });
}

categorySelect.addEventListener('change', (e) => {
  displayResources(e.target.value);
});

// Initial display
displayResources();
