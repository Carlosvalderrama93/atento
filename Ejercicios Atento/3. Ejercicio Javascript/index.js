const names = ["Maria", "Carlos", "Jose", "Luisa", "Martha"];

function printNames(names) {
  names.forEach((name) => {
    name === "Jose"
      ? console.log(`Bienvenido ${name}`)
      : console.log(`Hola ${name}`);
  });
}

printNames(names);