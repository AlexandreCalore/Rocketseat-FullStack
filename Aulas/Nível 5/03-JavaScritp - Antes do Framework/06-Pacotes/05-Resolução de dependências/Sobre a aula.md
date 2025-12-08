# Versionamento semântico

9.1.3

Major — Minor — Patch

Major (versão Principal): Aumenta quando são feitas alterações incompatíveis. Isso significa que, se você atualizar para uma nova versão principal, pode haver alterações que quebrarão a compatibilidade com versões anteriores.

Minor (versão Menor): Aumenta quando são adicionadas novas funcionalidades de maneira compatível com versões anteriores. As atualizações de versão menor não devem introduzir alterações que quebram a compatibilidade com o código existente.

Patch (versão de Correção): Aumenta quando são feitas correções de bugs compatíveis com versões anteriores. Isso significa que essas correções não devem introduzir novas funcionalidades ou quebrar a compatibilidade.

## Convenções

O npm utiliza convenções para gerenciar a resolução de dependências e garantir que as instalações subsequentes mantenham a compatibilidade com as versões utilizadas na aplicação.

## ~

O til (~) permite atualizações automáticas para versões compatíveis. Isso permite receber patches e correções de bugs.

{
  "dependencies": {
    "package-name": "~4.17.20"
  }
}

## @

Quando você usa @ antes da versão, indica uma versão exata.
O npm instalará exatamente a versão especificada.

npm install dayjs@1.11.10
