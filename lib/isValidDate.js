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