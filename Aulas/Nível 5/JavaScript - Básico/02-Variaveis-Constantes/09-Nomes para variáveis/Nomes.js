// Relembramos o fato do JS ser CaseSensitive

username = "X"
userName = "Y"

console.log(username)
console.log(userName)

// Mediante isso, podemos iniciar uma variavel com caracteres especiais e ascentos

let $email = "teste@gmail"
let _email = "teste2@gmail"
let Ação = "Cadastrar"

console.log($email)
console.log(_email)
console.log(Ação)

// O que não podemos é inicializar uma variável com números

//let 1user

/* Recomendações para criar nome de variável:

- Escrever elas em inglês,
- Não utilizar caracteres especiais como por exemplo "ç, ã, â" pois pode acarretar em erros,
- Ser claro na definição do nome,
- Utilizar camelCase para escrita ex: "productName" 
  ou
- Utilizar snake_case para escrita ex: "product_name"

*/

let product_name = "Teclado"
let firstName = "Alexandre"
let lastName = "Calore"