/*
Chisquared calculates the difference between the observed value and the expected value.

Formula: χ2 = ∑(Oi – Ei)2/Ei
*/

function calculateChiSquared(expectedAndObservedData) {
  let chiSquaredSum = 0,
  numerator,
  denominator;

  expectedAndObservedData.forEach((data) => {
    numerator = Math.pow(data.observed - data.expected, 2);
    denominator = data.expected;
    chiSquaredSum += numerator / denominator;
  });

  return chiSquaredSum;
}

export default calculateChiSquared;
