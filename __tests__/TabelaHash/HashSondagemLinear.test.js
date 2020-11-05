import HashSondagemLinear from "../../src/TabelaHash/HashSondagemLinear";

let h;

beforeEach(() => {
	h = new HashSondagemLinear
});

// test("Instaciação", () => {
// 	expect(h.length().toBe(0));
// 	expect(l.isEmpty()).toBe(true);
// });

test("Inserir", () => {
    h.inserir("a", 12)
    h.inserir("a", 15)
    h.inserir("A", 17)
    expect(h.buscar("A")).toBe(17);
    h.remover("A"); 
    expect(h.toString()).toBe(",a,12,a,15,");
    h.inserir("d", 11)
    h.inserir("f", 10)    
	expect(h.toString()).toBe(",a,12,a,15,,d,11,,f,10");
});
