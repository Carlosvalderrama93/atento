const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getData();
  printData(data);
});

function getData() {
  const correo = document.querySelector("#correo").value;
  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;
  const data = {
    correo,
    nombre,
    apellidos,
  };

  return data;
}

function printData(data) {
  alert(
    `Hola ${data.nombre} ${data.apellidos} te haz registrado con el correo ${data.correo}`
  );
}
