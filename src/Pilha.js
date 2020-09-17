
/**
 * Conjunto ordenado de dados no qual os elementos podem ser inseridos ou removidos a partir de uma extremidade chamada de topo.
 * Uma pilha é uma estrutura de dados em que o acesso é restrito ao elemento recentemente adicionado.
 * É possível dizer que uma pilha é um tipo abstrato de dados baseado no princípio de Last-In, First-Out – LIFO, “o último a entrar é o primeiro a sair”. 
 * As principais operações para implementar uma pilha são: 
 * PUSH: Insere um dado no topo da pilha.
 * POP: Remove um dado do topo da pilha.
 * TOP: Retorna o topo da pilha.
 * ISEMPTY: Verifica se uma pilha está vazia.
 * @author {https://github.com/taniro}
 * @license {https://github.com/taniro/AulaED/blob/master/LICENSE}
 */

class Pilha {

	/**
	 * Construtor padrão da classe Pilha.
	 * @param {number} [size = 10] - Tamanho da Pilha. Caso não informado a Pilha terá tamanho 10.
	 */
	constructor(size = 10) {
		this.maxSize = size;
		this.dados = [];
		this.topo = -1;
	}

	/**
	 * Adicionar um elemento na pilha.
	 * Todo elemento deverá ser adicionado no topo da pilha.
	 * Para evitar problemas é realizado um teste para verificar se a pilha está cheia (stack overflow).
	 * @param {any} newData - Elemento a ser adicionado à Pilha.
	 * @throws {Error} - Lança um erro de Overflow caso a pilha esteja cheia.
	 */
	push(newData) {
		if (this.isFull()) {
			throw new Error("Overflow");
		}
		else {
			this.dados[++this.topo] = newData;
		}
	}

	/**
	 * Remover um elemento da pilha.
	 * Todo elemento deverá ser removido do topo da pilha
	 * Para evitar problemas é realizado um teste para verificar se a pilha está vazia (stack underlow).
	 * @returns {any} - Retorna o elemento removido da Pilha.
	 * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
	 */
	pop() {
		if (this.isEmpty()) {
			throw new Error("Underflow");
		} else {
			return this.dados[this.topo--];
		}
	}

	/**
	 * Função que retorna o elemento no topo da pilha.
	 * @returns {any} - Elemento do topo da Pilha.
	 * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
	 */
	top() {
		if (this.isEmpty()) {
			throw new Error("Empty");
		} else {
			return this.dados[this.topo];
		}
	}

	/**
	 * Função que remove todos os elementos da Pilha. Note que a implementação apenas altera a posição do topo.
	 * Dessa forma, os dados estarão excluidos logicamente da pilha. Essa é uma implementação que visa otimizar o funcionamento da pilha.
	 */
	clear() {
		this.topo = -1;
	}

	/**
	 * Função para obter o tamanho atual da Pilha.
	 * @returns {number} - Tamanho da Pilha.
	 */
	size() {
		return this.topo + 1;
	}

	/**
	 * Função para verificar se a Pilha está vazia.
	 * @returns {boolean} - Retorna [true] se a Pilha estiver vazia, [false] caso contrário.
	 */
	isEmpty() {
		return this.size() === 0;
	}

	/**
	 * Função para verificar se a Pilha está cheia.
	 * @returns {boolean} - Retorna [true] se a Pilha estiver cheia, [false] caso contrário.
	 */
	isFull() {
		return this.size() === this.maxSize;
	}

	/**
	 * Retorna uma string contendo todos os elementos da Pilha.
	 * @returns {string} - Conteúdo da Pilha formatado.
	 */
	toString() {
		let result = "[";
		for (let i = 0; i <= this.topo; i++) {
			result += `${this.dados[i]}`;
		}
		result += "]";
		return result;
	}

}		

export default Pilha;