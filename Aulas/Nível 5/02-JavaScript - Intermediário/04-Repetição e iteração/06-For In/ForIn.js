// for .... in executa iterações a partir de um objeto e percorre as propiedades

let person = {
  name: 'Alexandre',
  surname: 'Calore',
  email:'alexandre@gmail.com'
}

let steps = 1

for (let property in person){ //Passa por todas as propiedades do objeto

  console.log(property)
  console.log(person[property])

}

let students = ['Alexandre', 'Carlos', 'Guilherme']

for (let index in students){
  console.log(students[index])
}