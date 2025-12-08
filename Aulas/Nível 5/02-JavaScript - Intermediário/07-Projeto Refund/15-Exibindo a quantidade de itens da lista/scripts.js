//Selecionando os elementos do formulário
const form = document.querySelector("form")
const amount = document.querySelector("amount")
const expense = document.querySelector("expense")
const category = document.querySelector("category")

//Seleciona os elementos da lista
const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span")

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

//Adiciona novo item na lista
function expenseAdd(newExpense){
  try {
    //Cria o elemento "li" para adicionar na lista
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    //Cria o ícone da categoria
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    // Cria a info da despesa.
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    //Cria o nome da despesa.
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

    //Cria a categoria da despesa
    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.category_name

    //Cria o valor da despesa
    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$","")}`


    //Cria o ícone de remover
    const removeIcon = document.createElement("img")
    removeIcon.setAttribute("src","img/remove.sgv")
    removeIcon.setAttribute("alt", "remover")

    //Adiciona name e categoria na div das informações da despesa.
    expenseInfo.append(expenseNamem, expenseCategory)

    //Adiciona as informações no item
     expenseItem.append(expenseIcon, expenseInfo)
    
    //Adiciona o item na lista
    expenseList.append(expenseItem)

    //Atualiza os totais
    updateTotals()
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.")
    console.log(error)
  }
}

// Atualiza os totais
function updateTotals(){
  try {
    //Recupera todos os itens(li) da lista(ul)
    const items = expenseList.children
    
    //Atualiza a quantidade de itens da lista
    expensesQuantity.textContent = `${items.length} ${items.length} > 1 ? "despesas" : "despesa"`
  } catch (error) {
    console.log(error)
    alert("Não foi possível atualizar os totais")
  }
}