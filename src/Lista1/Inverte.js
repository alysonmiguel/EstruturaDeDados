import Pilha from "../Pilha";

export default function Inverte(palavra){

    let pilhaAux = new Pilha()
    while(!palavra.isEmpty()){
        pilhaAux.push(palavra.pop());
    }
    return pilhaAux.toString()

}
