class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
	}
}

class FilaPrioridade {
	constructor() {
		this.tree = [];
		this.size = 0;

		this.tree[0] = new Node(0, 99999999);
	}

	add(dado, prioridade) {
		let node = new Node(dado, prioridade);

		this.size++;
		this.tree[this.size] = node;

		let pos_filho = this.size;
		let pos_pai = Math.trunc(pos_filho / 2);

		while ((this.tree[pos_pai]).priority < node.priority) {
			this.tree[pos_filho] = this.tree[pos_pai];
			pos_filho = pos_pai;
			pos_pai = Math.trunc(pos_filho / 2);
		}
		this.tree[pos_filho] = node;
	}

	remove() {
		let maior, ultimo, pos_filho, pos_pai;
		maior = this.tree[1];
		ultimo = this.tree[this.size];
		this.size--;
		this.tree[1] = ultimo;
		for (pos_pai = 1; pos_pai * 2 <= this.size; pos_pai = pos_filho) {
			pos_filho = pos_pai * 2;
			//verifica qual dos dois filhos tem a maior prioridade
			if ((pos_filho != this.size) && (this.tree[pos_filho].priority 
				< this.tree[pos_filho + 1].priority)) {
				pos_filho++;
			}
			if (ultimo.priority < this.tree[pos_filho].priority) {
				this.tree[pos_pai] = this.tree[pos_filho];
			} else {
				break;
			}
		}
		this.tree[pos_pai] = ultimo;
		return maior.priority;
	}

	asArray() {
		let dados = [];
		for (let i = 1; i <= this.size; i++) {
			dados.push(this.tree[i].priority);
		}
		return dados;
	}
}

export default FilaPrioridade;

