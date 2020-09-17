import Fracao from "../../src/Lista1/Fracao"

let f1, f2;

beforeEach(() => {
    f1 = new Fracao(1, 2);
    f2 = new Fracao(2, 3);
})

test("Multiplicação", () => {
    expect(f1.mult(f2)).toBe("2/6")
})

test("Divisão", () => { 
    expect(f1.div(f2)).toBe("3/4")
})