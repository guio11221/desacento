exports.removeAccents = (str) => {
    var accentMap = {
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ç': 'c',
        'é': 'e', 'ê': 'e', 'í': 'i', 'ó': 'o', 'ô': 'o',
        'õ': 'o', 'ú': 'u', 'ü': 'u', 'À': 'A', 'Á': 'A',
        'Â': 'A', 'Ã': 'A', 'Ç': 'C', 'É': 'E', 'Ê': 'E',
        'Í': 'I', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ú': 'U',
        'Ü': 'U'
    };

    return str.replace(/[àáâãçéêíóôõúüÀÁÂÃÇÉÊÍÓÔÕÚÜ]/g, function (match) {
        return accentMap[match] || match;
    });
}

// Função para remover caracteres especiais
exports.removeSpecialChars = (str) => {
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

// Função para converter para letras minúsculas
exports.toLowerCase = (str) => {
    return str.toLowerCase();
}

// Função para extrair substrings com base em índices ou posições
exports.extractSubstring = (str, start, end) => {
    if (start < 0) {
        start = 0;
    }
    if (end > str.length) {
        end = str.length;
    }
    if (start >= end) {
        return '';
    }
    return str.substring(start, end);
}

exports.isValidDate = (dateStr) => {
    var datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!datePattern.test(dateStr)) {
        return false; 
    }

    var day = parseInt(RegExp.$1, 10);
    var month = parseInt(RegExp.$2, 10);
    var year = parseInt(RegExp.$3, 10);

    if (month < 1 || month > 12 || year < 1000) {
        return false;
    }

    var maxDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDay) {
        return false;
    }

    return true;
}