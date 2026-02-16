import fs from 'node:fs/promises' //usando o /promises para usar async/await

const DATABSE_PATH = new URL("db_json" + import.meta.url)

export class Database {
  database = {}

  constructor() {
    this.persist 
  }
  persist() {
    fs.writeFile(DATABSE_PATH, JSON.stringify(this.database)) //abreviação de file system
  }

  insert(table, data) {
      if (Array.isArray(this.database[table])) { // Verifica se é um array
        this.database[table].push(data)
      } else{
        this.database[table] = [data]
      }
  }

  select(table){
    return this.database[table]
  }
}