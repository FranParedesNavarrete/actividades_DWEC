let persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero',
    presentarse() {
        return 'Hola, soy ' + persona.nombre + ', ' + persona.edad + ' años de profesión ' + persona.profesion;
    },

    cumplirAnios() {
        this.edad++;
    }
};

persona.cumplirAnios();

console.log(persona.presentarse());