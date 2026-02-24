import express from "express";
import { routes } from "./routes";

const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();
app.use(express.json()) // Habilitando o Express para interpretar requisições com corpo no formato JSON


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))