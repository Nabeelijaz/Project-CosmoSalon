document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    let location = document.getElementById("location").value;
    let gender = document.getElementById("gender").value;
    let service = document.getElementById("service").value;
    let staff = document.getElementById("staff").value;
    let availableDate = document.getElementById("available-date").value;
    let startTime = document.getElementById("start-time").value;
    let endTime = document.getElementById("end-time").value;

    let daysChecked = document.querySelectorAll(".form-check-input:checked");

    if (location == "0") {
      alert("Please select a location");
      isValid = false;
    }
    if (gender == "0") {
      alert("Please select your gender");
      isValid = false;
    }
    if (service == "0") {
      alert("Please select a service");
      isValid = false;
    }
    if (staff == "0") {
      alert("Please select a staff member");
      isValid = false;
    }
    if (!availableDate) {
      alert("Please select an available date");
      isValid = false;
    }
    if (daysChecked.length === 0) {
      alert("Please select at least one available day");
      isValid = false;
    }
    if (!startTime) {
      alert("Please select a start time");
      isValid = false;
    }
    if (!endTime) {
      alert("Please select an end time");
      isValid = false;
    }
    if (startTime >= endTime) {
      alert("Start time must be before end time");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });
});

const images = [
  "https://cosmosalon.pk/wp-content/uploads/2023/05/gome-page-1.jpg",
  "https://cosmosalon.pk/wp-content/uploads/2023/05/home-page-23-1.jpg",
];

let currentIndex = 0;
const imgSlider = document.querySelector(".imgslider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

imgSlider.style.backgroundImage = `url(${images[currentIndex]})`;

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imgSlider.style.backgroundImage = `url(${images[currentIndex]})`;
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imgSlider.style.backgroundImage = `url(${images[currentIndex]})`;
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  imgSlider.style.backgroundImage = `url(${images[currentIndex]})`;
}, 10000);
