console.log('JS Carregado') // inserimos esse console para validar se o arquivo foi conectado

const amount = document.getElementById('amount') // Vamos capturar o valor com base nesse id, que está ligado diretamente ao input


//Evento para manipular input, observando apenas inserção de números
amount.addEventListener("input", (event) => {
  console.log(amount.value)
} )