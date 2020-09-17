import inverte from "../../src/Lista1/Inverte"
import Pilha from "../../src/Pilha";

let p;

beforeEach(() => {
    p = new Pilha(7);
})

test("Inverte palavra", () => {
	p.push("A");
	p.push("B");
	p.push("A");
	p.push("C");
	p.push("A");
	p.push("X");
    p.push("I");
	expect(inverte(p)).toBe("[IXACABA]");
});