// Eventos de formulário

const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("você fez um submit no formulário")
}

//Podemos fazer também com addEventListener

form.addEventListener("Submit", (event) => {
  event.preventDefault() // serve para previnir o comportamento padrão do elemento
  console.log("você fez um submit no formulário")
})

/* A diferença em utilizar o onSubmit / addEventListener:
      onsubmit = vai utilizar apenas o ultimo que foi inserido no código.
      addEventListener = vai executar todos os códigos existentes. */