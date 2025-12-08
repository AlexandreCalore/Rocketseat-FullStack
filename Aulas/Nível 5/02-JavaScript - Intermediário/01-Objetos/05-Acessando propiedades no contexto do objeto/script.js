//Acessando propiedades no contexto do objeto

const user = {
  name: "Alexandre",
  message: function() {
    console.log(`Olá ${this.name}`) //Acessamos a propiedade dinamicamente, dessa vez utilizando a palavra reservada "this", que teria o mesmo efeito de usar o nome do objeto + método (user.message()). A unica coisa a se atentar, só funciona com o function, arrow function não funciona
  }
}

user.message() 