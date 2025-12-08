// difente do setTimeout(), o setInterval() executa uma função em um intervalo de tempo especificado

let value = 10

const interval = setInterval(() => {
  console.log(value)
  value-- //Funciona como uma contagem regressiva
  if (value === 0) {
    console.log('Acabou!')
    //interrompe o intervalo de execuções
    clearInterval(interval)
  }

}, 1000) // A cada 1000/1 segundo, ele executa nosso comando