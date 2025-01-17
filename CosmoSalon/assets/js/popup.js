// Appointment Popup
const appointmentPopup = document.getElementById("appointmentPopup");
const appointmentPopupOpen = document.getElementById("appointmentPopupOpen");
const appointmentPopupClose = document.getElementById("appointmentPopupClose");

appointmentPopupOpen.addEventListener("click", function () {
  appointmentPopup.style.display = "block";
  // appointmentPopup.innerHTML = `test`;
});

appointmentPopupClose.addEventListener("click", function () {
  if (appointmentPopup.style.display === "block") {
    appointmentPopup.style.display = "none";
  }
});
