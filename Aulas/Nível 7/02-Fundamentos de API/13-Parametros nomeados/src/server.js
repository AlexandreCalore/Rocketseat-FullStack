import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer(async (request, response) => { 
  const { method, url } = request 

  await jsonBodyHandler(request, response)
  routeHandler(request, response)

  //Exemplo mostrado em aula de parametro não nomeado, é identificado através do '?' e podendo ter mais de uma categoria com '&': http://localhost:3333/products?category=computer&price=100
  //São utilizados para aplicar filtros, paginação, dados opicionais...
  //Mas não é recomendado para passar dados sensiveis
})

server.listen(3333) 