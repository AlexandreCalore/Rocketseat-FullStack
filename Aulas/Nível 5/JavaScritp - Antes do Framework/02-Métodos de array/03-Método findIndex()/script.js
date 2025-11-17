// O método findIndex() retorna índice no array do primeiro elemento que satistifazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values = [4, 6, 8, 12]


//Obtendo o primeiro íondice do elemento que o valor é maior que 4
console.log(values.findIndex((value) => {
  value > 4
}))

//Ou então, tratar da seguinte maneira
console.log(values[index])

//Exemplo de quando não encontra
console.log(values.findIndex((index) => values > 12))