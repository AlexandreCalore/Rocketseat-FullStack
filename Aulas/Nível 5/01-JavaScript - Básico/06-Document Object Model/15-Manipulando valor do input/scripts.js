// Vamos selecionar o elemento input para trabalharmos com um evento dele.
const input = document.querySelector("input")
const form = document.querySelector("form")

input.addEventListener("input", (event) => { // evento de input é disparado quando o input receber algum valor
  console.log(input.value) // para vermos o que está sendo inserido no input

  const value = input.value

  const regex = /\D+/g

  console.log(value.match(regex)) // match = serve para verificar nosso padrão, no caso, no modelo '/\D+/g', retornando se for válido

  // Vamos agora trabalhar com o cenário de que queremos apenas verificar se existe número no input

  const isValid = regex.test(value) // esse 'test' serve para somente testar se algo é válido ou não, no caso, se digitarmos algo que esteja dentro do padrão associado, ele retornará verdadeiro.


})

// Agora vamos adicionar outro evento para remover esses valores.

form.addEventListener("submit", (event) => { // evento de submit é disparado quando o formulário for enviado
  event.preventDefault()
  const regex = /\D+/g
  const value = input.value.replace(regex, "") // Ou seja, se identificarmos uma série de caracteres seguidos, serão removidos e posteriormente substituidos por vazio, ao clicar em enviar do formulário

  // Ou se quisermos apenas fazer uma verificação:

  if(!regex.test(valor)){
    alert("Padrão não atendido, reformule o texto!")
  }
})
