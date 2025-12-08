criou os arquivos

1° PASSO

index.css - para sempre importar arquivos/links neles
global.css - inserir configurações globais

-------------------------------------------------

2° PASSO

global.css: 

- Zerou estilização padrão do HTML (margin/padding/box-sizing-border-box)

- :root - iniciou as variáveis de cores, aplicando as cores do figma e seus respectivos nomes

- Posteriormente, aplicou a estilização de cada elemento do HTML de acordo com o design, exemplo: 
    body{
        background-color : var(variavel-cor-bg)
    }

-------------------------------------------------

3° PASSO

Pegou as fontes no google fonts

Colou-as no index.html

global.css: 

- Define as variáveis de fonte family

- Define as fontes H+1,2,3,4/Span/Paragrafh etc - com peso, tamanho e altura, com base no design + var --font-family

- Aplica a fonte em seus respectivos elementos (ex: body = text)

- Arruma os links e suas estilizações, colocando text decoration none e color - inherit

definiu h1,h2,h3 {font: inherit} para herdar as configurações definidas pos nós, e não a da fonte do navegador


-------------------------------------------------

4° PASSO

- Exportou assets/svg do arquivo do figma

- Separou pastas:
    Assets
        images
        icons
        logo   
        ads (?)

Nomeou os arquivos

-------------------------------------------------

5° PASSO

-Criou Header dentro do body  
    nav + id > div

-aplicou o conceito de utility first
    .grid{display: grid} (uma classe vai executar uma estilização em específico)
    .grid-flow-col{grid-auto-flow: column}

    Serve para acrescentar estilizações em específico.

-separou um arquivo específico para o Header 

-criou o header.css onde fez o @import url(nomedoarquivo.css) de todos os arquivos

-fez um id chamado primary dentro do arquivo header.css
    acrescentando dentro desse ID o nesting css:
    - Basicamente é um seletor dentro do propio estilizador, que permite você selecionar outros filhos, exemplo: 
    
    #primery{

        div:nth-child(2){
            margin-inline: auto;

        }

        div:nth-child(3){
            justify-self: end;

        }
    }

-No arquivo global.css
    .container{
        max-width: 1280px; //largura maxima de tela
        padding-inline: 32px; //padding lateral para quando diminuir
        margin-inline: auto;
    }

    Posteriormente isso tratou alinhamento de textos

-No arquivo header.css    

    div{
        display:flex;
        align-itens: center.
        gap:8px //separação entre itens
    }

      #secundary{

        padding-block: 24px;
        border:solid 1px var(--stroke-color)
        border-inline:none;
        justify-content: space-between;
        }

-------------------------------------------------

6° PASSO

-Estruturando a seção de destaques de (no caso do projeto) artigos

-incluiu div com imgens

-Separou um unico arquivo somente para utility, incluindo ali tudo o que criou

-Acrescentou o utility no index.css

-definiu tamanho maximo de 100% para a imagem, que vai respeitar o container

-criou um utility de gird flow col 2, para estilizar as imagens ao lado da imagem principal

-criou utility gap 16 para o grid

-no arquivo global.css, atribuiu ao elemento main{margin-top: 40px}

-criou o arquivo section.css e atribuiu-o no index.css

    nessa arquivo, para a section (que continha as 2 div´s com as imagens), ela recebeu o id de featured

    estilizando o featured, atribuiu que todo:

    #featured{
        img{
          height: 100%;
          object-fit: cover; // para tratar esticamento da imagem
          border-radius
        }
    }

-------------------------------------------------

7° PASSO

-Tratando o degrade de imagem

-no arquivo de sections, criou uma classe chamado card para atribuiur o degrade da imagem (obs: mostrou também que é posspivel adquirir o código css do própio figma) 
    dentro da classe, ele criou um elemento antes da imagem, sendo uma pseudoclasse

        .card{
            position relative; //para se posicionar aonde estiver a classe, e não no site todo 
            overflow: hidden;
            top :50%; para atribuir o 'fade' até metade da imagem somente
            ou
            background: linear-gradient(
                180deg,
                transparent 0%,
                cor 100%
            )
            &::before{
               content: '';
               position: absolute;
               inset: 0;
               bg-color: --var...  
            }
        }

-------------------------------------------------

8° PASSO

Trocou div que continham as imagens por figure (pois permite referencia ou informação extra)
    figcaption dentro da figure, para descrever a imagem e seu titulo por meio de h2 e Span
        dentro do:
        .card{
            ...
            figcaption{
                position: absolute //para vir pra frente
                bottom: 0;
                paading ...
            }
        }

No arquivo utility.css
    definiu:
      text-xl --var(--h2)
      text-lg --var(--h3)
      text-sm --var(--text-sm)

      Para posteriormente atribuir essas classes aos textos através de class.

No arquivo global.css
    definiu:
    content-tag{
    display: inline-block (independente de estar na tag span ou div)
    box-shadow..
    } e colocou na span

-------------------------------------------------

9° PASSO

Trabalhou na seção de destaque

-Trocou todas as divs com imagens por figure
    Dentro do figure, incluiu o figcaption + span + h2 e seus respectivos textos

-Atribuiu class "card" a todos para estilizar

dentro do figcaption:
       .card{
            ...
            figcaption{
                position: absolute //para vir pra frente
                bottom: 0;
                paading ...
            
            &:has(.text-lg){ //Ou seja, se houver essa classe dentro do figcaption, estilize de tal forma.
                padding: 12px.
            }
            }
        }

-------------------------------------------------

10° PASSO

-Tratou sobre a estilização dos assuntos mais lidos da semana
    #weekly{
        &>div{
        grid-template-columns: repeat(4,1fr)}

        img{
            height: 160px
        }
    }

-Depois estilizou o 'section header' (todo section que tiver header) para estiliza-lo

-Estilizou no section header{
    header a{
        justify-self: a;
        align-items: center
        gap: 8px
    }

    span{
        bg-img: url(endereço)
        width: 16px;
        height: 16px;
    }

    &:hover span{
        bg-img(endereço-com imagem com foto diferente)
    }
}

-------------------------------------------------

11° PASSO

- Tratou sobre a estruturação das ultimas seções que faltava

- Inseriu section´s para isso de acordo com os assuntos (IA/More)

-Criou um gap no utility de 32px

-Apenas incluiu paragrafos de acordo com o design

-obs: ele tem um arquivo.css somente para sections

-------------------------------------------------

12° PASSO

Ele definiu no arquivo global um @media (width >= 80em){
    :root{
        --fontes e seus tamanhos
    }
}

para cada arquivo especifico de elementos, ele no final da estilização entra com a media, e estiliza de acordo com o desktop. Na prática, mobile first. 
