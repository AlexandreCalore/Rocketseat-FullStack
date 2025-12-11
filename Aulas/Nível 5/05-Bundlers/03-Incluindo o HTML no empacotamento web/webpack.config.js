const path = require("path"); //serve para lidar com caminho de arquivos e pastas (pode  ter variaveis por conta do diretório ser definido por / ou \ por conta de sistema operacional etc)

module.exports = {
  entry: path.resolve(__dirname, "src", "js","index.js"), //pegando o nome de diretório do arquivo selecionado
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist") //Basicamente pega o endereço de onde o arquivo está, e cria a pasta dist nesse local.
  },
  mode: "development" //definmos que estamos trabalhando em desenvolvimento
}

// Todo esse processo se define como a configuração do empacotamento da aplicação