/**
Standard score tells you where a score lies on a normal distribution curve
This is also known as Z score.

Formula: z = (x-μ)/σ
*/

module.exports = function(observedValue, mean, standardDeviation) {
  return (observedValue - mean) / standardDeviation;
}
