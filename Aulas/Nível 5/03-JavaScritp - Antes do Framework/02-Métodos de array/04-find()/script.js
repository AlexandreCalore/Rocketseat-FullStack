// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado.

const values = [5, 12, 8 , 130, 44]

const found = values.find((value) => value > 10)
console.log(found) //O Find retorna o conteúdo, diferente do findIndex que retorna o índice do mesmo

//Exemplo com objetos

const fruits = [
  {name:"Apples", quantity: 23},
  {name:"Bananas", quantity: 33},
  {name:"Oranges", quantity: 52}
]

const result = fruits.find((fruit) => fruit.name === banana)
console.log(result)