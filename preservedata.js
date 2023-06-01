const sName = document.getElementById('name');
const sEmail = document.getElementById('email');
const sMessage = document.getElementById('message');

const saveName = () => {
  const inputData = {
    userName: sName.value,
    userEmail: sEmail.value,
    userMessage: sMessage.value,
  };
  localStorage.setItem('InputData', JSON.stringify(inputData));
};

const dataRetrieve = () => {
  const data = JSON.parse(localStorage.getItem('InputData'));
  if (data) {
    sName.value = data.userName;
    sEmail.value = data.userEmail;
    sMessage.value = data.userMessage;
  }
};

sName.addEventListener('change', saveName);
sEmail.addEventListener('change', saveName);
sMessage.addEventListener('change', saveName);

window.document.onload = dataRetrieve();