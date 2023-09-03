const processText = require(".");

// Teste 1: Remover acentos e converter para minúsculas

function teste1() {
    const texto1 = "Texto com Acentuação";
    const opcoes1 = { removeAccents: true, toLowerCase: true };
    console.log(processText(texto1, opcoes1)); // Saída: "texto com acentuacao"
}

// Teste 2: Remover caracteres especiais, substituir espaços por '-' e adicionar prefixo e sufixo

function teste2() {
    const texto2 = "Texto $com@ Caracteres#Especiais!";
    const opcoes2 = { removeSpecialChars: true, replaceSpaces: '-', addPrefix: 'Prefixo-', addSuffix: '-Sufixo' };
    console.log(processText(texto2, opcoes2)); // Saída: "Prefixo-Texto-com-CaracteresEspeciais-Sufixo"
}

// Teste 3: Truncar texto para 10 caracteres

function teste3() {

    const texto3 = "Texto muito longo para ser truncado.";
    const opcoes3 = { truncateText: 10 };
    console.log(processText(texto3, opcoes3)); // Saída: "Texto muit..."
}

// Teste 4: Validar endereço de e-mail

function teste4() {
    const email = "usuario@example.com";
    const opcoes4 = { validateEmail: true };
    console.log(processText(email, opcoes4)); // Saída: true
}

// Teste 5: Validar URL

function teste5() {
    const url = "https://www.example.com";
    const opcoes5 = { validateUrl: true };
    console.log(processText(url, opcoes5)); // Saída: true
}

// Teste 6: Contar palavras

function teste7() {
    const texto6 = "Isso é um teste de contagem de palavras.";
    const opcoes6 = { countWords: true };
    console.log(processText(texto6, opcoes6)); // Saída: 7
}

// Teste 7: Substituir texto

function teste8() {
    const texto7 = "Substituir todos os 'a' por 'x'.";
    const opcoes7 = { replaceText: { 'a': 'x' } };
    console.log(processText(texto7, opcoes7)); // Saída: "Substituir todos os 'x' por 'x'."
}

// Teste 8: Normalização Unicode

function teste9() {
    const texto8 = "Texto com caracteres unicode: café";
    const opcoes8 = { normalizeUnicode: true };
    console.log(processText(texto8, opcoes8)); // Saída: "Texto com caracteres unicode: cafe"
}

// Teste 9: Inverter texto

function teste10() {
    const texto9 = "abcdefg";
    const opcoes9 = { reverseText: true };
    console.log(processText(texto9, opcoes9)); // Saída: "gfedcba"
}

// Teste 10: Separar em palavras

function teste11() {
    const texto10 = "Isso é uma frase.";
    const opcoes10 = { splitWords: true };
    console.log(processText(texto10, opcoes10)); // Saída: ["Isso", "é", "uma", "frase."]
}

// Teste 12 de Extrair Substrings

function teste12() {
    var myString = "Esta é uma string de exemplo";

    // Defina as opções para extrair uma substring começando no índice 5 e terminando no índice 12
    var options = {
        extractSubstring: {
            start: 5,
            end: 13
        }
    };

    var resultado = processText(myString, options);

    console.log(resultado); // "é uma st"
}

// Teste 13 de Verificar data

function teste13() {

    var options = {
        validateDate: true
    }

    // Exemplo de uso:
    const data = "25/09/2023"; // Uma data válida
    console.log(processText(data, options)); // Saída: true

    const dataInvalida = "32/13/2023"; // Uma data inválida (dia e mês fora do intervalo)
    console.log(processText(dataInvalida, options)); // Saída: false
}