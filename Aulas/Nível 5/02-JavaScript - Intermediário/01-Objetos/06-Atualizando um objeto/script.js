const product = {
  name: "Teclado",
  quantity: 100,
}

//Acessando a propiedade do objeto

console.log(product.name)

//Acessando a propiedade de quantidade daquele objeto criado

console.log(product.quantity)

//Atualizando quantidade

console.log(product.quantity)

product.quantity = 90

console.log(product.quantity)

//Alterando o nome

product.name = "Mouse"

console.log(product.name)

//Atualizando por meio de notação de colchetes []

product["quantity"] = 80
console.log(product.quantity)