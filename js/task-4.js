document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = event.target.elements.email.value.trim();
  const passwordInput = event.target.elements.password.value.trim();

  if (!emailInput || !passwordInput) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailInput,
    password: passwordInput
  };

  console.log(formData);

  event.target.reset(); 
});
