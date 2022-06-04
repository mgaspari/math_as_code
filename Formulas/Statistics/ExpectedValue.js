/*
Expected value is a predicted value of a variable, calculated as the sum of all possible values each multiplied by the probability of its occurrence

Formula: E ( X ) = μ = ∑ x P ( x )
*/

module.exports = function(probabilityValues) {
  let probabilitySum = 0;
  probabilityValues.forEach((probData) => {
    probabilitySum += probData.probability * probData.value;
  });

  return probabilitySum
}
