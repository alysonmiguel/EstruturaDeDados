
class Node {
	constructor(dado) {
        this.dado = dado;
		this.proximo = null;
	}
}

class ListaLigadaCircula {
	constructor() {
        this.fim =  null;
	}

    append(dado) {
		let novo_no = new Node(dado);
		if (this.isEmpty()) {
			novo_no.proximo = novo_no; 
		} else {
			let primeiro = this.fim.proximo;
			this.fim.proximo = novo_no;
			novo_no.proximo = primeiro;
		}
		this.fim = novo_no;
	}
	
	removeFrist() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}
		if (this.fim === this.fim.proximo){
			let aux = this.fim.dado;
			this.fim = null;
			return aux;
		}else{
			let primeiro = this.fim.proximo;
			this.fim.proximo = primeiro.proximo
			return primeiro.dado;
		}
		
	}

	removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}
		if (this.fim === this.fim.proximo){
			let aux = this.fim.dado;
			this.fim = null;
			return aux;
		}else{
			let anterior = this.fim;
			let primeiro = this.fim.proximo;
			
			while(primeiro !== this.fim){
				anterior = primeiro;
				primeiro = primeiro.proximo;
			}

			let aux = primeiro.dado;
			anterior.proximo = primeiro.proximo;
			this.fim = anterior;
		 	return aux;
		}
		
	}

    isEmpty() {
		return this.fim === null;
    }
	
	size() {
		let cont = 0;
		let tmp = this.fim.proximo;

		do{
			tmp = tmp.proximo;
			cont++;
		}while (tmp !== this.fim.proximo)
		
		return cont;
	}

    toString() {
		if(this.isEmpty()){
			return "";
		}
		let primeiro = this.fim.proximo;
		let tmp = this.fim.proximo;
		let texto = "";

		do{
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}while (tmp !== primeiro) 

		return texto;
	}

}
export default ListaLigadaCircula;
