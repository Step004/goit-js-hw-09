const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const email = form.email.value;
  const message = form.message.value;
  return { email, message };
}
const rowData = localStorage.getItem(STORAGE_KEY);
if (rowData) {
  const data = JSON.parse(rowData);
  form.email.value = data.email.trim();
  form.message.value = data.message.trim();
}
function inputForm(event) {
  event.preventDefault();
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
}

function resetForm(event) {
  event.preventDefault();
  const rowData = localStorage.getItem(STORAGE_KEY);

  if (rowData) {
    console.log(rowData);
  }

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
form.addEventListener('input', inputForm);
form.addEventListener('submit', resetForm);
