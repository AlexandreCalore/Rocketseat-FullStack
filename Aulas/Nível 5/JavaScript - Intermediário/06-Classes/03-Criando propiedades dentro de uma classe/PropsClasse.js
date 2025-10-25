class Product{
  constructor(name){
    this.name = name //O this serve para utilizar a propiedade name relacionado a classe product, como sendo sua atributo dessa classe mesmo não tendo sida declarada anteriormente, e atribuindo a essa propiedade da classe o parâmetro passado
  }
}

const product = new Product("Teclado")
console.log(product.name)

const product1 = new Product("Mouse")
console.log(product1.name)