const calculator = require("./calculator");

test("adds two numbers correctly", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-3, 18)).toBe(15);
});
