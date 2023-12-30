const { removeAccents } = require('./removeAccents');
const { removeSpecialChars } = require('./removeSpecialChars');
const { extractSubstring } = require('./extractSubstring');
const { isValidDate } = require('./isValidDate');
const { toLowerCase } = require('./toLowerCase')

module.exports = Object.freeze({
    removeAccents,
    removeSpecialChars,
    extractSubstring,
    isValidDate,
    toLowerCase
})