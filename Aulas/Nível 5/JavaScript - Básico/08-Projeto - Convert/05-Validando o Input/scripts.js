console.log('JS Carregado') 

const amount = document.getElementById("amount")

const currency = document.getElementById("") // Vamos acessar os valores da moeda selecionando pelo ID o elemento

const form = document.querySelector("form") // Vamos acessar através do query selector o form, para monitorar o evento submit

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// A linha de raciocínio é acessar o valor da moeda no momento que é enviado (submit) o formulário

form.onsubmit = (event) => {
  event.preventDefault()// para desativar o comportamento padrão (recarrefar a tela)

  console.log(currency.value) //para vermos o valor atribuido a currency, o tipo de moeda.

}