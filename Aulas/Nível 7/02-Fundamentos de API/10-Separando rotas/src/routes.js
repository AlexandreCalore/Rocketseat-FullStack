export const routes = [
  { //Tratamos cada tipo de rota 
    method: "GET",
    path: "/products",
    controller: (request, response) => { 
      return response.end("Lista de produtos")
    } 
  },
  { 
    method: "POST",
    path: "/products",
    controller: (request, response) => { 
      return response.end("Produtos cadastrado!" + JSON.stringify(request.body)) 
    } 
  }
]
