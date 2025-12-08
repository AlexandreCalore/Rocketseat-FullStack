let number = 10;
console.log(number)

number = number + 1; // Somamos mais 1 a variável
console.log(number)
// ou

number ++; // Incrementou 1 automaticamente
console.log(number)

// Para ter o valor incrementado de fato, precisa obedecer a leitura pelo compilador:

console.log(number++) // Vai printar sem o incremento
console.log(++number) // Vai incrementar e printar o número desejado

// Decremento

console.log(number--)
console.log(--number)

// Até o momento, estavamos apenas somando + 1
// Para somarmos e atribuirmos automaticamente o valor, devemos fazer o seguinte:

number += 10; // Soma 10
number -= 10; // Subtrai 10

// Encurtamos bem o processo, comparado se fizessemos dessa forma:

number = number + 10.