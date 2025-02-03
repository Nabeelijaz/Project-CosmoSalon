document.addEventListener("DOMContentLoaded", function () {
  // Function to create and append new elements to the form dynamically
  function createAppointmentPopup() {
    const appointmentPopup = document.createElement("div");
    appointmentPopup.id = "appointmentPopup";

    const closeButton = document.createElement("i");
    closeButton.classList.add("bi", "bi-x");
    closeButton.id = "appointmentPopupClose";

    const header = document.createElement("div");
    header.classList.add("text-center", "mb-4");
    const headerTitle = document.createElement("h2");
    headerTitle.classList.add("fw-bold");
    headerTitle.textContent = "Book your appointment now";
    header.appendChild(headerTitle);

    const progress = document.createElement("div");
    progress.classList.add("progress", "mb-4", "gap-1");

    const progressBars = [
      "1. Services",
      "2. Cart",
      "3. Personal Details",
      "4. Payment",
      "5. Done",
    ];
    progressBars.forEach((text, index) => {
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      if (index === 0) progressBar.classList.add("isactive");
      progressBar.textContent = text;
      progress.appendChild(progressBar);
    });

    const serviceForm = document.createElement("form");

    const row1 = document.createElement("div");
    row1.classList.add("row");

    const formFields = [
      {
        label: "Location",
        id: "location",
        options: [
          "Select location",
          "Cosmo Salon MM Alam",
          "Cosmo Salon PIA",
          "Cosmo Salon Iqbal Town",
          "Cosmo Salon Dha Phase 3",
        ],
      },
      {
        label: "Gender",
        id: "gender",
        options: ["Select gender", "Men", "Women", "Uncategorized"],
      },
      {
        label: "Service",
        id: "service",
        options: [
          "Select service",
          "Haircut",
          "Hair Coloring",
          "Manicure",
          "Pedicure",
          "Facial",
        ],
      },
      {
        label: "Staff",
        id: "staff",
        options: [
          "Any",
          "Faraz",
          "Ziyafat",
          "Shahbaz",
          "Suneel",
          "John",
          "Suraj",
          "Jonty",
          "Ali",
        ],
      },
    ];

    formFields.forEach((field) => {
      const col = document.createElement("div");
      col.classList.add("col-md-3");
      const formGroup = document.createElement("div");
      formGroup.classList.add("form-group");

      const label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.label;

      const select = document.createElement("select");
      select.classList.add("form-control", "mt-2");
      select.id = field.id;

      field.options.forEach((optionText) => {
        const option = document.createElement("option");
        option.value =
          optionText === "Select location"
            ? "0"
            : optionText === "Select gender"
            ? "0"
            : optionText === "Select service"
            ? "0"
            : optionText === "Any"
            ? "0"
            : optionText;
        option.textContent = optionText;
        select.appendChild(option);
      });

      formGroup.appendChild(label);
      formGroup.appendChild(select);
      col.appendChild(formGroup);
      row1.appendChild(col);
    });

    // Add row1 to the form
    serviceForm.appendChild(row1);

    // Add second row for available days and date selection
    const row2 = document.createElement("div");
    row2.classList.add("row");

    const dateCol = document.createElement("div");
    dateCol.classList.add("col-md-4");
    const dateGroup = document.createElement("div");
    dateGroup.classList.add("form-group");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "available-date");
    dateLabel.textContent = "I'm available on or after";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("form-control", "mt-2");
    dateInput.id = "available-date";

    dateGroup.appendChild(dateLabel);
    dateGroup.appendChild(dateInput);
    dateCol.appendChild(dateGroup);

    const daysCol = document.createElement("div");
    daysCol.classList.add("col-md-6");
    const daysGroup = document.createElement("div");
    daysGroup.classList.add("form-group");

    const daysLabel = document.createElement("label");
    daysLabel.textContent = "Available Days";

    const daysWrapper = document.createElement("div");
    daysWrapper.classList.add("d-flex", "flex-wrap", "mt-2");

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    days.forEach((day, index) => {
      const dayCheck = document.createElement("div");
      dayCheck.classList.add("form-check", "me-3");

      const checkbox = document.createElement("input");
      checkbox.classList.add("form-check-input");
      checkbox.type = "checkbox";
      checkbox.value = (index + 1).toString();
      checkbox.id = day.toLowerCase();

      const checkboxLabel = document.createElement("label");
      checkboxLabel.classList.add("form-check-label");
      checkboxLabel.setAttribute("for", day.toLowerCase());
      checkboxLabel.textContent = day;

      dayCheck.appendChild(checkbox);
      dayCheck.appendChild(checkboxLabel);
      daysWrapper.appendChild(dayCheck);
    });

    daysGroup.appendChild(daysLabel);
    daysGroup.appendChild(daysWrapper);
    daysCol.appendChild(daysGroup);

    row2.appendChild(dateCol);
    row2.appendChild(daysCol);

    serviceForm.appendChild(row2);

    // Add row for start and end times
    const row3 = document.createElement("div");
    row3.classList.add("row");

    const timeFields = [
      {
        label: "Start from",
        id: "start-time",
        options: ["1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"],
        selected: "1:00 pm",
      },
      {
        label: "Finish by",
        id: "end-time",
        options: ["1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "11:00 pm"],
        selected: "11:00 pm",
      },
    ];

    timeFields.forEach((field) => {
      const col = document.createElement("div");
      col.classList.add("col-md-3");
      const formGroup = document.createElement("div");
      formGroup.classList.add("form-group");

      const label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.label;

      const select = document.createElement("select");
      select.classList.add("form-control", "mt-2");
      select.id = field.id;

      field.options.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        if (optionText === field.selected) {
          option.selected = true;
        }
        select.appendChild(option);
      });

      formGroup.appendChild(label);
      formGroup.appendChild(select);
      col.appendChild(formGroup);
      row3.appendChild(col);
    });

    serviceForm.appendChild(row3);

    // Add form to the popup
    appointmentPopup.appendChild(closeButton);
    appointmentPopup.appendChild(header);
    appointmentPopup.appendChild(progress);
    appointmentPopup.appendChild(serviceForm);

    // Append the form to the body (or wherever needed)
    document.body.appendChild(appointmentPopup);

    // Add event listener to close button
    closeButton.addEventListener("click", function () {
      appointmentPopup.remove();
    });
  }

  // Call the function to create and append the appointment form
  createAppointmentPopup();
});

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
