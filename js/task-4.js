const form = document.querySelector('.login-form');

const formSubmitHandler = event => {
  event.preventDefault();

  const { email, password } = form.elements;

  if (!email.value || !password.value) {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(data);

  form.reset();
};

form.addEventListener('submit', formSubmitHandler);
