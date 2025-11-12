// destructuring assigment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas

const product = {
  description: "Teclado",
  price: 150
}

const { description, price} = product
console.log("Descrição", description)
console.log("Preço R$: ", price)

function newProduct({description, price}) { //Aqui estamos desestruturando os objetos envolvendo-os em '{}'
  console.log("### NOVO PRODUTO ###")
  console.log("Descrição", description)
  console.log("Preço R$: ", price)
}

newProduct("Mouse", 70)
newProduct(70, "Mouse") //Nesse caso, o nome seria 70 e o preço "Mouse"

//Para contornar esse tipo de problema, declaramos especificamente os parâmetros da seguinte forma

newProduct({
  description: "Headset",
  price: 50
}) // Dessa maneira, é possível passar os parâmetros independente da ordem