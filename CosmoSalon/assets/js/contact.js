function validateForm(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName");
  let subject = document.getElementById("subject");
  let description = document.getElementById("description");
  let phone = document.getElementById("phone");
  let isValid = true;

  if (fullName.value.trim() === "") {
    setError(fullName, "Full Name is required!");
    isValid = false;
  } else {
    clearError(fullName);
  }

  if (subject.value.trim() === "") {
    setError(subject, "Subject is required!");
    isValid = false;
  } else {
    clearError(subject);
  }

  if (description.value.trim().length < 10) {
    setError(description, "Description must be at least 10 characters!");
    isValid = false;
  } else {
    clearError(description);
  }

  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone.value.trim())) {
    setError(phone, "Enter a valid 10-digit phone number!");
    isValid = false;
  } else {
    clearError(phone);
  }

  if (isValid) {
    alert("Form submitted successfully! Thank you for Contact Me!");
    document.getElementById("contactForm").submit();
  }
}

function setError(input, message) {
  let parent = input.parentElement;
  let errorMsg = parent.querySelector(".text-danger");
  errorMsg.innerText = message;
  input.classList.add("is-invalid");
}

function clearError(input) {
  let parent = input.parentElement;
  let errorMsg = parent.querySelector(".text-danger");
  errorMsg.innerText = "";
  input.classList.remove("is-invalid");
}
