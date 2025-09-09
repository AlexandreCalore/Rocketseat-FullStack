console.log('JS Carregado') // inserimos esse console para validar se o arquivo foi conectado

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") //Basicamente ele está filtrando instantaneamente ao fazer o input
})

form.onSubmit = (event) => {
  event.preventDefault() 

}