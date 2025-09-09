console.log('JS Carregado') // inserimos esse console para validar se o arquivo foi conectado

const amount = document.getElementById("amount")

amount.addEventListener("input", (event) => {
  console.log(amount.value) 
})