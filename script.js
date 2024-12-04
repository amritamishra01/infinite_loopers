// JavaScript for toggling the navigation menu
function toggleNav() {
  const navMenu = document.getElementById('nav-menu');
  const isHidden = navMenu.style.right === '-250px' || !navMenu.style.right;

  if (isHidden) {
      navMenu.style.right = '0'; // Slide in
      document.addEventListener('click', handleOutsideClick); // Add outside click listener
  } else {
      closeNav(); // Slide out
  }
}

// Function to close the navigation menu
function closeNav() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.style.right = '-250px'; // Slide out
  document.removeEventListener('click', handleOutsideClick); // Remove outside click listener
}

// Function to handle clicks outside the navigation menu
function handleOutsideClick(event) {
  const navMenu = document.getElementById('nav-menu');
  const navIcon = document.getElementById('nav-icon');

  // Close the menu if the click is outside both the menu and the button
  if (!navMenu.contains(event.target) && !navIcon.contains(event.target)) {
      closeNav();
  }
}
function toggleAboutUs() {
  const aboutDropdown = document.getElementById('about-us-dropdown');
  // Toggle the visibility of the About Us dropdown
  if (aboutDropdown.style.display === 'none' || aboutDropdown.style.display === '') {
      aboutDropdown.style.display = 'block';
  } else {
      aboutDropdown.style.display = 'none';
  }
}



//
// Open the modal when About Us link is clicked
function openAboutModal() {
  const modal = document.getElementById('about-us-modal');
  modal.style.display = 'block'; // Display the modal
}

// Close the modal when the close button (X) is clicked
function closeAboutModal() {
  const modal = document.getElementById('about-us-modal');
  modal.style.display = 'none'; // Hide the modal
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById('about-us-modal');
  if (event.target === modal) {
      modal.style.display = 'none'; // Hide the modal if clicked outside
  }
}




// Show the selected service content
function showService(serviceId) {
  // Hide all service content
  const allContent = document.querySelectorAll('.service-content');
  allContent.forEach(function(content) {
      content.style.display = 'none';
  });

  // Show the selected service content
  const selectedContent = document.getElementById(serviceId);
  selectedContent.style.display = 'block';
}















function getCropDetails() {
  const region = document.getElementById("region").value.trim();
  const rainfall = parseInt(document.getElementById("rainfall").value.trim());
  const temperature = parseInt(document.getElementById("temperature").value.trim());
  const output = document.getElementById("crop-output");

  if (!region || isNaN(rainfall) || isNaN(temperature)) {
      output.innerHTML = `<p style="color:red;">Please fill in all the fields correctly.</p>`;
      return;
  }

  let crop = "";
  let cropDetails = "";

  if (rainfall > 150 && temperature > 25) {
      crop = "Rice";
      cropDetails = "Requires high water availability and warm climate. Suggested irrigation: Flood irrigation.";
  } else if (rainfall < 100 && temperature < 20) {
      crop = "Wheat";
      cropDetails = "Prefers cool climates and moderate water. Suggested irrigation: Drip irrigation.";
  } else if (rainfall > 100 && temperature > 30) {
      crop = "Sugarcane";
      cropDetails = "Requires significant water and a hot climate. Suggested irrigation: Furrow irrigation.";
  } else if (rainfall < 80 && temperature > 25) {
      crop = "Maize";
      cropDetails = "Thrives in warm climates with minimal rainfall. Suggested irrigation: Sprinkler irrigation.";
  } else if (rainfall > 120 && temperature > 20) {
      crop = "Watermelon";
      cropDetails = "Needs sandy soil and warm weather. Suggested irrigation: Drip irrigation.";
  } else if (rainfall < 100 && temperature < 18) {
      crop = "Barley";
      cropDetails = "Prefers cold climates with low rainfall. Suggested irrigation: Sprinkler irrigation.";
  } else {
      crop = "Sunflower";
      cropDetails = "Needs moderate water and warm climates. Suggested irrigation: Furrow irrigation.";
  }

  output.innerHTML = `
      <h3>${crop}</h3>
      <p>${cropDetails}</p>
  `;
}






const fertilizers = ["Compost", "Manure", "Bone Meal", "Fish Emulsion", "Vermicompost", "Seaweed", "Green Manure"];

document.getElementById("fertilizer").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const suggestions = fertilizers.filter(f => f.toLowerCase().includes(input));
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";

  if (input) {
    suggestions.forEach(suggestion => {
      const div = document.createElement("div");
      div.textContent = suggestion;
      div.addEventListener("click", () => {
        document.getElementById("fertilizer").value = suggestion;
        suggestionBox.innerHTML = "";
      });
      suggestionBox.appendChild(div);
    });
  }
});

function calculateScore() {
  const waterUsage = parseFloat(document.getElementById("waterUsage").value);
  const soilHealth = parseFloat(document.getElementById("soilHealth").value);
  const carbonFootprint = parseFloat(document.getElementById("carbonFootprint").value);

  let score = 100 - (waterUsage * 0.2 + (10 - soilHealth) * 5 + carbonFootprint * 0.1);
  score = Math.max(0, Math.min(100, Math.round(score)));

  let category = score > 80 ? "High" : score > 50 ? "Medium" : "Low";

  document.getElementById("results").innerHTML = `
    <h4>Overall Sustainability Score: ${score} (${category})</h4>
    <h5>Recommendations:</h5>
    <ul>
      <li><strong>Water Management Strategies:</strong> Consider drip irrigation to reduce water usage.</li>
      <li><strong>Soil Health Improvement:</strong> Incorporate organic fertilizers like ${document.getElementById("fertilizer").value || 'compost'}.</li>
      <li><strong>Carbon Reduction Measures:</strong> Adopt renewable energy or precision farming techniques.</li>
    </ul>
  `;
}






