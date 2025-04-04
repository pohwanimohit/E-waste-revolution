// JavaScript code

// Add active class to the clicked navigation link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove active class from all navigation links
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Add active class to the clicked navigation link
    link.classList.add("active");
  });
});

// Scroll to sections when clicking on the navigation links
const scrollToSection = (event) => {
  event.preventDefault();

  const target = event.target.getAttribute("href");
  const section = document.querySelector(target);

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth"
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to E-Waste Revolution!");
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("E-Waste Website Loaded!");
});
});

function handlePickupClick() {
  window.location.href = "pickup-form.html"; // Redirect to your form submission page
}

function changePage(page) {
  document.querySelector('.services').dataset.hoverPage = page;
}

function navigateTo(page) {
  window.location.href = page;
}







//collection center
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal"
];

const wasteCentres = [
  { state: "Andhra Pradesh", city: "Visakhapatnam", address: "Eco Green Recycling, Gajuwaka, Visakhapatnam - 530026", type: "E-waste", contacts: [{ name: "Vikram Reddy", phone: "9876543211" }], lat: 17.6868, lng: 83.2185 },
  { state: "Arunachal Pradesh", city: "Itanagar", address: "Green Earth Recycling, Naharlagun, Itanagar - 791110", type: "E-waste", contacts: [{ name: "Tenzing Norbu", phone: "9845632178" }], lat: 27.0844, lng: 93.6053 },
  { state: "Assam", city: "Guwahati", address: "Eco Saver Recycling, Paltan Bazar, Guwahati - 781008", type: "E-waste", contacts: [{ name: "Anupam Das", phone: "9706541236" }], lat: 26.1445, lng: 91.7362 },
  { state: "Bihar", city: "Patna", address: "Recycle Hub, Kankarbagh, Patna - 800020", type: "E-waste", contacts: [{ name: "Rajesh Sinha", phone: "9934765123" }], lat: 25.5941, lng: 85.1376 },
  { state: "Chhattisgarh", city: "Raipur", address: "Clean Earth Recycling, Pandri, Raipur - 492001", type: "E-waste", contacts: [{ name: "Sunil Verma", phone: "9753124876" }], lat: 21.2514, lng: 81.6296 },
  { state: "Goa", city: "Panaji", address: "Ocean Eco Recycling, Miramar, Panaji - 403001", type: "E-waste", contacts: [{ name: "Rohan Desai", phone: "9823154876" }], lat: 15.4909, lng: 73.8278 },
  { state: "Gujarat", city: "Ahmedabad", address: "Zero Waste Recycling, SG Highway, Ahmedabad - 380015", type: "E-waste", contacts: [{ name: "Amit Patel", phone: "9874563210" }], lat: 23.0225, lng: 72.5714 },
  { state: "Haryana", city: "Gurugram", address: "Sustainable E-Waste Solutions, Sector 44, Gurugram - 122003", type: "E-waste", contacts: [{ name: "Sandeep Malik", phone: "9896541236" }], lat: 28.4595, lng: 77.0266 },
  { state: "Himachal Pradesh", city: "Shimla", address: "GreenTech Recycling, Mall Road, Shimla - 171001", type: "E-waste", contacts: [{ name: "Ravi Thakur", phone: "9812345678" }], lat: 31.1048, lng: 77.1734 },
  { state: "Jharkhand", city: "Ranchi", address: "E-Waste India, Main Road, Ranchi - 834001", type: "E-waste", contacts: [{ name: "Vikas Gupta", phone: "9501234789" }], lat: 23.3441, lng: 85.3096 },
  { state: "Karnataka", city: "Bengaluru", address: "Electronic Waste Recycling, Whitefield, Bengaluru - 560066", type: "E-waste", contacts: [{ name: "Manoj Rao", phone: "9123456780" }], lat: 12.9716, lng: 77.5946 },
  { state: "Kerala", city: "Calicut", address: "Karo Sambhav, Near Vengali Flyover, Kozhikode - 673303", type: "E-waste", contacts: [{ name: "Muhammad Nihad", phone: "8921311861" }], lat: 11.2588, lng: 75.7804 },
  { state: "Madhya Pradesh", city: "Indore", address: "RecycleTech, Vijay Nagar, Indore - 452010", type: "E-waste", contacts: [{ name: "Ankit Tiwari", phone: "9987456321" }], lat: 22.7196, lng: 75.8577 },
  { state: "Maharashtra", city: "Mumbai", address: "Eco Recycling Ltd, Andheri East, Mumbai - 400093", type: "E-waste", contacts: [{ name: "Rajesh Kumar", phone: "9876543210" }], lat: 19.0760, lng: 72.8777 },
  { state: "Odisha", city: "Bhubaneswar", address: "E-Waste Solutions, Saheed Nagar, Bhubaneswar - 751007", type: "E-waste", contacts: [{ name: "Prakash Nayak", phone: "9856741234" }], lat: 20.2961, lng: 85.8245 },
  { state: "Punjab", city: "Ludhiana", address: "Green Planet Recycling, Model Town, Ludhiana - 141002", type: "E-waste", contacts: [{ name: "Harpreet Singh", phone: "9814756321" }], lat: 30.9010, lng: 75.8573 },
  { state: "Rajasthan", city: "Jaipur", address: "Jaipur E-Waste Center, Malviya Nagar, Jaipur - 302017", type: "E-waste", contacts: [{ name: "Vivek Sharma", phone: "9987456321" }], lat: 26.9124, lng: 75.7873 },
  { state: "Tamil Nadu", city: "Chennai", address: "Eco Warriors Recycling, T Nagar, Chennai - 600017", type: "E-waste", contacts: [{ name: "Suresh R", phone: "9876543210" }], lat: 13.0827, lng: 80.2707 },
  { state: "Telangana", city: "Hyderabad", address: "Hyderabad Recycle Hub, HITEC City, Hyderabad - 500081", type: "E-waste", contacts: [{ name: "Ramesh Chandra", phone: "9976541230" }], lat: 17.3850, lng: 78.4867 },
  { state: "Uttar Pradesh", city: "Lucknow", address: "E-Waste Lucknow, Gomti Nagar, Lucknow - 226010", type: "E-waste", contacts: [{ name: "Abhishek Singh", phone: "9987456321" }], lat: 26.8467, lng: 80.9462 },
  { state: "West Bengal", city: "Kolkata", address: "Green Earth Recycling, Salt Lake, Kolkata - 700091", type: "E-waste", contacts: [{ name: "Ranjan Das", phone: "9836547890" }], lat: 22.5726, lng: 88.3639 }
];
function populateStates() {
  const stateSelect = document.getElementById("stateSelect");
  stateSelect.innerHTML = `<option value="">Select your state</option>`;

  states.forEach(state => {
      let option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
  });
}


function searchCenters() {
  const selectedState = document.getElementById("stateSelect").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const centers = wasteCentres.filter(center => center.state === selectedState);

  if (centers.length === 0) {
      resultsDiv.innerHTML = "<p>No centers found for this state.</p>";
      return;
  }

  centers.forEach(center => {
      resultsDiv.innerHTML += `<div><h3>${center.city}</h3><p>${center.address}</p><p>Type: ${center.type}</p><p>Contacts: ${center.contacts.map(contact => `${contact.name} - ${contact.phone}`).join(", ")}</p></div>`;

      
  });
}

document.addEventListener("DOMContentLoaded", populateStates);





















// Handle form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Simulate form submission success with a popup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent =
    "Form submitted successfully! We will get back to you soon.";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);

  // Reset the form fields
  contactForm.reset();
});

function popup() {
  document.getElementById("popup").style.cssText = "visibility:visible";
  document.getElementById("contact-form").style.cssText = "visibility:hidden";
}
function cln() {
  document.getElementById("popup").style.cssText = "visibility:hidden";
  document.getElementById("contact-form").style.cssText = "visibility:visible";
}
function n1() {
  document.getElementById("nav1").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n2() {
  document.getElementById("nav2").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n3() {
  document.getElementById("nav3").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n4() {
  document.getElementById("nav4").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
// function displayWelcomeMessage() {
//   var welcomeText = document.getElementById("welcome-text");
//   welcomeText.textContent = "Welcome to our website!";
// }
// document.getElementById("bdy").addEventListener("load",text-ani);
// function text-ani(){
//   document.getElementById("welcome-text").style.cssText = " overflow: hidden;border-right: 1px solid #000;white-space: nowrap;margin: 0 auto;letter-spacing: 4px;animation: typing 3s steps(40, end);";
// }