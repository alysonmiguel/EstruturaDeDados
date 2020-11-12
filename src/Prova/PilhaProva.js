
class PilhaProva {

	constructor(size = 4) {
		this.maxSize = size;
		this.dados = [];
		this.topo = -1;
	}

	push(dado) {
		if (this.isFull()) {
			throw new Error("Overflow");
		}else{
			for (let i = 0; i <= this.topo; i++) {
				if(dado === this.dados[i]){
					throw new Error("Elemento repetido");
				}
			}
			this.dados[++this.topo] = dado;
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

	size() {
		return this.topo + 1;
	}

	isEmpty() {
		return this.size() === 0;
	}

	isFull() {
		return this.size() === this.maxSize;
	}

	toString() {
		let result = "[";

		for (let i = 0; i <= this.topo; i++) {
			result += `${this.dados[i]}`;
		}
		result += "]";
		return result;
	}

	print() {
		let result = "[";
		for (let i = this.topo; i >= 0 ; i--) {
			result += `${this.dados[i]},`;
		}
		result += "]";
		return result;
	}
}		

export default PilhaProva;