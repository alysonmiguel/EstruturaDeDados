import Fila from "../src/Fila";


let f;

beforeEach(() => {
	f = new Fila(5);
});

test("Instanciacao", () => {
	expect(f.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	f.enqueue(5);
	expect(f.size()).toBe(1);
	expect(f.front()).toBe(5);
});

test("Teste de overflow", () => {
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	expect(() => {
		f.enqueue(5);
	}).toThrowError("Queue is full");
});

test("Teste de underflow", () => {
	expect(() => {
		f.dequeue();
	}).toThrowError("Queue is empty")
})

test("Teste de comportamento", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	expect(f.dequeue()).toBe(1);
});

test("Teste de clear", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	f.clear();
	expect(() => {
		f.dequeue();
	}).toThrowError("Queue is empty")
});

test("Teste de size após o clear", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	f.clear();
	expect(f.size()).toBe(0);
});

test("fila aula", () => {
	expect(f.size()).toBe(0);
	f.enqueue("A");
	expect(f.size()).toBe(1);
	expect(f.front()).toBe("A");
	f.enqueue("B");
	expect(f.front()).toBe("A");
	expect(f.size()).toBe(2);
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	expect(() => {
		f.enqueue("F");
	}).toThrowError("Queue is full");
	expect(f.dequeue()).toBe("A");
	expect(f.dequeue()).toBe("B");
	expect(f.dequeue()).toBe("C");
	expect(f.dequeue()).toBe("D");
	expect(f.dequeue()).toBe("E");
	expect(() => {
		f.dequeue();
	}).toThrowError("Queue is empty");
	expect(f.size()).toBe(0);
});

test("toString", ()=> {
	f.enqueue("A")
	f.enqueue("B")
	f.enqueue("C")

	expect(f.toString()).toBe("[A, B, C, ]")
})
