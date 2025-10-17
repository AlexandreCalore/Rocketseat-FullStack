// Intl é a API de internacionalização do ECMAScript

const currentLocale = Intl.DateTimeFormat().resolvedOptions // obtemos informações da localidade

console.log(currentLocale)

//Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date()

//Obtemos a diferença em minutos e em horas do timezone
console.log(date.getTimezoneOffset())
console.log(date.getTimezoneOffset() / 60)