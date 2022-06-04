const calculatePopulationVariance = require("./PopulationVariance");

/*
Standard deviation is a measure of the amount of variation or dispersion of a set of values

Formula: s=√1n−1∑ni=1(xi−x̅)2
*/

module.exports = function (populationData) {
  const populationVariance = calculatePopulationVariance(populationData);

  return Math.sqrt(populationVariance);
}
