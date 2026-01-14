// Asserção de tipo: usar quando o TypeScritp não sabe qual é a tipagem de um objeto, mas você garante a ele que sabe.

type UserResponse = {
    ui: number,
    name: string,
    avatar: string
}

let userResponse = {

} 

//userResponse. // Typescript nao conhece quais são as opções disponiveis

let userResponseProps = {

} as UserResponse // Aqui aplicamos a asserção de tipo, como se fosse uma conversão dizendo que esse objeto é igual ao tipo indicado
