interface Person{
    id: number,
    name: string
}

interface Teacher extends Person{
 //   id: number,
 //   name: string,
    subject: string[]
}

interface Student extends Person{
 //   id: number,
 //   name: string,
    age: number
}

let teacher: Teacher = { id: 1, name: "Calore", subject: ["JavaScript", "TypeScript"]} //Definimos uma variável e atribuimos a ela as propiedades existentes na interface

let student: Student = { id: 1, name: "Alexandre", age: 22}

// Podemos extender as propiedades que se repetem para reaproveita-las, então nesse momento comentei as propiedades de ambas interfaces. Criamos uma outra interface somente com essa propiedade e depois extendemos essas propiedades nas demais.