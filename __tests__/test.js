const processText = require(".."); 

test('Remover acentos e converter para minúsculas', () => {
  const texto1 = "Texto com Acentuação";
  const opcoes1 = { removeAccents: true, toLowerCase: true };
  expect(processText(texto1, opcoes1)).toBe("texto com acentuacao");
});

test('Remover caracteres especiais, substituir espaços e adicionar prefixo e sufixo', () => {
  const texto2 = "Texto $com@ Caracteres#Especiais!";
  const opcoes2 = { removeSpecialChars: true, replaceSpaces: '-', addPrefix: 'Prefixo-', addSuffix: '-Sufixo' };
  expect(processText(texto2, opcoes2)).toBe("Prefixo-Texto-com-CaracteresEspeciais-Sufixo");
});

test('Truncar texto para 10 caracteres', () => {
  const texto3 = "Texto muito longo para ser truncado.";
  const opcoes3 = { truncateText: 10 };
  expect(processText(texto3, opcoes3)).toBe("Texto muit...");
});

test('Validar endereço de e-mail', () => {
  const email = "usuario@example.com";
  const opcoes4 = { validateEmail: true };
  expect(processText(email, opcoes4)).toBe(true);
});

test('Validar URL', () => {
  const url = "https://www.example.com";
  const opcoes5 = { validateUrl: true };
  expect(processText(url, opcoes5)).toBe(true);
});

test('Contar palavras', () => {
  const texto6 = "Isso é um teste de contagem de palavras.";
  const opcoes6 = { countWords: true };
  expect(processText(texto6, opcoes6)).toBe(8);
});

test('Substituir texto', () => {
  const texto7 = "Substituir todos os 'a' por 'x'.";
  const opcoes7 = { replaceText: { 'a': 'x' } };
  expect(processText(texto7, opcoes7)).toBe("Substituir todos os 'x' por 'x'.");
});

test('Normalização Unicode', () => {
  const texto8 = "Texto com caracteres unicode: café";
  const opcoes8 = { normalizeUnicode: true };
  expect(processText(texto8, opcoes8)).toBe("Texto com caracteres unicode: cafe");
});

test('Inverter texto', () => {
  const texto9 = "abcdefg";
  const opcoes9 = { reverseText: true };
  expect(processText(texto9, opcoes9)).toBe("gfedcba");
});

test('Separar em palavras', () => {
  const texto10 = "Isso é uma frase.";
  const opcoes10 = { splitWords: true };
  expect(processText(texto10, opcoes10)).toEqual(["Isso", "é", "uma", "frase."]);
});

test('Extrair Substrings', () => {
  const myString = "Esta é uma string de exemplo";
  const options11 = {
    extractSubstring: {
      start: 5,
      end: 13
    }
  };
  expect(processText(myString, options11)).toBe("é uma st");
});

test('Verificar data', () => {
  const options12 = {
    validateDate: true
  };

  const dataValida = "25/09/2023";
  const dataInvalida = "32/13/2023";

  expect(processText(dataValida, options12)).toBe(true);
  expect(processText(dataInvalida, options12)).toBe(false);
});
