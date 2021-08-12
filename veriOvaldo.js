function solucao(obras) {
    let bigBang = obras[0];
    for (let i = 0; i < obras.length; i++) {
        if (bigBang.valor < obras[i].valor) {
            bigBang = obras[i];
        }
    }
    console.log(bigBang.nome);
}