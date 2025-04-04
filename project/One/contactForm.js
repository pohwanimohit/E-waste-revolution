// ===============================
// Firebase Configuration & Initialization
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyDWz-je0vwKYuOmNC59rGmg7zy_sl6EYuA",
  authDomain: "contactform-3b6f0.firebaseapp.com",
  databaseURL: "https://contactform-3b6f0-default-rtdb.firebaseio.com",
  projectId: "contactform-3b6f0",
  storageBucket: "contactform-3b6f0.firebasestorage.app",
  messagingSenderId: "351259417109",
  appId: "1:351259417109:web:c459a3abc65fbba4278c1c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm");

// ===============================
// Contact Form Submission
// ===============================
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var mobileNumber = getElementVal("mobileNumber");
  var location = getElementVal("location");
  var ewasteType = getElementVal("ewasteType");
  var weight = getElementVal("weight");
  var category = document.querySelector('input[name="category"]:checked');
  category = category ? category.value : "Not selected";

  // Validate weight before proceeding
  if (parseFloat(weight) < 10) {
    alert("Minimum weight should be 10 kg for pickup.");
    return;
  }

  saveMessages(name, emailid, msgContent, mobileNumber, location, ewasteType, weight, category);

  // Show success message
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Hide the form and show the tracking button
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("success-message").style.display = "block";
}

// Save message to Firebase
const saveMessages = (name, emailid, msgContent, mobileNumber, location, ewasteType, weight, category) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    mobileNumber: mobileNumber,
    location: location,
    ewasteType: ewasteType,
    weight: weight,
    category: category,
  });
};

// Get input field value by ID
const getElementVal = (id) => {
  return document.getElementById(id)?.value || "";
};


// ===============================
// E-Waste Form Submission (Success Message)
// ===============================
document.getElementById("ewaste-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Simulate form submission process (AJAX can be added for backend integration)
  setTimeout(() => {
      document.getElementById("ewaste-form").style.display = "none"; // Hide the form
      document.getElementById("success-message").style.display = "block"; // Show success message and button
  }, 1000);
});
