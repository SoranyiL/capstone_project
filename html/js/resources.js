const resources = [
    { name: "Hope Food Pantry", type: "Food", address: "123 Hope St, NYC" },
  { name: "Green Market Pantry", type: "Food", address: "321 Green Blvd, NYC" },
  { name: "Brooklyn Harvest Center", type: "Food", address: "12 Grove Ave, Brooklyn, NY" },
  { name: "Bronx Meal Support", type: "Food", address: "888 Grand Concourse, Bronx, NY" },
  { name: "St. Mary's Community Kitchen", type: "Food", address: "207 Church St, NYC" },

  { name: "Safe Night Shelter", type: "Shelter", address: "456 Safe Rd, NYC" },
  { name: "Harbor House Shelter", type: "Shelter", address: "987 Harbor Dr, NYC" },
  { name: "Brooklyn Family Shelter", type: "Shelter", address: "101 Shelter Ln, Brooklyn, NY" },
  { name: "East Village Women's Refuge", type: "Shelter", address: "44 E 4th St, NYC" },
  { name: "Midtown Youth Shelter", type: "Shelter", address: "1000 Park Ave, NYC" },

  { name: "Sunrise Community Clinic", type: "Clinic", address: "789 Sunrise Ave, NYC" },
  { name: "Downtown Wellness Center", type: "Clinic", address: "654 Wellness Ln, NYC" },
  { name: "Harlem Free Clinic", type: "Clinic", address: "230 W 135th St, Harlem, NY" },
  { name: "Bronx Health Access", type: "Clinic", address: "300 E 149th St, Bronx, NY" },
  { name: "Neighborhood Family Clinic", type: "Clinic", address: "520 Main St, Queens, NY" }
  ];
  
  const resourceListDiv = document.getElementById("resourceList");
  const categorySelect = document.getElementById("categorySelect");
  
  function displayResources(category) {
    resourceListDiv.innerHTML = ""; 
    const filtered = category === "All"
      ? resources
      : resources.filter(r => r.type === category);
  
    if (filtered.length === 0) {
      resourceListDiv.innerHTML = "<p>No resources found in this category.</p>";
      return;
    }
  
    filtered.forEach(r => {
      const card = document.createElement("div");
      card.className = "resource-card";
      card.innerHTML = `
        <h3>${r.name}</h3>
        <p><strong>Type:</strong> ${r.type}</p>
        <p><strong>Address:</strong> ${r.address}</p>
      `;
      resourceListDiv.appendChild(card);
    });
  }
  
  categorySelect.addEventListener("change", () => {
    displayResources(categorySelect.value);
  });
  
  window.onload = () => displayResources("All");
  