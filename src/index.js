var uniqueRandomArray = require('unique-random-array');

module.exports = function (len) {
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var optionArray = possible.split('');
  var param = Math.floor(Number(len));
  var length = param || 8;
  var str = '';
  var rand = uniqueRandomArray(optionArray);
  for (var i = 0; i < length; i++) {
    str += rand();
  }
  return str;
};