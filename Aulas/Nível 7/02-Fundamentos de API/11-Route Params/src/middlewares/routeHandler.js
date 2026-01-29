import {routes} from '../routes.js';

export function routeHandler(request, response) {
  // Procura dentro da lista, a rota.
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url
  }) 

  if(route){
    return route.controller(request, response)
  }

  return response.writeHead(404).end("Rota não encontrada! Método e URL: " + method + url)
}