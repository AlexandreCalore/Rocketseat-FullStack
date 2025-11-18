/* Método reduce é utilizado para reduzir um array a um único valor.

Parâmetros:
  - Array original (values)
  - Acumulador (accumulator)
  - Valor da iteração (currentValue)
  - Valor Inicial (0)
  - Index (index da iteração atual - opcional)
*/

const values= [1,2,3,4,5]

const sum = values.reduce((accumulator, currentValue) => {
  console.log("Acumulador: ", accumulator)
  console.log("Current value:", currentValue)
  console.log("Index", index)

  console.log("Soma", accumulator + currentValue)
  console.log("#########")
  
  return accumulator + currentValue
}, 0) // Faz a soma de acordo com o array, levando em conta o 2° parâmetro (no caso, o '0')

console.log("Resultado da soma final:", sum)