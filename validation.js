const email = document.getElementById('email');
const emailMessage = document.getElementById('emailMessage');
const subMit = document.getElementById('form-ux');

subMit.addEventListener('submit', (e) => {
  if (/[A-Z]/.test(email.value)) {
    emailMessage.innerHTML = 'Enter email in lower cases charactors';
    emailMessage.style.display = 'block';
    e.preventDefault();
  }
});

subMit.addEventListener('keyup', () => {
  emailMessage.style.display = 'none';
});