import ListaLigadaCircula from "../../src/Prova/ListaLigadaCircula";

let l;

beforeEach(() => {
	l = new ListaLigadaCircula();
});

test("Adicionar em lugares variados", () => {
	l.append("a");
	l.append("b");
	l.append("c");
	l.append("d");
	expect(l.size()).toBe(4);
	expect(l.toString()).toBe("a->b->c->d->");
	expect(l.removeFrist()).toBe("a");
	expect(l.removeFrist()).toBe("b");
	l.append("X");
	l.append("F");
	expect(l.removeFrist()).toBe("c");
	expect(l.toString()).toBe("d->X->F->");
	expect(l.size()).toBe(3);

	
});
