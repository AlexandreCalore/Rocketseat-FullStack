//Método filter() cria um novo array com todos os elementos que passaram na condição

const words = ['JS', "HTML", "CSS", "WEB"]

// Filtrando palavras que tenham mais do que 3 letras
const result = words.filter((word) => word.length > 3)
console.log(result)

const product = [
  { description: "Teclado", price: 150, promotion: true, promotion: true},
  { description: "Mouse", price: 70, promotion: false, promotion: false},
  { description: "Teclado", price: 150, promotion: false, promotion: true},
]

//Exemplo de um filtro de produtos na promoção
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)