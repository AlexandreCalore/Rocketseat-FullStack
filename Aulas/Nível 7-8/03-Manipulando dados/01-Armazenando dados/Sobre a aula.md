# Armazenamento de Dados — Resumo de Estudo

## Estratégias de armazenamento
Existem diferentes formas de armazenar dados em uma aplicação, cada uma com características e usos específicos.

## Armazenamento em memória (in-memory)
- Os dados são salvos diretamente na memória da aplicação.
- A memória é volátil.
- Ao parar e executar a aplicação novamente, os dados são perdidos.

### Uso comum
- Testes.
- Informações temporárias.
- Dados que não precisam ser persistidos.

### Desvantagem
- Não há persistência dos dados.
- Qualquer reinício da aplicação causa perda total das informações.

## Armazenamento em arquivo
- Os dados são gravados em arquivos no sistema.
- Exemplo comum: arquivos no formato JSON.
- Pode-se armazenar listas de objetos, onde cada objeto representa um conjunto de dados.

### Características
- Persistência dos dados.
- Os dados permanecem mesmo após reiniciar a aplicação.
- A aplicação pode ler os dados do arquivo sempre que necessário.

## Armazenamento em banco de dados
- Alternativa para persistência de dados.
- Os dados ficam armazenados permanentemente.
- A aplicação consegue acessar os dados mesmo após reinicializações.

### Observação
- O uso de banco de dados será abordado posteriormente.
- No momento, o foco é o uso de arquivos como forma de persistência.

## Comparação geral
- Memória: rápida, simples, porém volátil.
- Arquivo: persistente, simples de implementar.
- Banco de dados: persistente, escalável e mais robusto.

## Conclusão
Para dados permanentes, é necessário utilizar arquivos ou banco de dados.  
Armazenamento em memória deve ser reservado para testes ou dados temporários.
