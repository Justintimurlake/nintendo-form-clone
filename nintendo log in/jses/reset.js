const formReset = document.getElementById("form-reset");
const emailReset = document.getElementById("email-reset");
const btnReset = document.querySelector(".btn-reset");
const errowReset = document.querySelector(".errow-email-reset");
btnReset.addEventListener("click", () => {
  formReset.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputsReset();
  });

  function checkInputsReset() {
    const emailResetValue = emailReset.value.trim();

    if (emailResetValue === "") {
      setErrorForReset(emailReset, "Email cannot be blank");
    } else if (!isEmailReset(emailResetValue)) {
      setErrorForReset(emailReset, "Not a valid email");
    } else {
      setSuccessForReset(emailReset);
    }

    function setErrorForReset(input, message) {
      const formControlReset = input.parentElement;
      const smallReset = formControlReset.querySelector(
        ".errow-email-reset"
      );
      emailReset.className = "email-reset errow-email__reset ";
      smallReset.innerText = message;
    }

    function setSuccessForReset(input) {
      const formControl = input.parentElement;
      emailReset.className = "email-reset  sucesse-email__reset";
      location.href = "../index.html";
    }

    function isEmailReset(emailReset) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailReset
      );
    }
  }
});
