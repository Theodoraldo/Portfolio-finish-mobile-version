const email = document.getElementById('email');
const emailInput = document.querySelector("small");

function validateLowerChar() {
  const EMAIL_REGEX_L = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

  if (email.value === '') {
    emailInput.style.display = "none";
  }
  else {
    if (!EMAIL_REGEX_L.test(email.value)) {
      emailInput.innerHTML = 'Please enter valid email in lowercase';
      emailInput.style.display = "block";
    }
    else {
      //Do nothing
    }
  }
}

function dismiss() {
  emailInput.style.display = "none";
}