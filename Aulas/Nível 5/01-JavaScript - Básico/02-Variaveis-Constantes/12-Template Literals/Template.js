// Conhecido também como template strings

let username = "Alexandre"
let email = "teste@gmail.com"


// O objetivo é imprimir as 2 variáveis através de um console.log

console.log(username, email, "teste") //conseguimos imprimir os dois, passando os parâmetros.

// mas se queremos algo mais estruturado, formatado. Para isso podemos concatenar o texto:

let message = "Olá " + username + " você conectou com o email " + email
console.log(message)

// Embora funcione, dessa forma se torna mais "trabalhosa", é nesse momento que entra o template strings para facilitar:

console.log(`Olá ${username}, você conectou com o email: ${email}`) // usamos o sinal de dolár + sinal de {} para imprimirmos uma variável

// Da primeira forma não está errado, mas o ideal é utilizar template strings