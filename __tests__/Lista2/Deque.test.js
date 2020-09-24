import Deque from "../../src/Lista2/Deque"


let d

beforeEach(() => {
    d = new Deque(10);
});

test("Inserir e remover no inicio", () => {
    d.inserirInicio(1)
    d.inserirInicio(2)
    d.inserirInicio(3)
    expect(d.removerInicio()).toBe(3)
})


test("Inserir e remover no fim", () => {
    d.inserirFim(1)
    d.inserirFim(2)
    d.inserirFim(3)
    expect(d.removerFim()).toBe(3)
})