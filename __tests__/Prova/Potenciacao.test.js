import Potenciacao from "../../src/Prova/Potenciacao"

let p1;
let p2;

beforeEach(() => {
         // base, expoente
	p1 = new Potenciacao(10, 5);
	p2 = new Potenciacao(10, 3);
});

test("Testes", () => {
	expect(p1.multiplicar(p2).toString()).toBe("10, 8");
	expect(p1.dividir(p2).toString()).toBe("10, 2");
	expect(p1.potencia(p2).toString()).toBe("10, 15");
});

test("Multiplicar", () => {
	expect(p1.multiplicar(p2).toString()).toBe("10, 8");
});

