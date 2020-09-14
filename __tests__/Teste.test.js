import Teste from "../src/Teste"

let p 

beforeEach(() => {
    p = new Teste();
})

test("testando", () => {
    expect(p.funcao()).toBe("ola mundo")
})