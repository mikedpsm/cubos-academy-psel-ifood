function solucao(sequencia) {
    let indice = 0;

    for (let i = 0; i < sequencia.length; i++) {
        if ((indice === 6) && (sequencia[i] === ">")) {
            indice = 0;
        } else if ((indice === 0) && (sequencia[i] === "<")) {
            indice = 6;
        } else if (sequencia[i] === ">") {
            indice += 1;
        } else if (sequencia[i] === "<") {
            indice -= 1;
        }
    }

    console.log(indice);
}