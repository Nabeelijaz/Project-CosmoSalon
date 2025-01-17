// Appointment Popup
const appointmentPopup = document.getElementById("appointmentPopup");
const appointmentPopupOpen = document.getElementById("appointmentPopupOpen");
const appointmentPopupClose = document.getElementById("appointmentPopupClose");
const body = document.querySelector("body");

// Create overlay element
const overlay = document.createElement("div");
overlay.id = "overlay";
overlay.style.position = "fixed";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.display = "none";
console.log(overlay);

document.body.appendChild(overlay);

appointmentPopupOpen.addEventListener("click", function () {
  appointmentPopup.style.display = "block";
  overlay.style.display = "block";
});

appointmentPopupClose.addEventListener("click", function () {
  if (appointmentPopup.style.display === "block") {
    appointmentPopup.style.display = "none";
    overlay.style.display = "none";
  }
});
