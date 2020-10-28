/**
 * Implementação de uma Lista simplesmente encadeada
 * @author {https://github.com/taniro}
 */




class Node {

	/**
  	* Construtor do nós que serão usados no decorrer da Lista
  	* @param {any} - Elemento inserido no nó
  	*/
	constructor(dado) {
		this.dado = dado;
		this.proximo = null;
	}
}

class Lista {

	/**
	 * Construtor da Lista simplesmente encadeada
	 */
	constructor() {
		this.head = new Node(null);
	}

	/**
	 * Insere um novo Nó no inicio da Lista
	 * @param {any} [dado] - Novo elemento que será inserido na Lista por meio de um Nó 
	 */
	add(dado) {
		let novo_no = new Node(dado);

		novo_no.proximo = this.head.proximo;
		this.head.proximo = novo_no;
	}

	/**
	 * Insere um novo Nó no final da Lista
	 * @param {any} [dado] - Novo elemento que será inserido na Lista por meio de um Nó 
	 */
	append(dado) {
		let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;
		} else {
			let aux = this.head.proximo;
			while (aux.proximo !== null) {
				aux = aux.proximo;
			}
			aux.proximo = novo_no;
		}
	}

	/**
	 * Remove o Nó que se encontra no começo da Lista
	 * @throws {Error} - Será lançado um novo erro caso a Lista esteja vazia
	 */
	removeBeginning() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		} else {
			let aux = this.head.proximo;
			this.head.proximo = aux.proximo;
		}
	}

	/**
	 * Remove o Nó que se encontra no final da Lista
	 * @returns {any} - Retorna o conteúdo do nó removido.
	 * @throws {Error} - Será lançado um novo erro caso a Lista esteja vazia
	 */
	removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}

		let aux_a = this.head;
		let aux_b = this.head.proximo;

		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}
		aux_a.proximo = null;
		return aux_b.dado;
	}

	removeDado(dado) {
		if (this.isEmpty()) {
			return false;
		} else {
			let anterior = this.head;
			let atual = this.head.proximo;
			while (atual !== null) {
				if (atual.dado === dado) {
					anterior.proximo = atual.proximo;
					return true
				}
				anterior = atual;
				atual = atual.proximo;
			}
			return false
		}
	}
	/**
	 * Retorna os dados do último nó da lista
	 * @throws {Error} - Será lançado um novo erro caso a Lista esteja vazia
	 */
	last() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}

		let aux_a = this.head;
		let aux_b = this.head.proximo;

		while (aux_b.proximo !== null) {
			aux_a = aux_b;
			aux_b = aux_b.proximo;
		}
		return aux_b.dado;
	}

	/**
	 * Verifica se a Lista está vazia ou não
	 * @returns {boolean} - Retorna [true] para Lista vazia
	 */
	isEmpty() {
		return this.head.proximo === null;
	}

	/**
	 * Retorna a Lista em formato de String
	 * @returns {string} - Lista em String
	 */
	toString() {
		let tmp = this.head.proximo;
		let texto = "";

		while (tmp !== null) {
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}

		return texto;
	}

	/**
	 * O tamanho da Lista
	 * @returns {number} - Retorna o tamanho da Lista
	 */
	size() {
		let cont = 0;
		let tmp = this.head.proximo;

		while (tmp !== null) {
			tmp = tmp.proximo;
			cont++;
		}
		return cont;
	}

	/**
	 * Insere um novo Nó em uma posição específica da Lista
	 * @param {number} [posicao] - Posição que desejá inserir o novo Nó 
	 * @param {any} [dado] - Novo Nó que será inserido na Lista
	 */
	addAt(posicao, dado) {
		if (posicao >= this.size()) {
			//adicionando no final
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 0;

				let aux_a = this.head;
				let aux_b = this.head.proximo;

				while (i != posicao) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
			}
		}
	}
	/**
	 * Procura um dado específico na Lista
	 * @param {any} [dado] - Dado que será procurado na Lista
	 * @returns {boolean} - Retorn [true] se o dado for encontrado e [false] se o dado não existir
	 */
	search(dado) {
		if (this.isEmpty()) {
			return false;
		} else {
			let tmp = this.head.proximo;
			while (tmp !== null) {
				if (tmp.dado === dado) {
					return true;
				}
				//iteração
				tmp = tmp.proximo;
			}
			return false;
		}
	}

	/**
	 * 
	 * @param {any} [dado] - Novo nó que será inserido em ordem crescente
	 *  
	 * NOTA: Essa função deve ser usada apenas se os elementos já existentes
	 * na lista estiverem em ordem crescente.
	 */
	addInOrder(dado) {

		let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;
		} else {
			let aux_a = this.head;
			let aux_b = this.head.proximo;

			while (aux_b != null) {
				if (aux_b.dado > dado) {
					aux_a.proximo = novo_no;
					novo_no.proximo = aux_b;
					return;
				}
				//iteração
				aux_a = aux_b;
				aux_b = aux_b.proximo;
			}

			//caso o if nunca seja true
			aux_a.proximo = novo_no;
			novo_no.proximo = null;
			return;
		}
	}
	/**
	 * remove todos os dados da lista.
	 */
	clear() {
		this.head = new Node(null);
	}
}

export default Lista;
