const PopUp = document.querySelector(".popups");
const loginPopUpBtn = document.querySelector(".login_btn");
const closePopUp = document.getElementById("close_popups");

// login and register popups function

loginPopUpBtn.addEventListener("click", function () {
  PopUp.classList.add("active");
});

closePopUp.addEventListener("click", function () {
  PopUp.classList.remove("active");
});
