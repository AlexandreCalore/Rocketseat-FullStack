# Funções Assíncronas

Quando uma função assíncrona é chamada, ela retorna uma Promise.

Quando a função assíncrona retorna um valor, a Promise é resolvida com esse valor.

Quando a função assíncrona lança uma exceção, a Promise é rejeitada com essa exceção.

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada. Posteriormnete, retoma a execução da função assíncrona e retorna o valor resolvido.