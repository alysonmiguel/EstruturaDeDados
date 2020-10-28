import escolherPosicao from "../../src/Lista3/Josephus"


test("Josephus", () =>{
    // Intervalo para remoção, Quantidade de soldado, posição que deve estar;
    expect(escolherPosicao(3,41)).toBe(31) 
    expect(escolherPosicao(1,5)).toBe(5) 
    expect(escolherPosicao(2,15)).toBe(15) 
    expect(escolherPosicao(2,6)).toBe(5) 
})