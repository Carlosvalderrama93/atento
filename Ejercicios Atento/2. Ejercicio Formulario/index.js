const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const correo = formData.get("correo").trim();
  const nombre = formData.get("nombre").trim();
  const apellidos = formData.get("apellidos").trim();
  let error = "";
  let message = `Hola ${nombre} ${apellidos}, te has registrado con el correo ${correo}`;

  for (const [name, value] of formData.entries()) {
    if (value.trim() === "") {
      error += `${name} `;
    }
  }
  if (error) {
    message = `Estos datos han sido mal ingresados: ${error}. por favor ingresarlos nuevamente`;
  } else {
    form.reset();
  }

  alert(message);
});
