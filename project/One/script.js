// ===============================
// Navigation Active Link Handling
// ===============================
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove active class from all navigation links
    navLinks.forEach((navLink) => navLink.classList.remove("active"));

    // Add active class to clicked link
    link.classList.add("active");

    // Smooth Scroll to Section
    const target = link.getAttribute("href");
    const section = document.querySelector(target);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  });
});

// ===============================
// Page Redirection Functions
// ===============================
function handlePickupClick() {
  window.location.href = "pickup-form.html";
}

function navigateTo(page) {
  window.location.href = page;
}

// ===============================
// Populate States Dropdown
// ===============================
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal"
];

function populateStates() {
  const stateSelect = document.getElementById("stateSelect");
  stateSelect.innerHTML = `<option value="">Select your state</option>`;

  states.forEach((state) => {
    let option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", populateStates);

// ===============================
// Waste Collection Centers Data
// ===============================
const wasteCentres = [
  { state: "Andhra Pradesh", city: "Visakhapatnam", address: "Eco Green Recycling, Gajuwaka, Visakhapatnam - 530026", type: "E-waste", contacts: [{ name: "Vikram Reddy", phone: "9876543211" }], lat: 17.6868, lng: 83.2185 },
  { state: "Karnataka", city: "Bengaluru", address: "Electronic Waste Recycling, Whitefield, Bengaluru - 560066", type: "E-waste", contacts: [{ name: "Manoj Rao", phone: "9123456780" }], lat: 12.9716, lng: 77.5946 },
  { state: "Maharashtra", city: "Mumbai", address: "Eco Recycling Ltd, Andheri East, Mumbai - 400093", type: "E-waste", contacts: [{ name: "Rajesh Kumar", phone: "9876543210" }], lat: 19.0760, lng: 72.8777 },
  { state: "West Bengal", city: "Kolkata", address: "Green Earth Recycling, Salt Lake, Kolkata - 700091", type: "E-waste", contacts: [{ name: "Ranjan Das", phone: "9836547890" }], lat: 22.5726, lng: 88.3639 }
];

function searchCenters() {
  const selectedState = document.getElementById("stateSelect").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const centers = wasteCentres.filter((center) => center.state === selectedState);

  if (centers.length === 0) {
    resultsDiv.innerHTML = "<p>No centers found for this state.</p>";
    return;
  }

  let emailBody = `E-Waste Collection Centers in ${selectedState}:\n\n`;

  centers.forEach((center) => {
    const centerInfo = `City: ${center.city}\nAddress: ${center.address}\nType: ${center.type}\nContacts: ${center.contacts.map((c) => `${c.name} - ${c.phone}`).join(", ")}\n\n`;
    emailBody += centerInfo;

    resultsDiv.innerHTML += `<div>
      <h3>${center.city}</h3>
      <p>${center.address}</p>
      <p>Type: ${center.type}</p>
      <p>Contacts: ${center.contacts.map((contact) => `${contact.name} - ${contact.phone}`).join(", ")}</p>
    </div>`;
  });

  sendEmail(`E-Waste Centers in ${selectedState}`, emailBody);
}

// ===============================
// Form Submission & Email Sending
// ===============================
function sendEmail(subject, body) {
  const email = ["pohwanimohit@gmail.com", "mehulmiittal@gmail.com"] ;
  // const email = "mehulmiittal@gmail.com";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

// Form submission handling
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name")?.value || "Not provided";
      const email = document.getElementById("emailid")?.value || "Not provided";
      const mobileNumber = document.getElementById("mobileNumber")?.value || "Not provided";
      const category = document.querySelector('input[name="category"]:checked')?.value || "Not selected";
      const location = document.getElementById("location")?.value || "Not provided";
      const ewasteType = document.getElementById("ewasteType")?.value || "Not provided";
      const weight = document.getElementById("weight")?.value || 0;
      const message = document.getElementById("msgContent")?.value || "Not provided";

      // Validate weight
      if (weight < 10) {
          alert("Minimum weight should be 10 kg for pickup.");
          return;
      }

      const subject = "New E-Waste Pickup Request";
      const body = `Name: ${name}
Email: ${email}
Mobile: ${mobileNumber}
Category: ${category}
Location: ${location}
E-Waste Type: ${ewasteType}
Weight: ${weight} kg
Message: ${message}`;

      sendEmail(subject, body);

      // Show success message
      const alertBox = document.querySelector(".alert");
      alertBox.style.display = "block";
      setTimeout(() => {
          alertBox.style.display = "none";
      }, 3000);
      trackButton.style.display = "block";
      // Reset form
      contactForm.reset();
  });
}

// ===============================
// Popups & Navigation UI Effects
// ===============================
function popup() {
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("contact-form").style.visibility = "hidden";
}

function cln() {
  document.getElementById("popup").style.visibility = "hidden";
  document.getElementById("contact-form").style.visibility = "visible";
}

function highlightNav(id) {
  document.getElementById(id).classList.add("active-highlight");
}



