//Cotação de moedas do dia

const USD = 4.87
const EUR = 5.37
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") //Basicamente ele está filtrando instantaneamente ao fazer o input
})

form.onSubmit = (event) => {
  event.preventDefault() 

  switch (currency.value){
  case "USD":
    convertCurrency(amount.value, USD, "US$" ) // Quando utilizamos alguma var/const em caixa alta, para melhorar a legibilidade, pois fica claro que estamos usando de algum lugar.
    break
  case "EUR":
    convertCurrency(amount.value, EUR, "€" ) 
  break
  case "GBP":
    convertCurrency(amount.value, GBP, "£" ) 
  break
  }

}

//Faremos agora a conversão da moeda selecionada através de função. Para isso utilizaremos a estrutura de switch case, além da criação de constantes para atribuir os valores dos códigos
function convertCurrency (amount, price, symbol){
  console.log(amount,price,symbol)
}