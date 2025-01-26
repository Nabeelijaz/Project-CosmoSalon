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
      const formattedDate = new Date(availableDate.value).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      document.getElementById("formStep1").innerHTML = `
      <div class="container mt-4">
        <p>Below you can find a list of services selected for booking.<p></p> Click <strong>BOOK MORE</strong> if you want to add more services.</p>
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Employee</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${service.options[service.selectedIndex].text}</td>
              <td>${formattedDate}</td>
              <td>${startTime.value} - ${endTime.value}</td>
              <td>${staff.options[staff.selectedIndex].text}</td>
              <td>Rs.250</td>
              <td class="bookly-rtext bookly-nowrap bookly-js-actions">
                <button class="bookly-round" data-action="edit" title="Edit" data-style="zoom-in" data-spinner-size="30">
                  <span class="ladda-label"><i class="bookly-icon-sm bookly-icon-edit"></i></span>
                </button>
                <button class="bookly-round" data-action="drop" title="Remove" data-style="zoom-in" data-spinner-size="30">
                  <span class="ladda-label"><i class="bookly-icon-sm bookly-icon-drop"></i></span>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Subtotal:</strong></td>
              <td></td>
              <td></td>
              <td></td>
              <td><strong>Rs.250</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Total:</strong></td>
              <td></td>
              <td></td>
              <td></td>
              <td><strong>Rs.250</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
    
        <!-- Buttons row -->
        <div class="row">
          <!-- "Back" button on the left -->
          <div class="col-md-6">
            <button type="button" id="Backbutton" class="btn btn-next">
              Back <i class="bi bi-arrow-left"></i>
            </button>
          </div>
    
          <!-- "Book More" and "Next" buttons on the right -->
          <div class="col-md-6 text-right">
            <button type="button" id="nextStepButton" class="btn btn-next">
              Next <i class="bi bi-arrow-right"></i>
            </button>
            <button type="button" id="bookMoreButton" class="btn btn-next">
              Book More 
            </button>
          
          </div>
        </div>
      </div>
    `;

      document.getElementById("progress-1").classList.remove("isactive");
      document.getElementById("progress-2").classList.add("isactive");
    }
  });
