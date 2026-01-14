type Person = {
    id: number,
    name: string
}

type Teacher = Person & { //Aqui dizemos que Teacher é igual ao tipo Person + suas caracteristicas própias
    subjects: string[]
}

type Student = Person & {
    age: number
}