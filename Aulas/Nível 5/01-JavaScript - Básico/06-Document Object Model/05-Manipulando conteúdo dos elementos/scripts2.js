// Vamos selecionar no momento o elemento guest-1 e posteriormente exibi-lo no console. O objetivo é alterar/manipular o conteúdo/texto dentro do elemento

const guest = document.querySelector("#guest-1")
console.log(guest)

// Mas nesse caso ele mostra o elemento como um todo, tags, classes etc. Então adequaremos o código para exibir somente o texto do elemento

console.log(guest.textContent) // o '.' serve para sinalizar no código, que estamos querendo acessar uma propiedade desse elemento.

//Além de permitir a exibição, conseguimos atribuir um novo texto

guest.textContent = "Alexandre Calore" // Ou seja, o elemento guest (que recebeu acima o elemento com id 'guest-1'), a propiedade textContent (conteúdo do texto), receberá a seguinte string.

// Mas nesse exemplo, dentro elemento com ID de guest 1, existe outra tag dentro dele de span, e se não tratarmos isso, ela vai ser substituida junto por conta de não a termos selecionada. O textContent substitui tudo o que está dentro como texto.

// Para contornar isso devemos especificar ainda mais o caminho a ser seguido, colocando 'span após o guest, manipulando o que está dentro da span e nao do guest 1
const guest = document.querySelector("#guest-1 span")
console.log(guest.textContent = "Alexandre Calore")

// Existe também o InnerText, que retorna sem formatação

guest.innerText = "Alexandre Calore"

// Já o InnerHTML, que retorna o HTML do elemento, como texto ex: '<span>Alexandre</span>'

guest.innerHTML = "Alexandre Calore"

// A diferença principal entre Innertext e TextContent é o fato de que:

// InnerText: retorna somente o conteúdo visível
// TextContent: retorna o conteúdo visível e oculto

//Entende-se como vísivel e oculto, tudo aquilo, por exemplo, no css esteja configurado para esconder do conteúdo visivel, ou seja no HTML,