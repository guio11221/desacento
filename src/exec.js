const { removeAccents, removeSpecialChars, toLowerCase, extractSubstring, isValidDate } = require("../lib/")


module.exports = function (str, options) {
  if (typeof str !== 'string') {
    return str; // Retorna o input sem modificação se não for uma string
  }

  // Verifica se options é um objeto
  options = typeof options === 'object' ? options : {};

  // Aplica as opções selecionadas
  if (options.removeAccents) {
    str = removeAccents (str);
  }

  if (options.removeSpecialChars) {
    str = removeSpecialChars(str);
  }

  if (options.toLowerCase) {
    str = toLowerCase(str);
  }

  if (options.trimSpaces) {
    str = str.trim();
  }

  if (options.replaceSpaces) {
    str = str.replace(/\s/g, options.replaceSpaces);
  }

  if (options.maxLength && str.length > options.maxLength) {
    str = str.slice(0, options.maxLength);
  }

  if (options.capitalizeFirstLetter) {
    str = str.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  if (options.removeNumbers) {
    str = str.replace(/[0-9]/g, '');
  }

  if (options.customReplace) {
    for (var key in options.customReplace) {
      if (options.customReplace.hasOwnProperty(key)) {
        str = str.replace(new RegExp(key, 'g'), options.customReplace[key]);
      }
    }
  }

  // Remove espaços duplicados
  if (options.removeDuplicateSpaces) {
    str = str.replace(/\s+/g, ' ');
  }

  // Remove tags HTML
  if (options.removeHtmlTags) {
    str = str.replace(/<[^>]*>/g, '');
  }

  // Converte caracteres especiais HTML
  if (options.convertHtmlSpecialChars) {
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Substitui texto
  if (options.replaceText) {
    for (var key in options.replaceText) {
      if (options.replaceText.hasOwnProperty(key)) {
        str = str.replace(new RegExp(key, 'g'), options.replaceText[key]);
      }
    }
  }

  // Conta palavras
  if (options.countWords) {
    var words = str.split(/\s+/);
    return words.length;
  }

  // Valida email
  if (options.validateEmail) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(str);
  }

  // Valida URL
  if (options.validateUrl) {
    var urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}([/?].*)?$/i;
    return urlPattern.test(str);
  }

  // Truncar texto
  if (options.truncateText) {
    if (str.length > options.truncateText) {
      return str.slice(0, options.truncateText) + '...';
    }
  }

  // Normalização Unicode
  if (options.normalizeUnicode) {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Ordenar palavras
  if (options.sortWords) {
    var words = str.split(/\s+/);
    words.sort();
    return words.join(' ');
  }

  // Inverter texto
  if (options.reverseText) {
    str = str.split('').reverse().join('');
  }

  // Remove caracteres específicos
  if (options.removeSpecificChars) {
    var charsToRemove = options.removeSpecificChars.split('');
    for (var i = 0; i < charsToRemove.length; i++) {
      var charToRemove = charsToRemove[i];
      var regex = new RegExp(charToRemove, 'g');
      str = str.replace(regex, '');
    }
  }

  // Adicionar prefixo
  if (options.addPrefix) {
    str = options.addPrefix + str;
  }

  // Adicionar sufixo
  if (options.addSuffix) {
    str = str + options.addSuffix;
  }

  // Verificar se começa com
  if (options.startsWith) {
    if (!str.startsWith(options.startsWith)) {
      return false;
    }
  }

  // Verificar se termina com
  if (options.endsWith) {
    if (!str.endsWith(options.endsWith)) {
      return false;
    }
  }

  // Separar em palavras
  if (options.splitWords) {
    return str.split(/\s+/);
  }

  if (options.extractSubstring) {
    var start = options.extractSubstring.start || 0;
    var end = options.extractSubstring.end || str.length;
    str = extractSubstring(str, start, end);
  }

  if(options.validateDate){
    return isValidDate(str)
  }

  return str;
};
