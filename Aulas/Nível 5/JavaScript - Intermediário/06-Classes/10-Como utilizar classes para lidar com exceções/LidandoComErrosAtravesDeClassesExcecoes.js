let obj = []
let index = 300
try{
  obj.execute() //Por se tratar de um array, ela não possui essa função, o que na hora de visualizar, a classe TypeError deixa esplicito isso no console.log
  if(!obj.includes(17)){
    throw new Error("17 não está disponível") //lançamos uma nova exceção a partir da classe construtora de erro
  }

  if (index > 99){
    throw new RangeError("O número está fora do intervalo. Escolha um número de 0 a 99")
  }
} catch (error) {
  if(error instanceof TypeError){ //Verificamos no caso de erro, que se acaso a classe que gerou ela for 
    console.log("método indisponível.")
  } else if (error instanceof RangeError){
    console.log(error.message) //Filtramos para aparecer somente a mensagem, sem o nome da classe junto (rangeError por exemplo)
  }else{
    console.log("Não foi possível realizar a ação") //Mensagem genérica para quando não conseguir identificar a classe. 
  }

  console.log(error)
}

//A ideia, em um projeto grande, é tratar por meio de classes, os tipos de erros que podem dar, e como mostrar isso ao usuário, facilitanto então na hora de descobrir aonde precisa pega-los