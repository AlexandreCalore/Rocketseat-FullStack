/*
Optional Chaining (?.) - encadeamento opcional.

Se a propiedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar o erro.

Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propiedades obrigatórias
*/

const user = {
  id: 1,
  name: "Rodrigo",
/*  adress: {
    street: "Avenida Rio Claro",
    city: "São Paulo",
    geo: {
      latitude: 47.808,
      longitude: 17.5674,
    },
  },
Comentamos essa parte de endereço para simular o acesso de uma propiedade que não existe ainda*/
  message: function() {
    console.log(`Olá ${this.name}!`)  
  }
}

console.log(user)
console.log(user.name)
console.log(user.adress.street) //Desta maneira vai gerar erro, pois não "existe" essas propiedades dentro do código

//Para contornar isso, devemos colocar '?' no console da propiedade

console.log(user?.adress?.street) //Ao invés de gerar uma excessão, vai retornar undefined

//O mesmo vale para métodos:

user.message?.()