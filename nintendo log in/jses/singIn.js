const errowSingIn = document.querySelector(".errow-singIn");
const nameSingIn = document.querySelector("#name-singIn");
const passwordSingIn = document.querySelector("#password-singIn");
const btnSingIn = document.querySelector(".btn-singIn");
const formSingIn = document.querySelector(".form-singIn");

btnSingIn.addEventListener("click", () => {
  formSingIn.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputsSingIn();
  });

  function checkInputsSingIn() {
    const nameSingInValue = nameSingIn.value.trim();
    const passwordSingInValue = passwordSingIn.value.trim();

    if (nameSingInValue !== "" && passwordSingInValue !== "") {
      btnSingIn.style.backgroundColor = "#DF0000";
      btnSingIn.style.cursor = "pointer";
      errowSingIn.style.display = "block";
      errowSingIn.textContent =
        "The e-mail address/sign-in ID or password is incorrect.";
      // formSingIn.reset();
      passwordSingIn.value = "";
    }
  }
});
