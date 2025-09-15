## EXPRESSÕES REGULARES

Utilizado para identificar se uma ocorrência ou padrão existe em uma string

Um padrão de uma expressão é composto por um conjunto/combinação de caracteres simples e especiais.

Usada para validação de dados, por exemplo um input de email, onde pode se verificar se o padrão para um email está correto.

Vamos definir um padrão de caracteres

5 3 A 7 B 5 C

Indica que o padrão '\D' pode aparecer uma ou mais vezes consecutivas. Portanto, \D+ procura por sequências de caracteres que não são dígitos.

/ \D + / g (g = modificador global usado em expressões regulares para indicar que a deve se identificar todos os caracteres da string inteira)
|  |   Fim do padrão
|  \
\   -- Representa qualquer caractere queu não seja dígito
 \
  -- Inicio do padrão

  dentro do texto (5 3 A 7 B 5 C), seriam reconhecidos apenas as letras A, B , C