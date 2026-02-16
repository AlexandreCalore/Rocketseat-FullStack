import fs from "node:fs"

const DATABASE_PATH = new URL("db.json", import.meta.url) // Para colocar o caminho do arquivo do banco de dados que querenos salvar. Pegando o endereço dinamicamente.
export class Database {
  #database = {}

  construtctor() {
    fs.readFile(DATABASE_PATH, "utf-8")
    .then((data) => {
      this.#database = JSON.parse(data) // Converte a string JSON para um objeto JavaScript
    }) // Se o arquivo existir, ele lê os dados e converte de volta para objeto JavaScript
    .catch(() => {
      this.#persist()
    })    // Se o arquivo não existir, ele cria um novo arquivo com um objeto vazio
  }

  #persist(){
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database)) // Converte o objeto JavaScript para uma string JSON e salva no arquivo
  }
}