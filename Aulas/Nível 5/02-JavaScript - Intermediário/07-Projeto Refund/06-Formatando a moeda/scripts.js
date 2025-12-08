//Selecionando os elementos do formulário
const amount = document.querySelector("amount")

//Captura o evento de input para formatar o valor.
amount.onInput = () => {
  //Obtém o valor atual do input e remove os caracteres não númericos
  let value = amount.value.replace(/\D/g, "")

  //Transformando o valor em centavos
  value = Number(value) / 100

  //Atualiza o valor do input
  amount.value = formatCurrencyBRL(value)
}

formatCurrencyBRL = (value) => {
  // Formata o valor do padrão BRL
  value = value.tolocalestring("pt-BR", {
    style: "currency",
    currenct: "BRL",
  })
  return value
}