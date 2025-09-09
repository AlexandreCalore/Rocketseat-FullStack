## HOISTING

Significa levantar ou içar, se referindo ao comportamento do interpretador de mover as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execucação do código.

Este comportamento viabiliza usar uma variável ou função antes que ela esteja definida.

**Hoisting de variáveis**

Todas as variáveis declaradas acabam sendo movidas para o topo do escopo, independente de onde tenha sido declaradas, vai estar disponível para uso em todo escopo no momento em que o interpretador ler o código JS.

*Importante*: Mesmo que as variáveis sejam movidas ao topo, elas precisam ser declaradas antes de serem utilizadas, do contrário, vão retornar undefined.


                    const - let - var
1    Global scope     :   n      n     s 
2    Funciton scope   :   s      s     s
3    Block scope      :   s      s     n
4    Can be reassigned:   n      s     s

*obs:*
1 - Quando você cria uma variável em determinado lugar, ela leva ela para o escopo global, perdendo o controle de onde pode ou não ser acessada, determinando assim o uso mais frequente de const e let.

**Desvantagem**

Embora o Hoisting ocorra com var, seu uso tem algumas desvantagens, como a falta de espoco de bloco adequado e a possibilidade de levar comportamentos inesperados.

Por conta disso, recomenda-se o uso de let e const em vez de var, pois tem o escopo de bloco e não são içados da mesma maneira que var.