//Dentro do própio package.json, criamos o script para compilar o nosso babel de forma mais simples. Apenas sendo necessário o comando "npm run build"

class User{
  constructor(email){
    this.email = email
  }

  sendMessage(){
    console.log(`Mensagem enviada para ${this.email}`)
  }
}

let user = new User("caloredev@gmail")
user.sendMessage()

//Agora compilaremos esse main.js, e apontaremos para ele dentro do HTML