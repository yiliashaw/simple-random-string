var uniqueRandomArray = require('unique-random-array');

module.exports = function (len) {
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var optionArray = possible.split('');
  var length = len && typeof len === 'number' && len > 0 ? len : 8;
  var str = '';
  var rand = uniqueRandomArray(optionArray);
  for (var i = 0; i < length; i++) {
    str += rand();
  }
  return str;
};