export async function jsonBodyHandler(request, response){
  // Criamos um array para armazenar os chunks recebidos
  const buffers = []

  // Coletamos todos os chunks recebidos da requisição
    for await(const chunk of request){
      buffers.push(chunk)
    }

    try {
      // Concatenamos todos os chunks e convertermos para string, de string para JSON.
    console.log(buffers)
  
    request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
      request.body = null 
    }

    //Define o Header de resposta como JSON
    response.setHeader("Content-Type", "application/json")
}