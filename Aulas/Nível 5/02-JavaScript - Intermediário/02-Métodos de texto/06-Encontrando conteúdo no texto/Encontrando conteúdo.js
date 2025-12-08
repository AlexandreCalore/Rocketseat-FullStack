let message = "Estou estudando os fundamentos do JS"

// Vamos obter a posição da palavra, no caso, a frase "estudando"

console.log(message.indexOf("estudando")) // No caso de procurar e nao encontrar nada, ele retorna -1

// Como verificar se existe a palavra na string

console.log(message.includes("JS")) // Retorna um boolean a depender da situação

console.log(message.toLowerCase().includes("JS")) // Convertemos aqui tudo em minusculo, para garantir que, independente de ser Maiusculo ou Minusculo a palavra, ele encontre ela de qualquer maneira