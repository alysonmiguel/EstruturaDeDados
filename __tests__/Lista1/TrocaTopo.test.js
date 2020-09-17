import TrocaTopo from "../../src/Lista1/TrocaTopo"
import Pilha from "../../src/Pilha"
let p 

beforeEach(() => {
    p = new Pilha(5);
})

test("Trocando o topo", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);
    expect(TrocaTopo(p)).toBe("[52341]");
})