// Shallow Copy (cópia superficial): não pega os itens aninhados

const htmlCourse = {
  course: "HTML",
  students: [{name: "Alexandre", email: "calore@gmail.com"}],
}

let jsCourse1 = {
  ...htmlCourse, //Os mesmo alunos de html devem estar inscritos nesse curso de JS
  course: "JavaScript",
}

//Até aqui, se observarmos os 2 objetos, veremos que o ricardo estará em ambos, devido ter feito uma cópia rasa / referência. Não pegando valores por exemplo do array de objetos.
jsCourse1.students.push({name: "Ricardo", email: "ricardo@gmail.com"})
console.log(htmlCourse, jsCourse1)

// Deep Copy (cópia profunda)

const jsCourse2 = {
  ...htmlCourse.students, //Os mesmo alunos de html devem estar inscritos nesse curso de JS
  course: "JavaScript",
  //students: [...htmlCourse.students , {name: "Ricardo", email: "ricardo@gmail.com"}] //Agora foi feita a cópia real de todas as propiedades do objeto, passando por meio de spread os valores que existiam dentro de studentes do htmlCourse para dentro do jsCourse
}

//jsCourse2.students.push({name: "Leandro", email: "leandro@gmail.com"}) //Podemos adicionar tanto dentro do objeto, quanto fora.

//É possível adicionar um novo array ao objeto, aproveitando o conteúdo do htmlCourse

jsCourse2.students = [
  ...htmlCourse.students,
  {name: "Alessandra", email: "alessandra@gmail.com"}
]

//Utilizar sempre deep copy quando quiser manipular um objeto diferente e não correr o risco de manipular um objeto