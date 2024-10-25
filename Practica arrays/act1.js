let combinacion = [];

for (let i = 0; i < 50; i++) {
    let numRandom = (Math.random() * 49) + 1;

    for (let j = 0; j < 5; j++) {
        do {
            numRandom = (Math.random() * 49) + 1;

        } while (combinacion.some(function(num) {
            return num == numRandom;
        }))
            
        combinacion[i].push(numRandom);
    }
    console.log(combinacion)
}

