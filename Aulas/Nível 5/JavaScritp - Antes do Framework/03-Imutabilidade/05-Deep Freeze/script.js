// Congelar recursivamente cada propiedade, congelando o objeto por completo

const book = {
  title: "objetps imutáveis",
  category: "JS",
  author : {
    name: "Carlos Ferreira",
    email: "carlos.ferreira@example.com"
  }
}

Object.freeze(book)

book.category = "CSS"
console.log(book) // Manteve a categoria

book.author.name = "Alexandre"
console.log(book) // Alterou a propiedade nome do autor mesmo o objeto estando congelado

function deepFreeze(object){ 
  const props = Reflect.owKeys(object) //devolve todas as propiedades do objeto em forma de array

  // Itera sobre todas as propiedades do objeto
  for(const prop of props) {
    //Obtém o valor associado a propiedade atual.
    const value = object[prop]

    // Verificamos se tem valor e se o tipo é de objeto ou função, aplicando o deepFreeze em objetos aninhados
    if(value && typeof value === "object" || typeof value === "function"){
      deepFreeze(value)
    }
  }
  return Object.freeze(object)
}

// Chama a função para congelar o objeto com Deep Freeze
deepFreeze(book)

