import { Request, Response } from "express"
import { AppError } from "../utils/AppError";

class ProductsController {
  /**
   * Padronizando o controller com apenas 5 métodos:
   * 
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * remove - DELETE para remover um registro
   */

  index(request: Request, response: Response){
      const {page, limit} = request.query
      response.send(`Product ${page} de ${limit}`);
  }

  create(request: Request, response: Response){
      const {name, price} = request.body

      if (!name || !price){ //Verifica se o nome ou preço do produto foi enviado
        throw new AppError("Nome e preço do produto é obrigatório", 400)
      }
      response.status(201).json({name, price, user_id: request.user_id})
  }
  

  show(request: Request, response: Response){}

  update(request: Request, response: Response){}

  remove(request: Request, response: Response){}
}

export { ProductsController }