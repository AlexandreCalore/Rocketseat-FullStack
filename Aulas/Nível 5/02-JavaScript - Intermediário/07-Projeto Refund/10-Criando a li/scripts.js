//Selecionando os elementos do formulário
const form = document.querySelector("form")
const amount = document.querySelector("amount")
const expense = document.querySelector("expense")
const category = document.querySelector("category")

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

//Captura o envento de submit do formulário para obter os valores.
form.onsubmit = (event) => {
  //Previne o comportamento padrão de recarregar a página
  event.preventDefault()

  //Cria um objeto com os detalhes da nova despesa
  const newExpense = {
    id : new Date().getTime(),
    expense : expense.value,
    category_id : category.value,
    category_name : category.options[category.selectedIndex].text,
    amount : amount.value,
    created_at: new Date()
  }
  //Chama a função que irá adicionar o item na lista.
  expenseAdd(newExpense)
}

function expenseAdd(newExpense){
  try {
    //Cria o elemento "li" para adicionar na lista
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.")
    console.log(error)
  }
}