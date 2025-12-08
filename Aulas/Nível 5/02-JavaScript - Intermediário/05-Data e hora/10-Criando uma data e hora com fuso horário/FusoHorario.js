const dateWithTimezone = new Date("2024-07-02T14:56:30.603+03:00")
 
console.log(new Date().toLocaleString()) //Com fuso horário
console.log(dateWithTimezone.toLocaleString) //Sem fuso horário
