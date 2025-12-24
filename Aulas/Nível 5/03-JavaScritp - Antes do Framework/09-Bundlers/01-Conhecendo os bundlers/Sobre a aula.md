# Bundlers

Agrupa (empacota) diversos arquivos e suas dependências em um ou mais pacotes com o objetivo de otimizar o carregamento de páginas web

## Exemplo

O bundler agrupa (empacota) os arquivos e suas dependências em um único arquivo.

<script type="module" src="fetchProducts.js"></script> 
<script type="module" src="addProduct.js"></script> 
<script type="module" src="updateProduct.js"></script> 
<script type="module" src="removeProduct.js"></script>
|
|
|
\
 \
  \__> <script type="module" src="bundle.js"></script> //este arquivo está empacotando todos os demais arquivos e suas resoluções

## Funcionamento

No geral, a operação de um empacotador é dividida em duas etapas:
**geração do gráfico de dependência** e **empacotamento**

## Mapeando um gráfico de dependência

A primeira coisa que um empacotador de módulo faz é gerar um mapa de relacionamento de todos os arquivos servidos. Este processo é denominado Resolução de Dependências.

O empacotador requer um arquivo de entrada (geralmente o arquivo principal). Em seguida analisa o arquivo de entrada para entender suas dependências.

Depois disso, ele percorre as dependências para determinar as dependências dessas dependências.

## Agrupamento

Depois de receber entradas e passar por suas dependências durante a fase de Resolução de Dependências, um bundler entrega ativos estáticos que o navegador pode processar com êxito.

Este estágio de saída é denominado Packing. Durante esse processo, o empacotador aproveitará a resolução de dependência para integrar nossos vários arquivos de código e retornar um único pacote para o navegador carregar.