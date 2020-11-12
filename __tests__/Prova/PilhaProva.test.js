import PilhaProva from "../../src/Prova/PilhaProva";

let p;

beforeEach(() => {
	p = new PilhaProva(4);
});

test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	p.push(5);
	expect(p.size()).toBe(1);
});

test("Teste de overflow", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	expect(() => {
		p.push(3);
	}).toThrowError("Elemento repetido");
	expect(p.toString()).toBe("[123]");
	expect(p.print()).toBe("[3,2,1,]");
});

test("Teste de Prova", () => {
	p.push(7);
	p.push(6);
	p.push(8);
	p.push(20);
	expect(() => {
		p.push(1);
	}).toThrowError("Overflow");
	expect(p.print()).toBe("[20,8,6,7,]");
	p.pop();
	p.pop();
	p.push(1);
	expect(() => {
		p.push(6);
	}).toThrowError("Elemento repetido");
	p.push(8);
	expect(p.print()).toBe("[8,1,6,7,]");
	expect(() => {
		p.push(10);
	}).toThrowError("Overflow");
	p.pop();
	p.pop();
	p.push(10);
	p.pop();
	p.pop();
	p.push(6);
	expect(p.print()).toBe("[6,7,]");
	expect(() => {
		p.push(7);
	}).toThrowError("Elemento repetido");
	p.pop();
	p.push(8);
	p.pop();
	p.pop();
	p.push(7);
	p.pop();
	expect(() => {
		p.pop();
	}).toThrowError("Underflow");
	p.push(8);
	p.push(6);
	p.push(7);
	expect(p.print()).toBe("[7,6,8,]");
});
