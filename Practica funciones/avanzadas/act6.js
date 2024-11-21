const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad: 22 }, { nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ];

let resultado = personas.filter((persona) => persona.edad > 18).map((persona) => persona.edad * 2).reduce((acumulador, edad) => acumulador + edad);

console.log(resultado);