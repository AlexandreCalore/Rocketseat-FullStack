//Elementos dentro do Array podem ser qualquer tipo de dado

let myArray = [
    "um texto",
    10,

    true,

    (param) => 
    {
        console.log(`Função dentro do Array + ${param}`)
    },

    { //Um objeto
        name: "Alexandre",
        email: "Calore"
    }
]

//Texto
console.log(myArray[0])

//número
console.log(myArray[1])

//Boolean
console.log(myArray[2])

//Função
myArray[3]("Parâmetro da função")

//Objeto
console.log(myArray[4].name, myArray[4].email) //Propiedade name + email do objeto no índice 4
