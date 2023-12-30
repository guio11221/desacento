exports.removeSpecialChars = (str) => {
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}