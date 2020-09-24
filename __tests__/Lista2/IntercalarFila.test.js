import Fila from "../../src/Fila"
import IntercalarFila from "../../src/Lista2/IntercalarFila"
let f1, f2, i

beforeEach(() => {
    f1 = new Fila();
    f2 = new Fila();
    i = new IntercalarFila();
});

test("Intercalando fila", () =>{
    f1.enqueue(1)
    f1.enqueue(3)
    f1.enqueue(5)
    f1.enqueue(7)
    f2.enqueue(2)
    f2.enqueue(4)
    expect(i.intercalarFila(f1,f2)).toBe("[1, 2, 3, 4, 5, 7, ]");
})
