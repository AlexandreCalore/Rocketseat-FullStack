// Evento = ação do usuário

// Vamos iniciar acessando a janela do usuário

window.addEventListener("load", () => {
  console.log("A página foi carregada")
}) // Significa que estamos adicionando um método que vai ficar observando a janela do usuário

// Adicionando um método direto no DOM

addEventListener("click", (event) => {
  event.preventDefault() // no nosso contexto, onde o botão de envio tem o atributo de "submit", ele vai enviar e resetar a página. Esse código vai prevenir o comportamento padrão do botão.

  console.log(event) // Vai printar no console, informações de onde estava o ponteiro etc.
  console.log(event.target) // Vai printar no console, informações do elemento que clicamos.
  console.log(event.target.textContent) // Vai printar no console, o conteúdo daquele elemento que foi clicado.

}) // Conseguimos recuperar todas as informações do evento passando um parâmetro/variável nos parenteses