module.exports = function getZerosCount(number) {
  n = 1;
  count = 0;
  while (number / Math.pow(5, n) >= 1) {

    count += (Math.trunc(number / Math.pow(5, n)));
    n++;
  }
  return (count);
}
