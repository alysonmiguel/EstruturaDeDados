
push(newData) {
    if (this.isFull()) {
        throw new Error("Overflow");
    }else{
        this.dados[++this.topo] = newData;
    }
}

pop() {
    if (this.isEmpty()) {
        throw new Error("Underflow");
    }
    else {
        return this.dados[this.topo--];
    }
}

function Inverte(palavra){

    let pilhaAux = new Pilha()
    while(!palavra.isEmpty()){
        pilhaAux.push(palavra.pop());
    }
    return pilhaAux.toString()

}


