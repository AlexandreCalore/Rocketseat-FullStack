//Cotação de moedas do dia

const USD = 4.87
const EUR = 5.37
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description") // Selecionamos o ID de description para exibir a cotação da moeda

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
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
    description.textContent = `${symbol} 1 = ${price} `

    footer.classList.add("show-result")

  } catch (error) {
    footer.classList.remove("show-result") 
    
    console.log(error)
    alert('não foi possível converter')
  }
}