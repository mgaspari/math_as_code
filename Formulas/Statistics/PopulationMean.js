const BasicEquations = require("../../helpers/BasicEquations").BasicEquations;

/*
Population mean is the average of a population.

Formula: (μ) = ∑X / N
*/

module.exports = function(populationData) {
  const equationHelper = new BasicEquations();
  return equationHelper.getMean(populationData);
}
