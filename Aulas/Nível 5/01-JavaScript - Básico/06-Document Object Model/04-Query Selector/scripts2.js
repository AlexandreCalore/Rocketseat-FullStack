//Colocamos dentro de "" uma combinação para estilizar os elementos, e não somente um elemento


const guest = document.querySelector() //É muito parecido com getElementByID

// Acessa o elemento pelo seletor ID
guest = document.querySelector("#guest-1")

// Acessa o elemento pelo seletor CLASS
guest = document.querySelector(".guest")

// Contudo somente esse código nos retorna o 1° elemento. Para contornar isso utilizamos o select ALL

guest = document.querySelectorAll(".guest")
console.log(guest)