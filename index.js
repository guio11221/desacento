module.exports = function (str) {
  // Mapeia os caracteres acentuados para seus equivalentes não acentuados
  var accentChars = 'àáâãçéêíóôõúüÀÁÂÃÇÉÊÍÓÔÕÚÜ';
  var unaccentChars = 'aaaaceeiooouuAAAACEEIOOOUU';

  // Verifica se o input é uma string
  if (typeof str === 'string') {
    // Substitui cada caractere acentuado pelo equivalente não acentuado
    var unaccentedStr = str.replace(/./g, function (char) {
      var index = accentChars.indexOf(char);
      return index !== -1 ? unaccentChars[index] : char;
    });

    return unaccentedStr;
  } else {
    return str; // Retorna o input sem modificação se não for uma string
  }
};
