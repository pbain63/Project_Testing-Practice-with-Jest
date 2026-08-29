const calculator = require("./calculator");

test("adds two numbers correctly", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-3, 18)).toBe(15);
});

test("subtracts two number correctly", () => {
  expect(calculator.subtract(8, 3)).toBe(5);
  expect(calculator.subtract(-3, -9)).toBe(6);
});

test("multiplies two numbers correctly", () => {
  expect(calculator.multiply(5, -7)).toBe(-35);
  expect(calculator.multiply(8, 0)).toBe(0);
});

test("divides two numbers correctly", () => {
  expect(calculator.divide(12, 4)).toBe(3);
  expect(calculator.divide(13, -2)).toBe(-6.5);
});
