/* 
OBJETO
    - É uma coleção de dados e/ou funcionalidades;
    - Podem ter propiedades e métodos.
    
    Nesta aula vamos criar um objeto com propiedades e métodos
*/

//Acessando o objeto

const obj = {}
console.log(typeof obj)

const person = {
  email : "teste@gmail.com", //Observação: Separamos a propiedade e método através de ','
  age: 18,
  name: { 
     first_name: "Alexandre",
     last_name: "Calore"
  },
  adress: {
    street: "Rua x",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-123"
  },
  
  message: (first_name, last_name) => {
    console.log(`Olá ${first_name} ${last_name}, tudo bem?`)
  }
}

//Acessando propiedades e métodos usando a notação de ponto

console.log(person.email) // Vai nos printar somente o email daquele objeto

console.log(person.name.first_name) // Acessamos a propiedade first name dentro da propiedade name

//Em suma, podemos acessar e navegar um objeto através do ponto

//Vamos acessar o método de um objeto

person.message()

//Podemos acessar também alguma propiedade através de colchetes []
console.log(person["email"])
console.log(person["name"]["first_name"])

//já para métodos:

person["message"]()