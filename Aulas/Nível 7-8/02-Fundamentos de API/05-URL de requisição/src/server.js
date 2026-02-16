import http from "node:http";

const server = http.createServer((request, response) => { 
  const { method, url } = request 

  if (method === "GET"  && url === "/products"){
    return response.end("Lista de produtos")
  }
  if (method === "POST"  && url === "/products"){
    return response.end("Produtos cadastrado!")
  }
  
  return response.writeHead(404).end("Rota não encontrada! Método e URL: " + method + url)
})

server.listen(3333) 