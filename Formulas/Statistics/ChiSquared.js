/*
Chisquared calculates the difference between the observed value and the expected value.

Formula: χ2 = ∑(Oi – Ei)2/Ei
*/

module.exports = function(expectedAndObservedData) {
  let chiSquaredSum = 0,
  numerator;

  expectedAndObservedData.forEach((data) => {
    numerator = Math.pow(data.observed - data.expected, 2);
    chiSquaredSum += numerator / data.expected;
  });

  return chiSquaredSum;
}
