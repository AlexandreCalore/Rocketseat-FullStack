// Vamos trabalhar com o exemplo de cartão de crédito onde é ocultado os primeiros números

let creditCard = "123456781234"
console.log(creditCard.length) // pegamos o tamanho da string

// Pegamos aqui os ultimos digitos
const lastDigits = creditCard.slice(-4)

// Agora precisamos ocultar o restante dos números, para isso criaremos uma constante que receberá somente os ultimos digitos

const maskedNumbers = lastDigits.padStart(16,"X") // Este método preenche a string apartir do início, recebendo o tamanho do texto como 1° parâmetro, e o 2° pelo o que vai ser completado
console.log(maskedNumbers)

//Existe também o padEnd, o conceito é o mesmo, só muda a ordem

const number = "123"
console.log(number.padEnd(10,"#")) // Embora tenha 3 dígitos a nossa constante, estamos dizendo a ele que queremos 10 dígitos, então o mesmo vai preencher os 7 que faltam.