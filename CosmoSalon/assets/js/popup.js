// Appointment Popup
const appointmentPopup = document.getElementById("appointmentPopup");
const appointmentPopupOpen = document.getElementById("appointmentPopupOpen");
const appointmentPopupClose = document.getElementById("appointmentPopupClose");
console.log(appointmentPopup);

appointmentPopup.addEventListener("click", function () {
  appointmentPopupOpen.style.display = "block";
});

appointmentPopupClose.addEventListener("click", function () {
  if ((appointmentPopupOpen.style.display = "block")) {
    appointmentPopupOpen.style.display = "none";
  }
});
