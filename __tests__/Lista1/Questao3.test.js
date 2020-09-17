import Questao3 from "../../src/Lista1/Questao3"

let p 
beforeEach(() => {
    p = new Questao3(10)
})

test("Instacia", () => {
    p.pushA("A");
    p.pushA("A");
    p.pushA("A");
    p.pushA("A");
    p.pushB("B");
    p.pushB("B");
    p.pushB("B");
    p.pushB("B");
    expect(p.topoA).toBe(4)
    expect(p.topoB).toBe(6)
    p.pushB("B");
    p.pushB("B");
    expect(p.topoB).toBe(4)
    expect(() => {
        p.pushB("2");
    }).toThrowError("Overflow");
    p.popA();
    p.popA();
    expect(p.topoA).toBe(2)
    p.popB();
    p.popB();
    expect(p.topoB).toBe(6)

});