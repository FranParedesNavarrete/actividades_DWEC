function Libro (titulo, autor, paginas, añoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.añoPublicacion = añoPublicacion;
}

let newLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 417, 1967);

for (let prop in newLibro) {
    console.log(prop + ': ' + newLibro[prop]);
}