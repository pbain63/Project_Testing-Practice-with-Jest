const calculator = require("./calculator");

test("adds two numbers correctly", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-3, 18)).toBe(15);
});

test("subtracts two number correctly", () => {
  expect(calculator.subtract(8, 3)).toBe(5);
  expect(calculator.subtract(-3, -9)).toBe(6);
});

