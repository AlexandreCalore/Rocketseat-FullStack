# Funcionamento do Node.js — Resumo de Estudo

## Visão geral
Node.js é um ambiente de execução JavaScript focado em alta performance e escalabilidade. Seu funcionamento interno pode ser entendido a partir de alguns conceitos centrais: Single Thread, Non-Blocking I/O, Call Stack, Event Loop e Event Queue.

## Single Thread
O Node.js possui uma única thread principal responsável por executar o código JavaScript.  
Isso significa que ele executa uma tarefa por vez, nunca duas simultaneamente.

## Eficiência do Single Thread
Apesar de ter apenas uma thread, o desempenho do Node.js é alto porque essa thread não fica bloqueada aguardando operações demoradas. Ela alterna rapidamente entre tarefas, mantendo o sistema sempre ativo.

## Non-Blocking I/O
Operações de entrada e saída (I/O), como acesso a banco de dados ou leitura de arquivos, não bloqueiam a thread principal.  
Enquanto essas operações acontecem, o Node continua processando outras tarefas.

## Call Stack
A Call Stack é a pilha de execução do Node.js.  
Cada função chamada é colocada no topo da pilha, executada e removida ao terminar, permitindo que a próxima função seja processada.

## Event Loop
O Event Loop é o núcleo da coordenação do Node.js.  
Ele monitora a Call Stack e decide quando novas tarefas podem ser executadas, garantindo que a thread principal nunca fique ociosa.

## Event Queue
A Event Queue é onde ficam as tarefas assíncronas que ainda não estão prontas para execução.  
Quando essas tarefas finalizam, o Event Loop as envia para a Call Stack.

## Execução síncrona vs assíncrona
- Tarefas síncronas: executadas diretamente na Call Stack, de forma imediata.
- Tarefas assíncronas: encaminhadas para a Event Queue e executadas apenas quando estão prontas.

## Arquitetura resumida
- O cliente faz uma requisição.
- O Event Loop recebe e avalia a tarefa.
- Tarefas simples vão direto para a Call Stack.
- Tarefas demoradas vão para a Event Queue.
- O Event Loop move tarefas prontas para a Call Stack.
- A resposta é retornada ao cliente.

## Conclusão
O alto desempenho do Node.js vem da combinação de Single Thread com Non-Blocking I/O, coordenados pelo Event Loop. Essa arquitetura permite lidar com muitas requisições de forma eficiente, sem bloqueios e com uso otimizado de recursos.
