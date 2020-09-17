import Pilha from "../src/Pilha";

let p;

beforeEach(() => {
	p = new Pilha(5);
});

test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	p.push(5);
	expect(p.size()).toBe(1);
});

test("Teste de overflow", () => {
	p.push(5);
	p.push(5);
	p.push(5);
	p.push(5);
	p.push(5);
	expect(() => {
		p.push(5);
	}).toThrowError("Overflow");
});