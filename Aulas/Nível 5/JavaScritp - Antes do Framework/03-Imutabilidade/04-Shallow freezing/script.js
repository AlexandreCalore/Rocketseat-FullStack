//Congelando o objeto para evitar sua modificação

const book = {
  title: "Estruturas de Dados",
  category: "Tecnologia",
  author: {
    name: "Carlos Ferreira",
    email: "carlos.ferreira@example.com"
  }
}

// O JS em si não impõe restrições à modificação dos objetos
book.category = "HTML"
console.log(book)

//Agora iremos congelar
Object.freeze(book) 
book.category = "CSS" // Não modifica

//Object.freeze() Faz apenas um congelamento razo, sem evitar a edição de objetos aninhados

book.author.name = "Alexandre" //Com isso, mesmo estando congelado é possível auterar objetos aninhados