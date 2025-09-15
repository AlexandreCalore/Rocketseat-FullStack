// Estritamente igual / diferente (tipo e valor)

let one = 1
let two = 2

// o operador '==='  é o mesmo que estritamente igual a:

console.log(one === 1) // Esse tipo de comparação, ele olha tanto conteúdo quanto o tipo, nessa afirmação o resultado é verdadeiro
console.log(one === "1") // Aqui o resultado vai ser falso, pois embora o conteúdo seja o mesmo, 


// o operador '!=='  é o mesmo que estritamente diferente de:

console.log(one !== two)
console.log(one !== 1)
console.log(two !== "2")