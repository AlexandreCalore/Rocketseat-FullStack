let balance = 500
let payment = 120

// > Maior que

console.log(balance > payment)

// < Menor que

console.log(balance < payment)

balance = 120
console.log(balance > payment) // Aqui seria um exemplo de um possível erro, visto que, embora o saldo não seja maior que 120, ele pode ser igual, que é aonde o sinal de '=' entra para verificar se também é maior ou igual ao operador desejado.

// >= Maior ou igual a

console.log(balance >= payment)

// <= Menor ou igual a

console.log(balance <= payment)