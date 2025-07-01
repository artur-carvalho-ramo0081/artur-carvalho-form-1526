document.getElementById("submit-button").addEventListener("click", function () {
  const fullNameField = document.getElementById("fullname");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const feedback = document.getElementById("feedback");

  const fullName = fullNameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  feedback.innerHTML = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let data = {};
  let errors = {};

  [fullNameField, emailField, messageField].forEach(field => {
    field.classList.remove("error");
  });

  if (fullName !== "") {
    data.fullName = fullName;
  } else {
    errors.fn = "full name is missing";
    fullNameField.classList.add("error");
  }

  if (email !== "") {
    if (emailRegex.test(email)) {
      data.email = email;
    } else {
      errors.em = "email is invalid";
      emailField.classList.add("error");
    }
  } else {
    errors.em = "email is missing";
    emailField.classList.add("error");
  }

  if (message !== "") {
    data.message = message;
  } else {
    errors.msg = "message is missing";
    messageField.classList.add("error");
  }

  if (Object.keys(errors).length > 0) {
    console.error("errors", errors);
    feedback.innerHTML = "<strong>please correct the highlighted fields.</strong>";
  } else {
    console.log("collected data", data);
    feedback.textContent = "thank you for your message!";
    document.getElementById("contact-form").reset();
  }
});

["fullname", "email", "message"].forEach(id => {
  document.getElementById(id).addEventListener("input", function () {
    this.classList.remove("error");
  });
});