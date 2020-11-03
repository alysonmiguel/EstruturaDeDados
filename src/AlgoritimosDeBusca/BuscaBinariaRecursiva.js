let array = [1,2,3,4,5,6,7,8];

function buscaBinaria(chave, dados, esquerda, direita){
    // console.log(esquerda, direita);
    if(esquerda < direita-1){
        let meio = Math.floor((esquerda + direita)/2);
        if (dados[meio] < chave) {
            esquerda = meio;
            return  buscaBinaria(chave, dados, esquerda, direita)
        }else{ 
            direita = meio;
            return  buscaBinaria(chave, dados, esquerda, direita)
        }
    }
     return dados[direita];
}

console.log(buscaBinaria(2, array, -1, array.length));