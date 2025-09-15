// Função construtora é capaz de instanciar objetos com o operadora

function createProduct(name){
  const product = {}

  product.name = name
  product.details = function() {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product // É uma função que cria e retorna um objeto
}

// INSTÂNCIA: É criar uma cópia de um objeto na memória. O new cria esse objeto utilizando a estrutura da função construtora

const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details

const product2 = new createProduct ("Mouse")
console.log(product2.name)
product2.details

//Exemplo de função construtora disponíveis no própio JS

let myName = new String("Calore")

let price = "40.6".replace(".","")

let date = new Date("02-09-") 

//Outra forma de criar a função construtora

function Person(name){
  this.name = name
  this.message = function() {
    console.log(`Olá ${this.name}`)
  }
} // O JS entende que quando usamos o this.name, que ele faz parte da function

const person1 = new Person("Alexandre")
console.log(person1.name)
person1.message()