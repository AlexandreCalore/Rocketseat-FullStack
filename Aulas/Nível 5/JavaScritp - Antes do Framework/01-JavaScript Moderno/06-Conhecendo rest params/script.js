// Rest params (...) permite representar um número indefinido de argumentos como array

function values1(a, ...rest){ //Rest mantem todo o resto de parametros não declarados anteriormente. É basicamente um array, que torna flexivel receber parâmetros
  
  //Mostra a quantidade de parâmetros
  console.log(rest.length)

  //Exibindo o conteúdo do array
  console.log(...rest)

  //Exibe o conteúdo do rest que é um array
  console.log(rest)
}

function values2(a, ...args){ //É a mesma coisa que rest
  console.log(a)
  console.log(...args)
}

values1(1,54,65,2,45,8)
values2(1,54,65,2,45,8)