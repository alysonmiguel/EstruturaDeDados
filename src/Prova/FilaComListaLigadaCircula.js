import ListaLigadaCircula from "./ListaLigadaCircula"

class FilaComListaLigadaCircula{
    constructor(){
        this.listaCircula = new ListaLigadaCircula
    }

    enqueue(dado){
        this.listaCircula.append(dado)
    }
    dequeue(){
        return this.listaCircula.removeFrist();
    }

    isEmpty(){
        return this.listaCircula.isEmpty();
    }

    toString(){
        return this.listaCircula.toString();
    }

}
export default FilaComListaLigadaCircula