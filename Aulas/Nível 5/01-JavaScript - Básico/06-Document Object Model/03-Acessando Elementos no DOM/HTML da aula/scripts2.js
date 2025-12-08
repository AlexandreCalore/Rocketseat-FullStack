/*
Aprendizados da aula:
- Selecionar titulo do documento
- Exibir estrutura do documento
- Exibir propiedades do objeto
- Selecionar elementos pelo ID
- Selecionar elementos pela TAG
- Selecionar elementos pelo CLASS
*/


// 1° Vamos visualizar o conteúdo do document.

console.log(document) // De onde vem esse document? é uma variável especial que ja vem com o JS para acessarmos.

//Com esse código, no console do HTML, conseguimos ver a estrutura do HTML assim como é no "inspecionar página", pois ele nos mostra uma referência do nosso DOM.


//----------------------------------Acessando elementos do HTML------------------------------------------------

//Como obter o title da página pelo JS

console.log(document.title) //Acessamos o elemento título dentro do nosso document







// Como acessar um elemento pelo ID/Identificador de cada elemento

const guest = document.getElementById("guest-2")
console.log(guest)

/*

Criamos uma constante para apenas recuperar o elemento, e não modifica-lo. 

usamos a variável especial document, e dentro dela existe um método chamado getElementById que permite acessar elementos baseado no ID, atribuindo ele a nossa constante.

Por fim, printamos ele a tela através de console.log

*/







// Acessando as propiedades do objeto

console.dir(guest)





// Acessando por meio de classes (class)

const guestByClass = document.getElementsByClassName("guest") // Armazenamos o elemento na constante

console.log(guestByClass) // No caso de class como seletor, ele pode retornar mais de 1 componente, se acaso tiverem mais componentes utilizando ele ao mesmo tempo.

// Para contornar isso, podemos utilizar o seletor de itens, para pegar o elemento de acordo com a posição

console.log(guestByClass.item(0))

// Ou então printar como se fosse uma lista

console.log(guestByClass[1])





// Selecionar elementos pela tag

const guestsTag = document.getElementsByTagName("li")
