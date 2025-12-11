// No webpack existem diversos plugins que ajudam na configuração do empacotamento da aplicação, um deles serve justamente para incluir arquivos HTML no empacotamento 

const path = require("path"); 

const HTMLWebPackPlugin = require("html-webpack-plugin") 

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js","index.js"), 
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist") 
  },
  mode: "development", 
  plugins: [new HTMLWebPackPlugin()]
}