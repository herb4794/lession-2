var $grid = $(".collection-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $(".filter-button-group").find("button");

function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}

// Login page
const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwFields) => {
      if (pwFields.type === "password") {
        pwFields.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwFields.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

signUp.addEventListener("click", () => {
  container.classList.add("active");
});

login.addEventListener("click", (i) => {
  container.classList.remove("active");
});

// Login & Registration function

const mRegistrationForm = document.getElementById("form");
const mLoginForm = document.getElementById("loginform");
const mRegistrationUsername = document.getElementById("username");
const mRegistrationEmail = document.getElementById("email");
const mRegistrationPassword = document.getElementById("password");
const mRegistrationConfirmPasswords = document.getElementById("confirmPassword");
const mLoginEmail = document.getElementById("loginEmail");
const mLoginPassword = document.getElementById("loginPassword");
let errorCode = 0;
let loginErrorCode = 0;

mRegistrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const registrationUsername = document.getElementById("username").value;
  const registrationEmail = document.getElementById("email").value;
  const registrationPassword = document.getElementById("password").value;

  checkRegistration();

  if (errorCode == 4) {
    const user = {
      registrationUsername: registrationUsername,
      registrationEmail: registrationEmail,
      registrationPassword: registrationPassword,
    };
    const json = JSON.stringify(user);
    localStorage.setItem(registrationEmail, json);
    console.log("user added");
  }
});

mLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const userInfo = localStorage.getItem(loginEmail);
  const userData = JSON.parse(userInfo);

  checkLoginStatus();
  if (loginErrorCode == 2) {
    if (loginEmail == userData.registrationEmail && loginPassword == userData.registrationPassword) {
      window.location = "http://localhost:1234/index.html";
      console.log(userData);
    }
  }
});

function checkRegistration() {
  const getRegistrationUsernameValue = mRegistrationUsername.value.trim();
  const getRegistrationEmailValue = mRegistrationEmail.value.trim();
  const getRegistrationPasswordValue = mRegistrationPassword.value.trim();
  const getRegistrationConfirmPasswordValue =mRegistrationConfirmPasswords.value.trim();

  if (getRegistrationUsernameValue === "") {
    setErrorFor(mRegistrationUsername, "Username cannot be blank");
  } else {
    setSuccessFor(mRegistrationUsername);
    errorCode = 1;
  }

  if (getRegistrationEmailValue === "") {
    setErrorFor(mRegistrationEmail, "Email cannot be blank");
  } else if (!isEmail(getRegistrationEmailValue)) {
    setErrorFor(mRegistrationEmail, "Not a valid email");
  } else {
    setSuccessFor(mRegistrationEmail);
    errorCode = 2;
  }

  if (getRegistrationPasswordValue === "") {
    setErrorFor(mRegistrationPassword, "Password cannot be blank");
  } else {
    setSuccessFor(mRegistrationPassword);
    errorCode = 3;
  }

  if (getRegistrationConfirmPasswordValue === "") {
    setErrorFor(
      mRegistrationConfirmPasswords,
      "Please confirm you password again"
    );
  } else if (
    getRegistrationPasswordValue != getRegistrationConfirmPasswordValue
  ) {
    setErrorFor(mRegistrationConfirmPasswords, "Password does not match");
  } else {
    setSuccessFor(mRegistrationConfirmPasswords);
    errorCode = 4;
    console.log(errorCode);
  }
}

function checkLoginStatus() {
  const getLoginEmail = mLoginEmail.value.trim();
  const getLoginPassword = mLoginPassword.value.trim();

  if (getLoginEmail === "") {
    setErrorFor(loginEmail, "Wrong email");
  } else if (!isEmail(getLoginEmail)) {
    setErrorFor(loginEmail, "Not a valid email");
  } else {
    setSuccessFor(loginEmail);
    loginErrorCode = 1;
  }

  if (getLoginPassword === "") {
    setErrorFor(mLoginPassword, "Wrong password");
  } else {
    setSuccessFor(mLoginPassword);
    loginErrorCode = 2;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "input-field error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-field success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
