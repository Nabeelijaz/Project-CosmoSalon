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

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  const location = document.getElementById("location").value;
  const gender = document.getElementById("gender").value;
  const service = document.getElementById("service").value;
  const availableDate = document.getElementById("available-date").value;
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;

  if (location == "0") {
    isValid = false;
    alert("Please select a location.");
  }
  if (gender == "0") {
    isValid = false;
    alert("Please select a gender.");
  }
  if (service == "0") {
    isValid = false;
    alert("Please select a service.");
  }
  if (availableDate == "") {
    isValid = false;
    alert("Please select an available date.");
  }
  if (startTime == "" || endTime == "") {
    isValid = false;
    alert("Please select valid start and end times.");
  }

  if (isValid) {
    alert("Form is valid. Proceeding to the next step.");
  }
});
