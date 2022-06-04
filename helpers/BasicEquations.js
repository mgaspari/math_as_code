class BasicEquations {
  getSum(arrayData) {
    let sum = 0;
    arrayData.forEach((val) => {
      sum += val;
    })

    return sum;
  }

  getMean(arrayData) {
    if (arrayData.length === 0) {
      return 0;
    }

    return this.getSum(arrayData) / arrayData.length;
  }
}

module.exports.BasicEquations = BasicEquations;
