import express from "express";

const PORT = 3333; // Caixa alta para constantes de configurações, como portas, URLs, etc.

const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))