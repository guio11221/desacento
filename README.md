
# Desacento# Função de Processamento de Texto

Esta função permite realizar várias operações de processamento de texto em uma string. Ela oferece uma variedade de opções para personalizar o processamento de acordo com suas necessidades.

## Como Usar

Para usar a função, primeiro importe-a no seu código:

```javascript
const processText = require('./sua-funcao-de-processamento-de-texto');
```

### A seguir, você pode chamar a função processText() com a string que deseja processar e um objeto de opções.

```
const texto = "Texto de Exemplo";
  const opcoes = {
    // Opções de processamento aqui
  };

const resultado = processText(texto, opcoes);
console.log(resultado);

```

# As opções disponíveis e como usá-las:

## Remover Acentos :

#### Use removeAccents: true para remover acentos da string e toLowerCase: true para converter para letras minúsculas:
```
 const opcoes = { removeAccents: true, toLowerCase: true };

```

## Remover Caracteres Especiais :

#### Use removeSpecialChars: true para remover caracteres especiais da string:
```
 const opcoes = { removeSpecialChars: true };
```

## Substituir Espaços :

#### Use replaceSpaces para substituir espaços em branco por um caractere específico, por exemplo, '-' :
```
const opcoes = { replaceSpaces: '-' };

```

## Adicionar Prefixo e Sufixo :

#### Use addPrefix para adicionar um prefixo e addSuffix para adicionar um sufixo à string:

```
const opcoes = { addPrefix: 'Prefixo-', addSuffix: '-Sufixo' };

```

## Truncar Texto

#### Use truncateText para truncar a string para um número específico de caracteres:

```
const opcoes = { truncateText: 10 };

```

## Validar Endereço de E-mail

#### Use validateEmail: true para validar se a string é um endereço de e-mail válido:

```
const opcoes = { validateEmail: true };

```

## Validar URL

#### Use validateUrl: true para validar se a string é uma URL válida:

```
const opcoes = { validateUrl: true };

```

## Contar Palavras

#### Use countWords: true para contar o número de palavras na string:

```
const opcoes = { countWords: true };

```

## Substituir Texto

#### Use replaceText para substituir uma sequência por outra em toda a string. Por exemplo, para substituir todos os 'a' por 'x':

```
const opcoes = { replaceText: { 'a': 'x' } };

```

## Normalização Unicode

#### Use normalizeUnicode: true para normalizar caracteres Unicode:

```
const opcoes = { normalizeUnicode: true };

```

## Inverter Texto

#### Use reverseText: true para inverter a ordem dos caracteres na string:
```
const opcoes = { reverseText: true };

```

## Separar em Palavras

#### Use splitWords: true para dividir a string em um array de palavras:

```
const opcoes = { splitWords: true };

```
## Validar Data

### Use validateDate: true para validar a data

```
const opcoes = { validateDate: true }
```

## Contribuições

Sinta-se à vontade para contribuir com melhorias nesta função. Abra um problema ou envie uma solicitação pull com suas alterações.


Este README fornece instruções claras sobre como usar cada opção da função de processamento de texto, tornando mais fácil para os usuários entenderem como personalizar o processamento de acordo com suas necessidades específicas. Certifique-se de adaptar as instruções de acordo com a implementação real da função.
