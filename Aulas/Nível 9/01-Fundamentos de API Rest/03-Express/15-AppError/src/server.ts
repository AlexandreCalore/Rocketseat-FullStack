import express, { NextFunction } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;

const app = express();
app.use(express.json()) 
app.use(routes)

// Lançamos aqui o catch para tratar a exceção, estando no final de tudo, sendo capaz de capturar qualquer erro que aconteceu antes de qualquer coisa

app.use((error: any , request : Request, response : Response, _ : NextFunction) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({message: error.message})
}
}
)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))