function mergeSort(vetor){
    let direita, esquerda;
    if(vetor.length > 1){
        let meio = Math.floor(vetor.length/2);
        esquerda = vetor.slice(0, meio);
        direita = vetor.slice(meio);   
    }else{
        return vetor;
    }
    return mescar(mergeSort(direita),mergeSort(esquerda)); 
}

function mescar(direita, esquerda){
    let vetorOrdenado = []; 
    let d = 0, e = 0; 
    while(d < direita.length && e < esquerda.length){ 
        if(esquerda[e] < direita[d]){ 
            vetorOrdenado.push(esquerda[e]);
            e++; 
        }else{
            vetorOrdenado.push(direita[d])
            d++;
        }
    }
    return vetorOrdenado.concat(esquerda.slice(e)).concat(direita.slice(d));
}

let vetor = [5,1,8,0,2,6,7,54,3,1];

console.log(mergeSort(vetor));



