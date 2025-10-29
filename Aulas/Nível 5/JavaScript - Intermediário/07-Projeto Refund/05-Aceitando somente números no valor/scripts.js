//Selecionando os elementos do formulário
const amount = document.querySelector("amount")

amount.onInput = () => {
  let value = amount.value.replace(/\D/g, "")

  amount.value = value
}