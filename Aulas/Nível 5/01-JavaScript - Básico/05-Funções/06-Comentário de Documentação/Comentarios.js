/*
  Comentário de documentação em JS (Sintaxe de JSDoc).

  É um padrão para incorporar documentação no código-fonte a partir desses comentários

  Conseguimos adicionar uma explicação de uma função por exemplo, o que retorna, para que serve cada parâmetro etc.
*/



//Se chamarmos essa função no código, ao descansar o mouse em cima dela, ela demonstrará os parâmetros e o tipo de retorno.

signIn() 

// É nesse momento que entra a documentação, que deve ser "chamado" inserindo '/** */' em cima da função.

/**
 * Dentro das chaves, conseguimos especificar o tipo de valor que a variável/parâmetro aceita
 * 
 * E na frente do código, podemos indicar um comentário que irá aparecer ao passar o mouse por cima
 * 
 * E por fim, colocar uma observação no cabeçalho
 * 
 * @param {string} email user email 
 * @param {string} password more then 6 characters
 * @returns {Number} user id.
 */
function signIn(email, password){
  //Fictio: Fluxo de autenticação do usuário, passando o email e senha.

  //Acaso tudo estiver correto, retornaremos um número

  return 7
}

