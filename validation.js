const email = document.getElementById('email');
const emailMessage = document.getElementById('emailMessage');
const emailREGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

function myFunc() {
  if (emailREGEX.test(email.value)) {
    emailMessage.innerHTML = 'Email is correct';
    emailMessage.style.display = 'block';
  }
  else {
    emailMessage.innerHTML = 'Please enter valid email in lowercase';
    emailMessage.style.display = 'block';
    return false;
  }
}