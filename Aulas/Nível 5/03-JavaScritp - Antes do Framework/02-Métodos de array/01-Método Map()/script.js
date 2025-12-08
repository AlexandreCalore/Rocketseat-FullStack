//Método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve um novo array

const products = ["Teclado", "Mouse", "Monitor"]

//Percorrendo os itens do Array

products.map(
  (product)=>{ //aqui, estamos executando uma função para cada objeto do array
    console.log(product)
  }
)

//Sintaxe reduzida.

products.map((product) => console.log(product)) //quando há somente uma linha de função, pode-se fazer dessa maneira

//Utilizando o novo objeto retornado
const formatted = products.map((product) => {
  return {
    description: product, //No caso, ele retorna um objeto com as propiedades, tudo em forma de array
    id: Math.random(),
  }
})

console.log(formatted)