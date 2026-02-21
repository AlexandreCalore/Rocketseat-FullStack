import express from "express";

const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();

app.get("/products/:id", (request, response) => {
  response.send("Hello World!");
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))