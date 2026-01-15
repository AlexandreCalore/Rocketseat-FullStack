const scores: Record<string, number> = {  //tipo da chave e validateProgram
    calore : 10, //string e o valor number
    alexandre: 14,
}

//Limitando PaymentValidationErrors
type Profiles = "admin" | "user" | "guest"

const user: Record<Profiles, number> = {
    "admin" : 1,
    "guest": 2,
    "user": 3
} //Limitamos as propiedades e seus valores nesse caso

//Objetos personalizados
interface User {
    name: string,
    email: string
}

const users: Record<number, User> = { //number sendo o id do usuário e o User o valor
    1: {name: "calore", email: "calore@gmail.com"}
}