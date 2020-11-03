let array = [1,2,3,4,5,6,7,8];

function buscaBinaria(chave, dados){

    let esquerda = -1;
    let direita = dados.length;

    while(esquerda < direita-1){
        let meio = Math.floor((esquerda + direita)/2);
        if (dados[meio] < chave) {
            esquerda = meio;
        }else{ 
            direita = meio;
        }
    }
    return dados[direita];
}

console.log(buscaBinaria(2, array));