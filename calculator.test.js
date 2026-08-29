const calculator = require("./calculator");

test("adds two numbers correctly", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
