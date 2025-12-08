let date = new Date("July 3, 2025, 13:03:00")


let day =(date.getDate().toString().padEnd(2,"0")) //Convertendo números de dias em texto e acrescentendo o número 0 para sempre ter 2 dígitos com métodos de texto
console.log() 


let month = ((date.getMonth() + 1).toString().padEnd(2,"0")) //Convertendo números de meses em texto e acrescentendo o número 0 para sempre ter 2 dígitos com métodos de texto
console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minutes =  date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`) //Compilando data completa