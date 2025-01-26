const images = [
  "../images/image.png",
  "../images/image1.png",
  "../images/image2.png",
  "../images/image3.png",
];
let currentIndex = 0;

const imgSlider = document.querySelector(".imgslider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

function changeBackground(index) {
  imgSlider.style.backgroundImage = `url("${images[index]}")`;
  console.log(images[index]);
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeBackground(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  changeBackground(currentIndex);
});

changeBackground(currentIndex);

// ---------- FormData ----------

document
  .getElementById("nextStepButton")
  .addEventListener("click", function () {
    let isValid = true;

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((el) => (el.style.display = "none"));

    const location = document.getElementById("location");
    if (location.value === "0") {
      document.getElementById("location-error").style.display = "block";
      isValid = false;
    }

    const gender = document.getElementById("gender");
    if (gender.value === "0") {
      document.getElementById("gender-error").style.display = "block";
      isValid = false;
    }

    const service = document.getElementById("service");
    if (service.value === "0") {
      document.getElementById("service-error").style.display = "block";
      isValid = false;
    }

    const staff = document.getElementById("staff");
    if (staff.value === "0") {
      document.getElementById("staff-error").style.display = "block";
      isValid = false;
    }

    const availableDate = document.getElementById("available-date");
    if (!availableDate.value) {
      document.getElementById("available-date-error").style.display = "block";
      isValid = false;
    }

    const startTime = document.getElementById("start-time");
    if (!startTime.value) {
      document.getElementById("start-time-error").style.display = "block";
      isValid = false;
    }

    const endTime = document.getElementById("end-time");
    if (!endTime.value) {
      document.getElementById("end-time-error").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      document.getElementById("formStep1").innerHTML = `  `;

      document.getElementById("progress-1").classList.remove("isactive");
      document.getElementById("progress-2").classList.add("isactive");
    }
  });
