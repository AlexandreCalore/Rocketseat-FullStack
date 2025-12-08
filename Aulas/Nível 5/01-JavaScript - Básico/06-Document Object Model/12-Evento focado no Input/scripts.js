const input = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo, incluindo control, shift etc)

input.addEventListener("keydown", (event) => {
  console.log(event) // para pegar todos os registros

  console.log(event.key) // para pegar somente a letra
})

// Temos também o evento de keypress


//Keypress - quando uma tecla do tipo caractere é pressionada (letras, numeros, pontos etc. (evita teclas especiais como: control, shift etc))
input.addEventListener("keypress", (event) => {
  console.log(event) 

  console.log(event.key) 
})

input.onchange = () => inputChange()  // Para quando você sai do input no caso, saindo de dentro do elemento.

function inputChange (){
  console.log("O INPUT MUDOU")  
}