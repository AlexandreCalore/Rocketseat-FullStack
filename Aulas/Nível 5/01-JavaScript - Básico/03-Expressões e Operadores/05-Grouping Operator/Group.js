// Ordem de precedência

let total1 = 2 + 3 * 4
console.log(total1)

let total2 = (2 + 3) * 4
console.log(total2)

let avarege = 9.5 + 7 + 5 / 3
console.log(avarege) // Aqui foi feito de forma errada, pois ele prioriza a divisão no caso, e precisamos para uma média, somar todas as 'notas' e somente depois dividirmos para se ter a média, corrigindo ficaria assim:

let avarege2 = (9.5 + 7 + 5) / 3
console.log(avarege2)