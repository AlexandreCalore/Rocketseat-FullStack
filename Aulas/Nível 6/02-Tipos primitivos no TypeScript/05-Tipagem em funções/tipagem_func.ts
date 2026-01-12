function sum (x: number, y: number){ //Sempre definir o tipo das variáveis
    const result = x + y
    console.log("Resultado = " + result)

    return result //O retorno que antes era any (por não ter sido declarado) passou a ser number
}

const showMessage = (name: string): string  => {
    const message = "Olá " + name
    return message
}