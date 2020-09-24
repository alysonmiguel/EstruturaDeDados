import Fila from "../Fila";

class PilhaComFila{

    constructor(){
        this.fila = new Fila();
        this.fila2 = new Fila();
    }

    push(dado){
        while (this.fila.size() > 0) {
            this.fila2.enqueue(this.fila.dequeue());
        }
        this.fila.enqueue(dado);
        while (this.fila2.size() > 0) {
            this.fila.enqueue(this.fila2.dequeue());
        }
    }

    pop(){
        return this.fila.dequeue();
    }

    top(){
        return this.fila.front();
    }

    clear(){
        this.fila.clear();
    }

    size(){
       return this.fila.size();
    }

    isEmpty(){
       return this.fila.isEmpty();
    }

    isFull(){
        return this.fila.isFull();
    }

    toString(){
        return this.fila.toString();
    }

}

export default PilhaComFila;