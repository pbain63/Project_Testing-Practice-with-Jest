function analyzeArray(numbers) {
  const length = numbers.length;

  const sum = numbers.reduce((total, number) => total + number, 0);

  const average = sum / length;

  const min = Math.min(...numbers);

  const max = Math.max(...numbers);

  return { average, min, max, length };
}

module.exports = analyzeArray;
