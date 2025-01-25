const images = [
  "file:///C:/Users/MMT/Desktop/Project%20Web%20Technologies/CosmoSalon/assets/images/image.png",
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
