function solucao(primeiraLetra, segundaLetra, palavras) {
    let contador = 0;
    let arr = [];
    let temp;
    for (let i = 0; i < palavras.length; i++) {
        temp = palavras[i];
        if (temp[0] === primeiraLetra && temp[1] === segundaLetra) {
            let pusher = arr.push(palavras[i]);
            contador++;
        }
    }
    if (contador === 0) {
        console.log("NENHUMA");
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}