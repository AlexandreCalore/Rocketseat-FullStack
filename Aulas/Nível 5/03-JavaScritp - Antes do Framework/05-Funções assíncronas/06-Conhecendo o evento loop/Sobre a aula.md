# Event Loop

## Caracteristicas

Single thread - Executa uma coisa por vez

no-blocking - Não trava o contexto da execução

asynchronous - Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas

concurrent - As tarefas queexecutam assíncronamente concorrem uma com as outras pelo processamento

* Ai que entra o conceito de:

## Concorrência e Event Loop

O JS possui um modelo de concorrência baseado em um event loop responsável por gerenciar a execução de código assíncrono e eventos em um único thread, permitindo que o JS seja não bloqueante

## Processo na prática

1. Call Stack (Pilha de Chamadas)
Descrição: Armazena as chamadas de funções em execução.

Comportamento: Quando uma função é chamada, ela é empilhada (adicionada) no topo da pilha.

Função: Executa o código síncrono.

2. Web APIs (APIs do Navegador)
Descrição: Utilização de outros recursos fornecidos pelo ambiente (navegador, no caso).

Exemplos:

setTimeout (para temporização)

DOM (para manipulação de elementos)

fetch (para requisições de rede)

Fluxo de Execução: "Tudo passa pela Call Stack. Algumas tarefas são executadas nela mesma e outras somente passam por ela e será executada em uma Web API."

3. Callback Queue (Fila de Callbacks)
Descrição: (Fila que armazena callbacks e eventos que aguardam para serem processados).

Exemplos:

onClick (callbacks de eventos de clique)

onLoad (callbacks de eventos de carregamento)

Função: Armazena as funções de callback que foram completadas pelas Web APIs ou eventos disparados, esperando para serem movidas para a Call Stack.

4. Event Loop (Laço de Eventos)
Descrição: O mecanismo central que coordena a execução assíncrona.

Comportamento: Verifica a pilha de Call Stack e a Callback Queue.

Ação: Se a Call Stack estiver vazia, um callback é removido da Callback Queue e colocado na pilha de chamadas para execução.

## Event Loop

Tudo passa pela Call Stack. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stack sem fazer nada e será resolvida em alguma Web API.

O Event Loop é quem fica checando constantemente a Call Stack e Callback Queue.

## Micro e Macro Tasks

Existem dois tipos principais de tarefas na fila de callback.

Microtasks:
São tarefas de alta prioridade que são executadas antes das Macrotasks.

Exemplos: promises (incluindo .then(), .catch(), .finally()) e queueMicrotask().

Macrotasks:
São tarefas de menor prioridade, mas essenciais.

Exemplos: callbacks de eventos (onClick, onLoad), setTimeout e setInterval.

## Resumo

1.Execução de Código:
O código síncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário na Call Stack.

2.Eventos Assíncronos:
Quando ocorrem eventos assíncronos (ex: uma requisição concluída via Web API), o callback correspondente é enfileirado na Callback Queue (ou Fila de Microtasks/Macrotasks, dependendo do tipo).

3.Verificação do Event Loop:
O Event Loop verifica a pilha de chamadas e a fila de callbacks.

Se a Call Stack estiver vazia, ele move um callback da fila de callbacks para a pilha de chamadas para execução.

4.Microtasks:
Antes de verificar novamente a fila de callbacks (Macrotasks), o Event Loop executa todas as microtasks pendentes.