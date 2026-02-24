import { Router } from "express";
import { myMiddleware } from "../middleware/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsController = new ProductsController()
const productsRouter = Router()

productsRouter.get("/",productsController.index) //Separamos as funcções do Controller para ficar mais organizado, e ao invés de executar a função diretamente na rota, chamamos a função do Controller, que é responsável por lidar com a lógica de negócio relacionada aos produtos. Dessa forma, mantemos as rotas mais limpas e organizadas, e a lógica de negócio fica centralizada no Controller, facilitando a manutenção e escalabilidade da aplicação.

productsRouter.post("/",productsController.create)

export { productsRouter } 