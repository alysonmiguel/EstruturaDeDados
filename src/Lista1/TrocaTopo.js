import Pilha from "../Pilha"

export default function TrocaTopo(pilha){

    let aux = new Pilha(pilha.maxSize)
    let final = new Pilha(pilha.maxSize)

    if(pilha.size() === 1 ){
        return pilha
    }else{

        final.push(pilha.pop())
        while(pilha.size() > 1){
            aux.push(pilha.pop());
        }
        while(aux.size() > 0){
            final.push(aux.pop());
        }
        final.push(pilha.pop())
        return final.toString()
    }
    

}