import Lista from "../src/Lista";


let l;

beforeEach(() => {
	l = new Lista();
});

test("Instanciacao", () => {
	expect(l.size()).toBe(0);
	expect(l.isEmpty()).toBe(true);
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
	l.removeBeginning();
	expect(l.toString()).toBe("3->2->1->5");
	l.removeEnd();
	expect(l.toString()).toBe("3->2->1");
	expect(l.size()).toBe(3);
	l.addAt(1, 6);
	expect(l.toString()).toBe("3->6->2->1");
	expect(l.search(5)).toBe(false);
	expect(l.search(6)).toBe(true);
});

test("Adicionar em ordem", () => {
	l.addInOrder(30);
	l.addInOrder(10);
	l.addInOrder(40);
	l.addInOrder(20);
	expect(l.toString()).toBe("10->20->30->40");

});




