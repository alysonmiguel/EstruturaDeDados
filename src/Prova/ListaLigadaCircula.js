
class Node {
	constructor(dado) {
        this.dado = dado;
		this.proximo = dado;
	}
}

class Lista {

	constructor() {
        this.head = new Node(null);

	}

	add(dado) {
		let novo_no = new Node(dado);

		novo_no.proximo = this.head.proximo
		this.head.proximo = novo_no;
	}

    append(dado) {
		let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;
		} else {
            let aux = this.head.proximo;
			while (aux.proximo !== this.inicio) {
				aux = aux.proximo;
			}
			aux.proximo = novo_no;
		}
	}
	
	size() {
		let cont = 0;
		let tmp = this.head.proximo;

		while (tmp !== this.inicio) {
			tmp = tmp.proximo;
			cont++;
		}
		return cont;
    }
    
    isEmpty() {
		return this.head.proximo === this.inicio;
    }
    
    toString() {
		let tmp = this.head.proximo;
		let texto = "";

		while (tmp !== this.inicio) {
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}

		return texto;
	}

}
export default Lista;
