/**
 * Implementação de um Fila Circular
 * @author {https://github.com/taniro}
 */


class FilaCircular {

	/**
	 * Construtor padrão de uma Fila Circular
	 * @param {number} [t = 10]  - Caso o tamanho da Fila Circular não tenha sido informado
	 */
	constructor(t = 10) {
		this.dados = [];
		this.fim = -1;
		this.inicio = -1;
		this.tamanho = t;
	}

	/**
     * Adiciona um novo elemento em um espaço que esteja vazio na Fila Circular
     * @param {any} newData - Novo dado a ser colocado na Fila Circular
     * @throws {Error} - Será lançado um erro caso a Fila Circular esteja cheia
     */
	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		}
		if (this.isEmpty()) {
			this.inicio = this.fim = 0;
		} else {
			this.fim = this.getNextEndPosition();
		}
		this.dados[this.fim] = newData;
	}

	/**
     * Remove o dado que esteja na posição da frente da Fila Circular
	 * Caso a frente seja um outro lugar, a Fila tentará encontrar esse lugar
     * @returns {any} - Retorna o elemento removido
     * @throws {Error} - Será lançado um erro caso a Fila Circular esteja vazia
     */
	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		let r = this.dados[this.inicio];
		if (this.size() === 1) {
			this.clear();
		} else {
			this.inicio = this.getNextBeginPosition();
		}
		return r;
	}

	/**
	 * Retorna o elemento que está a frente da Fila
	 * @returns {any} - Elemento na frente
	 */
	front() {
		return this.dados[this.inicio];
	}

	/**
	 * Remove todos os elementos da Fila
	 */
	clear() {
		this.inicio = this.fim = -1;
	}

	/**
	 * Retorna a Fila Circular em formatação de String
	 * @returns {string} - Fila Circular em string 
	 */
	toString() {
		let result = "[";
		if (this.inicio <= this.fim) {
			for (let i = this.inicio; i <= this.fim; i++) {
				result += ` ${this.dados[i]} `;
			}
		} else {
			for (let i = this.inicio; i < this.tamanho; i++) {
				result += ` ${this.dados[i]} `;
			}
			for (let i = 0; i <= this.fim; i++) {
				result += ` ${this.dados[i]} `;
			}
		}
		result += "]";
		return result;
	}

	/**
	 * Retornará o tamanho da Fila Circular
	 * @returns {number} - Tamanho da Fila
	 */
	size() {
		if (this.isEmpty()) {
			return 0;
		} else if (this.inicio === this.fim) {
			return 1;
		} else if (this.inicio < this.fim) {
			return this.fim - this.inicio + 1;
		} else {
			return this.tamanho - this.inicio + this.fim + 1;
		}
	}

	/**
	 * Verifica se a Fila está vazia
	 * @returns {boolean} - Retorna true se a fila estiver fazia
	 */
	isEmpty() {
		return this.inicio === -1;
	}

	/**
	 * Verifica se a Fila está cheia
	 * @returns {boolean} - Retorna true se a fila estiver cheia
	 */
	isFull() {
		return (
			(this.inicio === 0 && this.fim === this.tamanho - 1) ||
			this.fim === (this.inicio - 1) % (this.tamanho - 1)
		);
	}

	/**
	 * Retorna qual será a próxima posição final da Fila Circular
	 * @returns {number} - Retorna qual o índice da próxima posição final
	 */
	getNextEndPosition() {
		return this.fim === this.tamanho - 1 && this.inicio !== 0 ? 0 : this.fim + 1;
	}

	/**
	 * Retorna qual será a próxima posição inicial da Fila Circular
	 * @returns {number} - Retorna qual o índice da próxima posição inícial
	 */
	getNextBeginPosition() {
		return this.inicio === this.tamanho - 1 ? 0 : this.inicio + 1;
	}
}

export default FilaCircular;
