// Executa o código de forma síoncrona e o valor 1 é impresso imnediatemente no console
console.log(1)

// Microtask são executadas antes de temporizadores e promessas
queueMicrotask(() => {
  console.log(2)
})

// Macrotask que aguarda o evento temporizador ser acionado
setTimeout(() => {
  console.log(3)
}, 0) 

// Execução síncrona
console.log(4)

// Adiciona uma microtask
Promise.resolve(true).then(() => {
  console.log(5)
})  

// Ordem de impressão: 1, 4, 2, 3, 5 - Prioridades do event Loop: Microtask > setTimeout > Promise