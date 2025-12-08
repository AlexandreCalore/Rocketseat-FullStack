//Cotação de moedas do dia

const USD = 4.87
const EUR = 5.37
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer") // Vamos atribuir o footer a uma const

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") //Basicamente ele está filtrando instantaneamente ao fazer o input
})

form.onSubmit = (event) => {
  event.preventDefault() 

  switch (currency.value){
  case "USD":
    convertCurrency(amount.value, USD, "US$" ) 
    break
  case "EUR":
    convertCurrency(amount.value, EUR, "€" ) 
  break
  case "GBP":
    convertCurrency(amount.value, GBP, "£" ) 
  break
  }

}

function convertCurrency (amount, price, symbol){
  try {
    footer.classList.add("show-result") // adicionamos uma classe de estilo do CSS, que exibe o resultado  

  } catch (error) {
    footer.classList.remove("show-result") 
    
    
    console.log(error)
    alert('não foi possível converter') //trabalharemos o possível erro, exibindo-o no console e removendo o 'show' do footer
  }
}