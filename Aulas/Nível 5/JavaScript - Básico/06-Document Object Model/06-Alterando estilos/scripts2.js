// Vamos adicionar dinamicamente a borda de erro utilizando JS

const input = document.querySelector("#name")

// Aqui estamos utilizando uma propiedade para acessar as classes do elemento e adicionar uma
input.classList.add("input-error")

// Removendo uma classe
input.classList.remove("input-error")

// Acaso a clase ja existir dentro do elemento, ele remove, caso contrário, adiciona. útil para exibir algo ao usuário.
input.classList.toggle("input-error")

const button = document.querySelector("button") // Podemos pegar um elemento pelo nome da própia tag, no caso, button

button.style.backgroundColor = "red" // Acessamos as propiedades do css dentro do própio elemento, e conseguimos altera-las