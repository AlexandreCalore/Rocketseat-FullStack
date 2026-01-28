import http from "node:http";

const server = http.createServer(async (request, response) => { 
  const { method, url } = request 

  if (method === "GET"  && url === "/products"){
    return response.end("Lista de produtos")
  }

  if (method === "POST"  && url === "/products"){
    const buffers = [] // Como a API trabalha com chunks para enviar o conteúdo, precisamos armazenar esses pedaços em um array

    for await(const chunk of request){
      buffers.push(chunk)
    }

    console.log(buffers)

    console.log(Buffer.concat(buffers).toString()) //esse Buffer é própio do node

    /* retorno do console:
      [
        <Buffer 7b 0a 09 22 6e 61 6d 65 22 3a 20 22 74 65 63 6c 61 64 6f 22 2c 0a 09 22 70 72 69 63 65 22 3a 20 31 32 30 2e 33 0a 7d>
      ]

      {
          "name": "teclado",
          "price": 120.3
      }
    */
   
    return response.end("Produtos cadastrado!")
  }
  
  return response.writeHead(404).end("Rota não encontrada! Método e URL: " + method + url)
})

server.listen(3333) 