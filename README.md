# 🧮 Calculadora Web 🧮

Este é um projeto assistido de uma calculadora web feita em HTML, CSS e JS. A calculadora possui todos os cálculos básicos, exibe o resultado e tem um botão que copia o resultado.

![Screenshot da calculadora](https://ibb.co/XyJ0T3X)

## 📝 Como usar 📝

Para usar a calculadora, basta digitar os números e os operadores que deseja calcular e pressionar o botão "=" para ver o resultado. Você também pode usar as teclas do seu teclado para digitar os números e os operadores. Para copiar o resultado, clique no botão "copiar" ao lado do visor.

## 🔧 Como funciona 🔧

A calculadora usa a função `eval` do JavaScript para realizar os cálculos. Essa função recebe uma string como argumento e executa o código contido nela. Por exemplo, se a string for `"2 + 2"`, a função `eval` retornará `4`.

No entanto, a função `eval` também pode ser perigosa, pois pode executar qualquer código JavaScript, inclusive código malicioso. Por isso, é importante validar a entrada do usuário antes de passá-la para a função `eval`. Neste projeto, usamos uma expressão regular para verificar se a entrada do usuário contém apenas números, operadores e parênteses válidos.

Além disso, a função `eval` pode ter problemas de precisão ao lidar com números de ponto flutuante. Por exemplo, se a string for `"0.1 + 0.2"`, a função `eval` retornará `0.30000000000000004`. Para evitar esse problema, usamos a função `toFixed` para arredondar o resultado para duas casas decimais.

Este projeto é apenas para conhecer conceitos básicos de HTML, CSS e JS e não deve ser usado para fins profissionais ou acadêmicos.

## 📚 Referências 📚

- [Markdown Cheatsheet]: Um guia rápido para usar markdown no GitHub.
- [HTML]: A linguagem de marcação usada para estruturar páginas web.
- [CSS]: A linguagem de estilo usada para definir a aparência das páginas web.
- [JS]: A linguagem de programação usada para adicionar interatividade às páginas web.
