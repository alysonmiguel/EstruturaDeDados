import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";


/**
 * Conjunto implementado apartir de uma Lista Duplamente Ligada (LDL)
 * @author {https://github.com/taniro}
 */


class Conjunto {

	/**
	 * Construtor padrão de um Conjunto utilizando uma LDL
	 */
	constructor() {
		this.dados = new ListaDuplamenteLigada();
	}

	add(dado) {
		if (!this.has(dado)) {
			this.dados.add(dado);
			return true;
		} else {
			return false;
		}
	}

	delete(dado) {
		return this.dados.remove(dado);
	}

	has(dado) {
		return this.dados.search(dado);
	}

	clear() {
		this.dados.clear();
	}

	length() {
		return this.dados.length();
	}

	isEmpty() {
		return this.dados.isEmpty();
	}

	values() {
		return this.dados.asArray();
	}

	/**
	 * A união de dois conjuntos A e B é o conjunto A U B composto dos elementos que pertencem
	 * a um dos conjuntos A ou B ou a ambos.
	 * @param {*} anotherset 
	 */
	union(anotherset) {
		let result = new Conjunto();
		let valuesA = this.values();
		let valuesB = anotherset.values();

		for (const i of valuesA) {
			result.add(i);
		}
		for (const j of valuesB) {
			result.add(j);
		}
		return result;
	}

	intersection(anotherset) {
		let result = new Conjunto();
		let valuesB = anotherset.values();

		for (const j of valuesB) {
			if (this.has(j)) {
				result.add(j);
			}
		}

		return result;
	}

	difference(anotherset) {
		let result = new Conjunto();
		let valuesA = this.values();
		let valuesB = anotherset.values();

		for (const i of valuesA) {
			result.add(i);
		}

		for (const j of valuesB) {
			result.delete(j);
		}

		return result;
	}

	contains(anotherset) {
		let valuesB = anotherset.values();
		for (const j of valuesB) {
			if (!this.has(j)) {
				return false;
			}
		}
		return true;
	}

	isEqual(anotherset) {
		return (this.contains(anotherset)) && (anotherset.contains(this));
	}
}

export default Conjunto;
