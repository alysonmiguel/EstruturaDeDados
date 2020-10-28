/**
 *Implementação de uma Fila básica
 * @author {https://github.com/taniro}
 */


class Fila {

	/**
	 * Construtor padrão da classe Fila
	 * @param {number} [size = 10] Tamanho da Fila. Caso não informado a Fila terá tamanho 10 
	 */
	constructor(size = 10) {
		this.dados = [];
		this.fim = 0;
		this.inicio = 0;
		this.maxSize = size;
	}

	/**
	 * Adiciona um elemento na Fila
	 * @param {any} newData - Elemento a ser adicionado à Fila
	 * @throws {Error} - Lança um erro caso a Fila esteja cheia
	 */
	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		} else{
			this.dados[this.fim++] = newData;
		}
	}

	/**
	 * Remove o elemento que está na da Fila
	 * @returns {any} - Retorna o elemento removido da Fila
	 * @throws {Error} - Lança um erro caso a Fila esteja vazia
	 */
	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicio++];
		}
	}

	/**
	 *Retorna o elemento que está na frente da Fila
	 *@returns {any} - Retorna o elemento que está sem remove-lo
	 */
	front() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicio];
		}
	}

	/**
	 * Remove todos os elementos da Fila
	 */
	clear() {
		this.inicio = this.fim;
	}

	/**
	 * Retorna a Fila em formatação de String
	 * @returns {string} - Retorna a string
	 */
	toString() {
		let resultado = "["

		for (let i = 0; i < this.fim; i++) {
			resultado += `${this.dados[i]}, `;
		}

		resultado += "]"

		return resultado;
	}

	/**
	 * @returns {number} - Retorna o tamanho da Fila
	 */
	size() {
		return this.fim - this.inicio;
	}

	/**
	 * @returns {boolean} - Verifica se a Fila esta vazia ou não
	 */
	isEmpty() {
		return this.inicio === this.fim;
	}

	/**
	 * @returns {boolean} - Verifica se a Fila esta cheia ou não
	 */
	isFull() {
		return (this.fim - this.inicio) === this.maxSize
	}
}

export default Fila;