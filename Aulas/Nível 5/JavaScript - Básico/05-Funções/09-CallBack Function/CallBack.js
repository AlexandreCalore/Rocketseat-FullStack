// CallBack Function: é uma função passada para outra função como um argumento.

function execute1(taskName){
    console.log("Executando a tarefa: ",taskName)
}

execute1("Download do arquivo...") // Até aqui criamos uma função normal



//Agora criaremos uma função que vai receber outra função como parâmetro


function callback(){ // Criamos aqui a função que vai ser passada como parâmetro
    console.log("Tarefa finalizada")
}

function execute2(taskName, callback){ // atribuimos callback como sendo um parâmetro
    console.log("Executando a tarefa: ",taskName)
    callback() // Permitido utilizar a função callback dentro de outra função pois foi passada como parâmetro.
}

execute2("Download do arquivo...", callback) // Passado os parâmetros tanto texto quanto a função.


// Outra forma de utilizar, é criando a função no própio parâmetro

execute2("Upload do arquivo...", function(){
    console.log("Função de callback com uma função anônima.")
})

// Podemos também criar utilizando Arrow Function

execute2("Excluindo do arquivo...", () => { 
    console.log("Arquivo excluido.")
}) //Embora ela esteja sendo criada aqui no momento de passar os parâmetros, ela vai ser executada quando chamamos a função callback dentro da função principal.

// Por fim, conseguimos encurtar ainda mais todo esse processo.

execute2("Salvando arquivo...", () => console.log("Arquivo Salvo")) // Por se tratar de uma unica linha, o uso de chaves é opcional