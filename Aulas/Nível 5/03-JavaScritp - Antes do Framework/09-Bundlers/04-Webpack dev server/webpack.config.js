const path = require("path"); //serve para lidar com caminho de arquivos e pastas (pode  ter variaveis por conta do diretório ser definido por / ou \ por conta de sistema operacional etc)
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "js", "index.js"), //pegando o nome de diretório do arquivo selecionado
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist") //Basicamente pega o endereço de onde o arquivo está, e cria a pasta dist nesse local.
  },
  mode: "development", //definmos que estamos trabalhando em desenvolvimento
  devServer: {
    static: {
      directory: path.join(__dirname, "dist", "index.html"),
    },
    port: 3000,
  },
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: [
      { //Regra para lidar com CSS
        test: /\.css$/i, //Estamos dizendo que, se o arquivo finalizar com .css, ele vai ser tratado pelo loader css-loader
        use: ["style-loader", "css-loader"]
      },
      { //Regra para lidar com JS
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]]
            }
          }    
        }
      ]
    }

}

// Todo esse processo se define como a configuração do empacotamento da aplicação