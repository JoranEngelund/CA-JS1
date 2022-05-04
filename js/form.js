// Level 1 Process
const form = document.querySelector(".contactForm");
const inputName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const validationMessage = document.querySelector("#validationMessage");

function lengthChecker(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function formValidation(event) {
  if (lengthChecker(inputName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (lengthChecker(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (lengthChecker(address.value, 19) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (emailValidator(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  event.preventDefault();
}

form.addEventListener("submit", formValidation);

function emailValidator(email) {
  const regEx = /\S+@\S+.\S+/;
  const pattern = regEx.test(email);
  return pattern;
}
