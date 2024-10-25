let combinacion = new Array();

for (let i = 0; i < 50; i++) {
    combinacion = new Array()
    let numRandom = Math.floor(Math.random() * 49) + 1;

    for (let j = 0; j < 5; j++) {
        do {
            numRandom = Math.floor(Math.random() * 49) + 1;

        } while (combinacion.some(function(num) {
            return num == numRandom;
        }))
        combinacion.push(numRandom);

    }

    console.log(combinacion);
}

