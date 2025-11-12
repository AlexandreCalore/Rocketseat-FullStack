// destructuring assigment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas

const data = ["Alexandre Calore", "alexandrecalore@gmail.com"]

// Desestruturando um array

const [username, email] = data // Criamos a variável e ja atribuimos o valor do array dentro dela.

console.log("Nome:", username)
console.log("Email:", email)

const fruits = ["Banana", "Apple", "Orange"]

//Desestruturar somente o primeiro.
const [banana] =  fruits
console.log(banana)

//Ignorando o primeiro na desestruturação
const [ , apple] = fruits
console.log(apple)

//Ignorando o primeiro e o segundo na desestruturação
const [ , ,orange] = fruits
console.log(orange)