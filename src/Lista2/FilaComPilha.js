import Pilha from '../Pilha'


class FilaComPilha {
	constructor(maxsize) {
		this.pilha = new Pilha(maxsize);
		this.pilha2 = new Pilha(maxsize);
	}

	enqueue(dado) {
        if(this.isFull()){
            throw new Error("Queue is full");
        }else{

            while (this.pilha.size() > 0) {
                this.pilha2.push(this.pilha.pop());
            }
            this.pilha.push(dado);
            while (this.pilha2.size() > 0) {
                this.pilha.push(this.pilha2.pop());
            }
        }
    }
        
	dequeue() {
        if(this.isEmpty()){
            throw new Error("Queue is empty")
        }else{
            return this.pilha.pop();
        }
	}

	isFull() {
		return this.pilha.isFull();
	}

	isEmpty() {
		return this.pilha.isEmpty();
	}

	size() {
		return this.pilha.size();
	}

	front() {
		return this.pilha.top();
	}

	clear() {
		return this.pilha.clear();
    }
    
    toString(){
        return this.pilha.toString()
    }
}

export default FilaComPilha;


