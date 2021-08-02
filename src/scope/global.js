//scope global
var hello = "Hello";
var hello = "Hello +"; // (VAR) se puede modificar su valor pero es una mala practica.
let world = "Hello world";
//let world = "Hello"; cuando a esta asiganado el valor a (LET) y (CONST) no podremos reasignar este valor.
const helloWorld = "Hello world!!";
//console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();
