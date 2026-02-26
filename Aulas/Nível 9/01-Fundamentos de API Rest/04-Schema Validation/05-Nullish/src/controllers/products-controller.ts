import { Request, Response } from "express"
import { AppError } from "../utils/app-error";
import { z } from "zod";

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

      const bodySchema = z.object({ //Aqui estamos validando o corpo da requisição, verificando se o nome é uma string e o preço é um número
        name: z.string(),
        price: z.number() //Poderiamos usar o .Nullish() para permitir receber vazio
      })

      const {name, price} = bodySchema.parse(request.body) //Aqui estamos validando o corpo da requisição, se o nome ou preço não for do tipo esperado, o Zod vai lançar um erro, sendo mais eficiente que as validações manuais, pois ele já tem uma série de validações pré-definidas, além de ser mais fácil de ler e manter o código. Posteriormente desestruturamos ela e atribuimos a constante.

      /* 
        if (!name || !price){ //Verifica se o nome ou preço do produto foi enviado
          throw new AppError("Nome e preço do produto é obrigatório", 400)
        }

        if (name.length < 6){
        throw new AppError("O nome do produto deve ter no minimo 6 caracteres", 400)
        }

        if (price <= 0){
          throw new AppError("O preço do produto deve ser maior que 0", 400)
      }
      */
     response.status(200).json({name. price, user_id: request.user_id});
  }
  

  show(request: Request, response: Response){}

  update(request: Request, response: Response){}

  remove(request: Request, response: Response){}
}

export { ProductsController }