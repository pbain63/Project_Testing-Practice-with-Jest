const reverseString = require("./reverseString.js");

test("takes a string and returns it reversed", () => {
  expect(reverseString("abcdef")).toBe("fedcba");
});
