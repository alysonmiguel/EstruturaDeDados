import PilhaComFila from "../../src/Lista2/PilhaComFila"


let p;

beforeEach(() => {
	p = new PilhaComFila(5);
});

test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	expect(p.pop()).toBe(4);
	expect(p.size()).toBe(3);
	expect(p.top()).toBe(3);
});
