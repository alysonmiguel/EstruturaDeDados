import FilaPrioridade from "../src/FilaPrioridade";

let p;
let n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;

beforeEach(() => {
	p = new FilaPrioridade();
});

test("add", () => {
	p.add('A', 35);
	expect(p.asArray()).toStrictEqual([35]);
	p.add('B', 33);
	expect(p.asArray()).toStrictEqual([35, 33]);
	p.add('C', 42);
	expect(p.asArray()).toStrictEqual([42, 33, 35]);
	p.add('D', 10);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10]);
	p.add('E', 14);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10, 14]);
	p.add('F', 19);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10, 14, 19]);
	p.add('G', 27);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10, 14, 19, 27]);
	p.add('H', 44);
	expect(p.asArray()).toStrictEqual([44, 42, 35, 33, 14, 19, 27, 10]);
	p.add('I', 26);
	expect(p.asArray()).toStrictEqual([44, 42, 35, 33, 14, 19, 27, 10, 26]);
	p.add('J', 31);
	expect(p.asArray()).toStrictEqual([44, 42, 35, 33, 31, 19, 27, 10, 26, 14]);

});

test("remove", () => {
	p.add('A', 35);
	p.add('B', 33);
	p.add('C', 42);
	p.add('D', 10);
	p.add('E', 14);
	p.add('F', 19);
	p.add('G', 27);
	p.add('H', 44);
	p.add('I', 26);
	p.add('J', 31);
	expect(p.remove()).toBe(44);
	expect(p.remove()).toBe(42);
	expect(p.remove()).toBe(35);
	expect(p.remove()).toBe(33);
	expect(p.remove()).toBe(31);
	expect(p.remove()).toBe(27);
	expect(p.remove()).toBe(26);
	expect(p.remove()).toBe(19);
	expect(p.remove()).toBe(14);
	expect(p.remove()).toBe(10);
});