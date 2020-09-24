import Fila from "../../src/Fila"

class Deque{

    constructor(max = 10){
        this.fila1 = new Fila(max);
        this.fila2 = new Fila(max);
    }

    inverter(fila1, fila2){
        while(fila2.size() > 0){
            fila1.enqueue(fila2.dequeue())
        }
    }

    inserirInicio(dado){
        while(this.fila1.size() > 0){
            this.fila2.enqueue(this.fila1.dequeue())
        }
        this.fila1.enqueue(dado)
       this.inverter(this.fila1, this.fila2);
    }

    inserirFim(dado){
        this.fila1.enqueue(dado);
    }

    removerInicio(){
       return this.fila1.dequeue(); 
    }

    removerFim(){
        while(this.fila1.size() > 1){
            this.fila2.enqueue(this.fila1.dequeue())
        }
        let a = this.fila1.dequeue()
        this.inverter(this.fila1, this.fila2);
        return a
    }

}

export default Deque;