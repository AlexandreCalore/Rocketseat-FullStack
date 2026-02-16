import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  { //Tratamos cada tipo de rota 
    method: "GET",
    path: "/products",
    controller: (request, response, database) => {
      const products = database.select("products")
      
      return response.end("Lista de produtos")
    } 
  },
  { 
    method: "POST",
    path: "/products",
    controller: (request, response, database) => { 
      const {name, price} = request.body

      database.insert("products", {name, price})

      return response.end("Produtos cadastrado!" + JSON.stringify(request.body)) 
    } 
  },
    { 
    method: "DELETE",
    path: "/products/:id", //id de produto a ser deletado passado no proprio caminho da rota
    controller: (request, response) => { 
      return response.end("Removido") 
    } 
  }
].map((route) => ({
  ...route, // conteúdo da rota
  path: parseRoutePath(route.path),
}))
