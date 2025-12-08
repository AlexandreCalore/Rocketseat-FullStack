let fruits = ["Apple", "Watermelon", "Strawberry"]

let position = fruits.indexOf("Watermelon") //Aqui estamos atribuindo o método de IndexOf do array dentro da variavel position, pegando dela a posição do item que passamos para ser procurado.
console.log(position)

//Se acaso ele não encontrar o item, ele retorna -1.

fruits.splice(1, 2) //Aqui definimos a posição de ínicio do recorte. Passamos que, apartir do índice 1, remova até o índice 2. Podendo utilizar dele para remover um item pela posição retornada