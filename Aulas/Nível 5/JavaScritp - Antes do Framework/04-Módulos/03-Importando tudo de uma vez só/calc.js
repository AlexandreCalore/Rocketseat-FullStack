export function sum (a,b) { //export necessário para que a função seja visualizada fora do módulo.
  return a + b
}

export function multiply (a,b) {
  return a * b
}

// Outra forma de exportar, centralizando tudo ao final do arquivo:

export {sum, multiply}