// Vamos identificar um evento em um elemento especifico

const ul = document. querySelector("ul")

ul.addEventListener("scroll", (event) => {
console.log(ul.scrollTop) // toda vez que interagirmos com a lista através do evento de scrollagem, ele vai dispirar no console, a distancia até o topo

// De posse desses dados, por exemplo do final da lista. Conseguimos manipular a mesma

if(ul.scrollTop > 300) { // Estamos usando uma função de scrollTo, com o objeto definindo a posição do topo para 0
 ul.scrollTo({
  top: 0,
  behavior: "smooth"
 })
}
}) // Lembrando que são 2 parâmetros: 1 evento a ser observado, 2° função a ser executada quando o evento acontecer.

const button = document.querySelector("button")

button.addEventListener("click", () => {console.log("clicou!")})