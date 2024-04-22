// 1 - Elabore uma função para calcular o gasto de combustível por km rodado. Utilize as seguintes recomendações:
// Essa função deve receber dois parâmetros: a distância a ser percorrida em metros, e o tipo de combustível do carro;
// Um carro roda 16km/litro com gasolina e 11km/litro com etanol;
// A função deve retornar um int que representa quantos litros serão necessários para o percurso;

// 2 - O parâmetro de distância deve ser um inteiro e não pode ser negativo. Já o de combustível deve ser uma string
// e só pode ter “gasolina” ou “etanol”

// 3 - Implementar testes unitários para garantir que as validações e as funções principais estão funcionando como o esperado.
// Importante que os testes sejam implementados em um arquivo diferente das funções principais.

console.log('----- Calcular o gasto de combustível por km rodado -----')

cgb = require('./index2.js')

let distancia
let tipoCombustivel
let int

distancia = console.log(parseInt(prompt('Digite a distância a ser percorrida:')))
tipoCombustivel = console.log((String(prompt('Digite o tipo de combustivel usado no carro: [ GASOLINA ] ou [ ETANOL ]'))))

int = console.log(index2.CalcularGastoCombustivel('Para esse percurso, serão necessários ' + distancia + ' litros de ' + tipoCombustivel))