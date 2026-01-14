// Interface x Type

interface IBaseProduct { // extensão da interface
    price: number
}

interface IProduct extends IBaseProduct {
    id: number,
    name: string
}

type TBaseProduct = { // extensão do type
    price: number
}

type TProduct = TBaseProduct & {
    id: number,
    name: string
}

// O uso até aqui é igual, o que muda é a sua declaração

let product1: IProduct = { id: 1, name: "Produto 1", price: 500, quantity: 12}
let product2: TProduct = { id: 1, name: "Produto 2", price: 550}


// Diferenças práticas

// Você pode sobscrever Interfaces, mas Types não, exemplo abaixo:


interface IProduct {
    quantity: number 
} // Quando a interface encontra outra com o mesmo nome, ele as unifica. 

//estamos nomeando (alias) de um tipo primitivo
type TypeString = string 
type TypeNumber = number

// Quando utilizar um ou outro?

// É mais comum no mercado utilizar Interfaces, mas vai da escolha de cada um.