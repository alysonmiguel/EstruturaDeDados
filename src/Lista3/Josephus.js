import Lista from "../Lista";

export default function escolherPosicao(remocaoSaldado, qtdSoldado){

    let lista = new Lista();
    let anterior = lista.head;
    let atual = lista.head.proximo;
    let i = 1;  
    
    if(remocaoSaldado == 1){
        return qtdSoldado;
    }

    for (let i = 1; i <= qtdSoldado;  i++) {
        lista.append(i);
    }

    while (lista.size() != 1){
        while(atual != null){
            if(i == remocaoSaldado){
                let tem = atual.dado;
                atual = atual.proximo;
                lista.removeDado(tem);
                i = 1;
            }else{   
                anterior = atual;
				atual = atual.proximo;
                i++
            }            
        }
        atual = lista.head.proximo;
    }
    return atual.dado;
}