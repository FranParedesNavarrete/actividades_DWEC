function Coche (marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.detalles =()=> `Marca: ${marca}, Modelo: ${modelo}, Año: ${año}`;
}

let coche1 = new Coche('Fiat', 'IDK', 2014);
let coche2 = new Coche('Ford', 'Fiesta', 2010);

console.log(coche1.detalles());
console.log(coche2.detalles());
