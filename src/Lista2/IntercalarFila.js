import Fila from "../Fila"

class IntercalarFila{

    constructor(size = 10){
        this.aux = new Fila(size);
    }

    intercalarFila(fila1, fila2){
        while(fila1.size() > 0 ){
            this.aux.enqueue(fila1.dequeue())
            this.aux.enqueue(fila2.dequeue())
        }
        return this.aux.toString()
    }

}
export default IntercalarFila