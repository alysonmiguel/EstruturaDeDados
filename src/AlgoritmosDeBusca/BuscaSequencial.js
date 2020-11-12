let array = [1,2,3,4,5,6,7,8,9];

function buscaSequencial(chave, dados){
    for (let i = 0; i < dados.length; i++) {
        if(dados[i] == chave) {
            return dados[i]
        }
    }
    return -1;
}

function buscaSequencialSentinela(chave, dados){

    let tam = dados.length;
    dados[tam] = chave;
    let i;
    for (i = 0; chave != dados[i]; i++) {}

    if(dados[i] == chave && i!= tam) {
        return dados[i]
    }

    return -1;
}
console.log(buscaSequencial(12, array));
console.log(buscaSequencial(5, array));
console.log(buscaSequencialSentinela(2, array));