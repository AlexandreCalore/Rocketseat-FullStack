# Compiladores

## Compilador JS

Converte o código escrito em uma versão específica do JS (ECMAScript) para outra versão, permitindo usar recursos mais rescentes da linguagem mesmo em ambientes que não oeferecem suporte a essas funcionalidades (por exemplo, navegadores mais antigos)

## Transpilação

A transpilação também é um termo utilizado para se referir a compilação a versões anteriores

Parser
Mapeia todos os elementos do código JS

Transformer
Manipula os elementos JS para gerar o código compatível

Generator
Gera o código Javascript

## Exemplo

(x, y) => {return x + y} -> // Código do Babel com preset es2016 | "use strict"; (x, y) => ( return x + y; );
                         |
                         -> // Código Babel com preset es2015 | "use strict"; (function (x, y) { return x + y; });

## Motivação

São essenciais para a evolução contínua da linguagem. Porque permite utilizar as novidades da linguagem mesmo em ambientes que não oferecem suporte a elas.

Além disso, facilitam a interoperabilidade entre diferentes ferramentas e bibliotecas que podem ser escritas em vers~ies diferentes do ECMAScript.

