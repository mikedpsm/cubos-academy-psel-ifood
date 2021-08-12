function solucao(precos) {
    let total = 0;
    let limiar = false;
    for (let i = 0; i < precos.length; i++) {
        total += precos[i];
        if (precos[i] > 200) {
            limiar = true;
        }
    }
    if (limiar && total > 1000) {
        console.log("PREMIUM");
    } else if (total > 1000 && limiar === false) {
        console.log("VIP");
    } else {
        console.log("NORMAL");
    }
}