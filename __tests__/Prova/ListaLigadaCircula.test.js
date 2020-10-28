import ListaLigadaCircula from "../../src/Prova/ListaLigadaCircula";

let l;

beforeEach(() => {
	l = new ListaLigadaCircula();
});

test("Adicionar em lugares variados", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	expect(l.size()).toBe(4);
	expect(l.toString()).toBe("4->3->2->1");
	l.append(5);
	expect(l.toString()).toBe("4->3->2->1->5");
});
