console.log("EJERCICIO 1 - Padawan Frida Gabriela Geyne Marín");

const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

ejercicio1.forEach( (num) => {
  let divisorestotales = 0;

  for (let divisor = 1; divisor <= num; divisor++){
    if (num % divisor === 0) {
      divisorestotales++;
    };
  };

  if (divisorestotales === 2) {
    console.log(`El numero ${num} es primo`);
  }; 
} );

console.log(" ");


console.log("EJERCICIO 2 - Padawan Frida Gabriela Geyne Marín");

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

ejercicio2.forEach( (asistente) => {
  if (asistente.edad >= 18 && asistente.esFamiliar === true){
    console.log(`${asistente.nombre} es bienvenidx a la fiesta de Ramón`);
  };
} );

console.log(" ");

console.log("EJERCICIO 3 - Padawan Frida Gabriela Geyne Marín");

function fibonacci () {
  let posicion1 = 0;
  let posicion2 = 1;
  let posicion3 = 0;
  console.log(`${posicion2}`);
  for ( let sucesor = 0; sucesor <= 50; sucesor++ ) {
    posicion3 = posicion1 + posicion2;
    posicion1 = posicion2;
    posicion2 = posicion3;
    console.log(`${posicion3}`);
  };
};
fibonacci();