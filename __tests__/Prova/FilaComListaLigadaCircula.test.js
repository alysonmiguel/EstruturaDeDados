import FilaComListaLigadaCircula from "../../src/Prova/FilaComListaLigadaCircula";

let f;

beforeEach(() => {
	f = new FilaComListaLigadaCircula
});

test("Adicionar um elemento", () => {
	f.enqueue("A");
	f.enqueue("B");
    f.enqueue("C");
    expect(f.toString()).toBe('A->B->C->')
    f.enqueue("D");
    f.enqueue("B");
    expect(f.toString()).toBe('A->B->C->D->B->')
});

test("Remover elemento", () => {
    f.enqueue("A");
	f.enqueue("B");
    f.enqueue("C");
    expect(f.dequeue()).toBe('A')
    f.dequeue()
    expect(f.dequeue()).toBe('C');
    expect(f.toString()).toBe('')
    
});

test("Teste de underflow", () => {
	expect(() => {
		f.dequeue();
	}).toThrowError("A lista está vazia.")
})


