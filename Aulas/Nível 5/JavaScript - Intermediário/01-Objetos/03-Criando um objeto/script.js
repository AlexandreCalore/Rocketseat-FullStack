/* 
OBJETO
    - É uma coleção de dados e/ou funcionalidades;
    - Podem ter propiedades e métodos.
    
    Nesta aula vamos criar um objeto com propiedades e métodos
*/

//Criando um objeto vazio

const obj = {}
console.log(typeof obj)

//Criando um objetos com propiedades e métodos

const person = {
  email : "teste@gmail.com",// ':' aqui, serve para atribuir
  age: 18,
  name: { //Colocar um objeto dentro de outro tem o nome de estrutura de objeto aninhado
     first_name: "Alexandre",
     last_name: "Calore"
  },
  adress: {
    street: "Rua x",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-123"
  },
  //Podemos criar dentro do objeto funções, que são métodos
  message: (first_name, last_name) => {
    console.log(`Olá ${first_name} ${last_name}, tudo bem?`)
  }

  // OBS: Como convenção, utiliza-se CamelCase para variaveis e, snake_case para propiedades de objetos assim como visto aqui
}
