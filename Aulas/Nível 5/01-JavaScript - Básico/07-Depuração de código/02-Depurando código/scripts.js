const input = document.querySelector('input')
const form = document.querySelector('form')

form.onsubmit = (event) => {
  event.preventDefault()

  const value = input.value
  const hasNumberRegex = /\d+/g // nesse caso utilizamos 'd' minusculo

  if (hasNumberRegex.text(value)){
    alert('O texto possui números, por favor digite corretamente')
  } else{
    alert('Cadastro realizado')
  }

  // Vamos iniciar o debug agora.

  // Para isso vamos no inspecionar do navegador, e adentramos a aba 'Sources', tendo acesso então aos arquivos do programa.

  // Tendo feito todas essas etapas, podemos inserir agora o breakpoint, clicando na linha desejada para iniciar o debug. Além disso, o programa conta com ferramentas para avançar/retroceder, visualizar o conteúdo de uma variável por exemplo, etc.
} 