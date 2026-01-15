interface User {
    id: number,
    name: string,
    email?: string // ? -> para ser opcional
}

const newUser: User = {id:1, name: "calore", email: "calore@gmail.com"}

const updateUser:   Partial<User> = {name: "Alexandre"} //Transforma todas as propiedades do User como sendo opcionais