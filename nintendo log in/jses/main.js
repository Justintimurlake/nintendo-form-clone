const form = document.getElementById("formR");
const username = document.getElementById("usernameR");
const email = document.getElementById("emailR");
const password = document.getElementById("passwordR");
const password2 = document.getElementById("passwordR2");
const day = document.querySelector(".dayR");
const month = document.querySelector(".monthR");
const year = document.querySelector(".yearR");
const gender = document.getElementById("genderR");
const country = document.getElementById("countryR");
const promo = document.getElementById("promoR");
const zip = document.getElementById("zipR");
const conferm = document.querySelector(".confermR");
const btn = document.getElementById("btnR");
const eye = document.querySelector(".fa-eye");
const eyeSlash = document.querySelector(".fa-eye-slash");
const formControlSelect = document.querySelector(".formR-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const zipValue = zip.value.trim();
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;
  const genderValue = gender.value;
  const countryValue = country.value;
  const confermValue = conferm.checked;

  if (confermValue === false) {
    setErrorForConferm(
      conferm,
      "You have to agree with the Nintendo Account User Agreement"
    );
  } else {
    setSuccessForConferm(conferm);
  }

  if (countryValue === "") {
    setErrorFor(country, "Choose your country");
  } else {
    setSuccessFor(country);
  }

  if (genderValue === "") {
    setErrorFor(gender, "Choose your gender");
  } else {
    setSuccessFor(gender);
  }

  if (dayValue === "") {
    setErrorForDay(day, "Select a day");
  } else {
    setSuccessForDay(day);
  }
  if (monthValue === "") {
    setErrorForMonth(month, "Select a month");
  } else {
    setSuccessForMonth(month);
  }
  if (yearValue === "") {
    setErrorForYear(year, "Select an year");
  } else {
    setSuccessForYear(year);
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (!isUsername(usernameValue)) {
    setErrorFor(
      username,
      "The username has to be > or = 10 charaxters"
    );
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      password,
      "Has to be more than 8 characters, one or more letter(s), number(s) &  special characters"
    );
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Confirm password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }

  if (zipValue === "") {
    setErrorFor(zip, "Zip cannot be blank");
  } else if (!isZip(zipValue)) {
    setErrorFor(zip, "Digits only");
  } else {
    setSuccessFor(zip);
  }

  if (
    usernameValue === "" ||
    emailValue === "" ||
    passwordValue === "" ||
    password2Value === "" ||
    passwordValue !== password2Value ||
    !isPassword(passwordValue) ||
    !isEmail(emailValue) ||
    yearValue === "" ||
    monthValue === "" ||
    dayValue === "" ||
    genderValue === "" ||
    countryValue === "" ||
    confermValue === false
  ) {
    btn.style.backgroundColor = "red";
    btn.style.border = "2px solid red";
  } else {
    btn.style.backgroundColor = "green";
    btn.style.border = "2px solid green";
    location.href = "./email-registration.html";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const formCont = input;
  const small = formControl.querySelector(".smallR-error");
  formCont.classList = "error-registration";
  small.innerText = message;
  small.style.display = "block";
}

function setSuccessFor(input) {
  const formControl = input;
  formControl.classList = "success-registration ";
  const inputForSucceses = input.parentElement;
  const smaller = inputForSucceses.querySelector(".smallR-error");
  smaller.style.display = "none";
}

function setErrorForDay(input, message) {
  const formCont = input;
  const small = document.querySelector(".smallR-day");
  formCont.classList = "error-registration";
  small.innerText = message;
  small.style.display = "block";
}

function setSuccessForDay(input) {
  const formControl = input;
  formControl.classList = "success-registration ";
  const smaller = document.querySelector(".smallR-day");
  smaller.style.display = "none";
}

function setErrorForMonth(input, message) {
  const formCont = input;
  const small = document.querySelector(".smallR-month");
  formCont.classList = "error-registration";
  small.innerText = message;
  small.style.display = "block";
}

function setSuccessForMonth(input) {
  const formControl = input;
  formControl.classList = "success-registration ";
  const smaller = document.querySelector(".smallR-month");
  smaller.style.display = "none";
}
function setErrorForYear(input, message) {
  const formCont = input;
  const small = document.querySelector(".smallR-year");
  formCont.classList = "error-registration";
  small.innerText = message;
  small.style.display = "block";
}

function setSuccessForYear(input) {
  const formControl = input;
  formControl.classList = "success-registration ";
  const smaller = document.querySelector(".smallR-year");
  smaller.style.display = "none";
}

function setErrorForConferm(input, message) {
  const small = document.querySelector(".smallR-conferm");
  small.innerText = message;
  small.style.display = "block";
  small.style.paddingLeft = "20px";
}

function setSuccessForConferm(input) {
  const smaller = document.querySelector(".smallR-conferm");
  smaller.style.display = "none";
}

function isPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isUsername(username) {
  return /^(.{1,10})$/.test(username);
}
function isZip(zip) {
  return /^[0-9]/.test(zip);
}

eyeSlash.addEventListener("click", (e) => {
  const type =
    password.getAttribute("type") === "password"
      ? "text"
      : "password";
  password.setAttribute("type", type);
  const type2 =
    password2.getAttribute("type") === "password"
      ? "text"
      : "password";
  password2.setAttribute("type", type2);
  eyeSlash.style.display = "none";
  eye.style.display = "block";
});
eye.addEventListener("click", (e) => {
  const type =
    password.getAttribute("type") === "password"
      ? "text"
      : "password";
  password2.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  const type2 =
    password2.getAttribute("type") === "password"
      ? "text"
      : "password";
  password2.setAttribute("type", type2);
  eye.style.display = "none";
  eyeSlash.style.display = "block";
});
