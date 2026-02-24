import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request : Request, 
  response : Response, 
  next : NextFunction){
  request.user_id = "123456" //Adicionando um novo campo à requisição, que pode ser acessado posteriormente em outras partes da aplicação, como em rotas ou outros middlewares.
  request
  console.log("Passou pelo middleware")

  return next() //Chama a próxima requisição
}