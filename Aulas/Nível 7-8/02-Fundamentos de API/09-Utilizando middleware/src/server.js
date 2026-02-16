import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonHandler.js";

const server = http.createServer(async (request, response) => { 
  const { method, url } = request 

  await jsonBodyHandler(request, response) // Chamamos o middleware para todas as requisições 

  if (method === "GET"  && url === "/products"){
    return response.end("Lista de produtos")
  }

  // Problema mencionado na aula, se acaso quisermos recuperar o conteúdo de outra rota, teremos de repetir o código novamente? Isso acarreta em duplicação de código, dificulta manutenção etc. Por isso vamos utilizar o middleware para todas as requisições e remontar o conteúdo todas 

  if (method === "POST"  && url === "/products"){
    return response.end("Produtos cadastrado!" + JSON.stringify(request.body)) // dessa forma retorna o body que foi montado no middleware
  }
  
  return response.writeHead(404).end("Rota não encontrada! Método e URL: " + method + url)
})

server.listen(3333) 