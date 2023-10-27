const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Ingresa Un Correo Electronico Valido!");
  } else {
    email.setCustomValidity("");
  }
});