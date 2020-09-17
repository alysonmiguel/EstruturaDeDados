class Pilha {

	constructor(size = 10) {
		this.maxSize = size;
		this.dados = [];
		this.topoA = 0;
		this.topoB = this.maxSize;
	}

    pushA(newData) {
		if (this.isFull()) {
			throw new Error("Overflow");
		}
		else {
			this.dados[++this.topoA] = newData;
		}
    }
    
    pushB(newData) {
		if (this.isFull()) {
			throw new Error("Overflow");
		}
		else {
			this.dados[--this.topoB] = newData;
		}
	}

    popA() {
		if (this.isEmptyA()) {
			throw new Error("Underflow");
		} else {
			return this.dados[this.topoA--];
		}
    }

    popB() {
		if (this.isEmptyB()) {
			throw new Error("Underflow");
		} else {
			return this.dados[this.topoB++];
		}
	}

	isEmptyA() {
		return this.topoA === -1;
    }

    isEmptyB() {
		return this.topoB === this.maxSize;
	}

	isFull() {
		return this.topoB === this.topoA;
	}
}		

export default Pilha;