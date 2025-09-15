// Para criamos um array, podemos usar tanto um construtor quanto colchetes

// let fruits = new Array(); Criando por meio de construtor

let fruits = ['Apple', 'Banana', 'Orange'] // Criamos o array por meio de colchetes e definimos seus itens
console.log(fruits)
console.log(fruits.length) // Para verificar o tamanho do array

console.log(fruits[1]) // Estamos navegando pelo índice

console.log(fruits[7]) // Se tentarmos acessar um índice que não existe, ele retornará undefined

// Mas se acaso quisermos acessar o ultimo registro do array sem ser de forma manual, podemos fazer da seguinte forma:

console.log(fruits[fruits.length - 1]) // acessamos o array 'fruits', e na posição do item, usamos o método lenght do própio array, para nos retornar o tamanho da lista, e depois subtraimos 1 para igualar o index com a posição real dos itens.