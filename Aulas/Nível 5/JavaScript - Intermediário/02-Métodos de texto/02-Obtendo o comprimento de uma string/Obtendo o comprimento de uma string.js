let message = "Estou estudando JS"

// Para descobrirmos o comprimento de uma string no JS, trabalhamos da seguinte forma

console.log(message)

console.log(message.length) // usamos a propiedade lenght que retorna o tamanho da string

// Vamos trabalhar com um cenário onde queremos uma senha maior que 5 caracteres

let password = "123456"

if (password.length < 6){
  console.log("A senha deve ter ao menos 6 caracteres")
} else {
  console.log("Senha cadastrada com sucesso")
}