const book = {
  title: "objetps imutáveis",
  category: "JS",
  author : {
    name: "Carlos Ferreira",
    email: "carlos.ferreira@example.com"
  }
}

const updateBook = {
  ...book,
  title: "Criando um Front-end moderno com HTML",
  category: "HTML",
  type: "Programming"
}

// Original intacto.
console.log(book)

// Modificado.
console.log(updateBook)

// Utilizando operador de desestruturação (rest operator) para rmeover propiedades.

const {category, ...BookWithoutCategory} = book // estratégia utilizada para filtrar uma categoria 

console.log(BookWithoutCategory)

//São maneiras de manipular o objeto sem alterar o original