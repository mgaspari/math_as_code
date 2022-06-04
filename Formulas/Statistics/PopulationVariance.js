const BasicEquations = require("../../helpers/BasicEquations").BasicEquations;

/*
Population variance tells us how data in a specific population are spread out

Formula: 𝜎2=Σ(𝑥𝑖−𝜇)2/𝑛
*/

module.exports = function (populationData) {
  const equationHelper = new BasicEquations();
  const mean = equationHelper.getMean(populationData);

  let sumDifferenceFromMean = 0;
  populationData.forEach((val) => {
    sumDifferenceFromMean += Math.pow(val - mean, 2);
  });

  return sumDifferenceFromMean / populationData.length;
}
