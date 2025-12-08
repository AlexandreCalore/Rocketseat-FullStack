/*

- Conversão de tipos (type casting ou type conversion):
ocorre quando você explicitamente transforma um valor de um 
tipo para outro. Isso é feito de forma consciente, usando 
funções ou métodos específicos para realizar a conversão.

- Coerção de tipos:
acontece de forma automática (implicitamente). O JavaScript 
tenta automaticamente converter um dos valores para um tipo 
compatível antes de realizar a operação.

*/

//------------------------Conversão na prática------------------------

console.log("9") // Sabemos que o 9 é um texto

// No caso, queremos converte-lo em número, para isso fazemos:

console.log(Number("9"))

// Da mesma forma que podemos fazer isso com uma variável

let value = "9" // Recebe uma string 9

console.log(value) // vai imprimir uma string
console.log(Number(value)) // vai imprimir um número

// Para o inverso também é válido:

let age = 18
console.log(age.toString()) // Utilizamos um método para imprimir esse número em forma de texto

// ou

console.log(String(age)) // Também funciona

// Para convertermos algo em boolean por exemplo, devemos seguir a mesma linha de raciocinio

console.log(Boolean(age))

//------------------------Coerção na prática------------------------

console.log("10" + 5) // Vai imprimir um 105

// E isto ocorre pois ele concatenou os valores, mesclou eles, e para isso, ele convertou automaticamente o n° 5 de number para string

console.log(typeof("10" + 5)) // Retorna string