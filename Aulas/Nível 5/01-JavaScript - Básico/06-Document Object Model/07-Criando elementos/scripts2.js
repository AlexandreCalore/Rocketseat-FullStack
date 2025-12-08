// Vamos adicionar um novo elemento seguindo a estrutura já existente no HTML

const guests = document.querySelector("ul") // selecionamos o elemento

const newGuest =  document.createElement("li") // Estamos usando uma nova propiedade para criar novos elementos
const guestName =  document.createElement("span") 

// Vamos inserir o nome da pessoa

guestName.textContent = "Alexandre"
// Inserimos o nome da pessoa dentro da span, mas o que precisamos fazer aqui, é inserir essa Span dentro da 'li', pois ela não se encontra lá até o momento, apenas criamos ele.


// Append adiciona após o ultimo filho
newGuest.append(guestName)

// Prepend adiciona antes do primeiro filho
newGuest.prepend(guestName)

// Podemos adicionar mais de um, apenas passando mais um parâmetro nas chaves

const novoNome = document.createElement("span") // Criei um novo nome

novoNome.textContent = "Calore" // Atribui valor a ele

newGuest.appendChild(guestName, novoNome) // Passei 2 parâmetros

// Temos também o appendChild, que é a versão mais simples do append, aceitando apenas um parâmetro

appendChild(novoNome)

// Até o momento, criamos os elementos separados do "HTML" assim por dizer, portanto nesse momento devemos anexa-los aos elementos principais do HTML, faremos um APPEND para isso

guest.append(newGuest) // Inserimos no HTML, contudo ele vai sem formatação, então adicionaremos a seguir a classe referente a formatação desse elemento
newGuest.classList.add("guest")