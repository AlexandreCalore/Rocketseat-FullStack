# Imutabilidade

Uma vez que algo imutável é criado, não podemos modificar seus valores ou propiedades. 

Em vez disso, você cria uma cópia modificada para manter o original inalterado.

## Exemplo

Adress2 não é uma cópia de adress1, e sim uma **Referência**

Adress2 vai modificar o adress1. Porque o adress2 faz referência ao adress1 e não a um novo objeto na memória.

const adress1 = {
  street: "Av. Brail",
  number: 20
}

const adress2 = adress1
adress2.number = 30 // Altera a propiedade do adress1, pois o adress2 aponta para a mesma posição na memória da propiedade number do objeto adress1.

## Estratégia

Há duas maneiras de alterar dados

**1°** - Mutar o dado alterando diretamente seu valor

**2°** - Substitui o dado antigo por uma nova cópia com as alterações desejadas

const adress1 = {
  street: "Av. Brail",
  number: 20
}

const adress2 = {...adress1} //Utilizando o spread operator, "espalhamos" todas as propiedades do adress1 com seus valores, e posteriormente criamos ela no adress2
adress2.number = 30 

## Na ciação de interface

A imutabilidade é utilizada para otimizar a atualização do DOM (Document Object Model) e para fornecer um modelo mais previsível no desenvolvimento de interfaces (UI) sendo menos custoso em termos de processamento.

## Detectar mudanças

Detectar mudanças e objetos mutados é dificil, como eles são modificados diretamente a detecção do que mudou exatamente requer um objeto mutado para ser comparado com as cópias das suas própias versões anteriores e a árvore inteira do objeto para ser cruzada

Detectar mudanças em objetos imutáveis é consideravelmente fácil. Se ele for diferente do anterior, conclímos que o objeto foi alterado.

## Benefício

Como os dados imutáveis podem determinar facilmente se ocorreram alterações, isso também ajuda a determinar quando um componente deve ser renderizado novamente
