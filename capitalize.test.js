const capitalize = require("./capitalize.js");

test("takes string and returns first character capitalized", () => {
  expect(capitalize("Abcdef")).toBe("Abcdef");
});
