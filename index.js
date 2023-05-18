// Import and re-export the functions from dateUtils.js
const { stringToDate, dateToString, isDateEarlier, isDateLater, isDateEqual, convertToTimezone, getTimezoneOffset, giveDate } = require('./src/dateUtils');

// Export the functions as an object
module.exports = {
  stringToDate,
  dateToString,
  isDateEarlier,
  isDateLater,
  isDateEqual,
  convertToTimezone,
  getTimezoneOffset,
  giveDate
};
