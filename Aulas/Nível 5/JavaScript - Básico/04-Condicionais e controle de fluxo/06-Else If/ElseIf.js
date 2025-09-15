//Utilização de If encadeado com Else IF

let hour = 11

if(hour <= 12){
  console.log("Bom dia")
}

if(hour > 18){
  console.log("Boa noite")
}

if(hour > 12){
  console.log("Boa tarde")
}


// Escrevendo o código desse jeito, cada condições/If é verificado, mesmo que a primeira situação ja tenha sido válidada pelo computador, se tornando um processo redundante

if(hour <= 12){
  console.log("Bom dia")
} 
else if (hour > 12 && hour <=18 ){
  console.log("Boa tarde")  
} 

else {
  console.log("Boa noite")
}

// Nesse modelo, ele ja para na primeira condição atendida, sem verificar todas as outras.