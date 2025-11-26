//Função assíncrona que retorna uma Promise

function asyncFunction (){
  return new Promise ((resolve, reject) => {
    //Simula uma operação assíncrona
    setTimeout(() => {
      if(isSucess){
        resolve('Sucesso')
      } else {
        reject('Erro')
      }   
    }, 3000) //Simula uma operação assíncrona que leva 3 segundos
    const isSucess = true
  })
}

//Visualizando que o retorno é uma promise

console.log(asyncFunction()) //Aparece como pendente pois não foi resolvida, mas continua a executar o restante do código independente de estar pendente.

//Devido essa Promise retornar valores, podemos utilizar métodos para trabalhar com seus retornos.

asyncFunction()
  .then((resolvida) => console.log(resolvida)) //Serve para coletar o retorno da promise

  .catch((error) => console.log(error)) // Para o caso de der erro, capturamos o erro

  .finally(() => console.log('Finalizado')) //Executa independete da situação