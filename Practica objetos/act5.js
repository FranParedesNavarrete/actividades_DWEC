function Coche (marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.detalles =()=> `Marca: ${marca}, Modelo: ${modelo}, Año: ${año}`;
    this.encender =()=> `El coche ${marca} ${modelo} ha sido encendido`;
}

let coche1 = new Coche('Fiat', 'IDK', 2014);

console.log(coche1.encender());
