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