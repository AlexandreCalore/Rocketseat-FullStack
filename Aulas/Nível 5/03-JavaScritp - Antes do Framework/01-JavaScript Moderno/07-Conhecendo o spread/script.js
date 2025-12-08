// spread (espalhar) permite que um objeto iterável (que você consegue percorrer), como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais arugmento

const numbers = [1,2,3]
console.log(numbers)

//Spread
console.log(...numbers) //Espalhando os dados dentro do console.log


//Criando o objeto
const data = [
  {
  name: "Alexandre",
  email: "alexandre@gmail.com",
  avatar: "1.png",
  },
  {
    name: "Calore",
    email: "calore@gmail.com",
    avatar: "2.png",
  }
]

console.log(data) // Printa o array
//Utilizando o spread no array com objetos
console.log(...data) // Printa os objetos do array