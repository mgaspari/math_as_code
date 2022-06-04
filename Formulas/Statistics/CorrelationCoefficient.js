const BasicEquations = require("../../helpers/BasicEquations").BasicEquations;

/*
Correlation coefficients is used to find the strength of the linear relationship between two different variables, x and y

Formula: r = ∑ i = 1 n ( x i − x ¯ ) ( y i − y ¯ ) ∑ i = 1 n ( x i − x ¯ ) 2 ∑ i = 1 n ( y i − y ¯ ) 2.
*/

module.exports = function(xYPopulationData) {
  // prep data
  const xVals = [];
  const yVals = [];
  const xSquared = [];
  const ySquared = [];
  const xYMultiplied = [];

  xYPopulationData.forEach((cords) => {
    xVals.push(cords.x);
    yVals.push(cords.y);
    xSquared.push(Math.pow(cords.x, 2));
    ySquared.push(Math.pow(cords.y, 2));
    xYMultiplied.push(cords.x * cords.y);
  });

  // equation
  const equationHelper = new BasicEquations();

  const n = xYPopulationData.length;
  const sumXValues = equationHelper.getSum(xVals);
  const sumYValues = equationHelper.getSum(yVals);
  const sumXYMultiplied = equationHelper.getSum(xYMultiplied);
  const sumXSquared = equationHelper.getSum(xSquared);
  const sumYSquared = equationHelper.getSum(ySquared);

  const numerator = (n * sumXYMultiplied - (sumXValues * sumYValues));
  const denominator = (n * sumXSquared - Math.pow(sumXValues, 2)) * (n * sumYSquared - Math.pow(sumYValues, 2));

  return numerator / Math.sqrt(denominator);
}
