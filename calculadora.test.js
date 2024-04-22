const calculadora = require("./calculadora")

test('Somar um mais um é igual a dois', () => {
    expect(calculadora.somar(1,1)).toBe(2)
});

test('Subtrair dois menos um é igual a um', () =>{
    expect(calculadora.subtrair(2,1)).toBe(1)
})

test('Multiplicar dois vezes dois é igual a quatro', () =>{
    expect(calculadora.multiplicar(2,2)).toBe(4)
})

test('Dividir quinze por três é igual a cinco', () =>{
    expect(calculadora.dividir(15,3)).toBe(5)
})