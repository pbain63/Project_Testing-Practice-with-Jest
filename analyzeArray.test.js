const analyzeArray = require("./analyzeArray");

describe("analyzeArray", () => {
  test("returns the average, minimum, maximum and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("calculates a decimal average", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
      average: 3.5,
      min: 1,
      max: 6,
      length: 6,
    });
  });

  test("correctly handles negative numbers", () => {
    expect(analyzeArray([-5, -2, -10, -4])).toEqual({
      average: -21 / 4,
      min: -10,
      max: -2,
      length: 4,
    });
  });

  test("correctly handles an array with one number", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });
});
