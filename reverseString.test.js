const reverseString = require("./reverseString.js");

test("takes a string and returns it reversed", () => {
  expect(reverseString("abcdef")).toBe("fedcba");
});

test("takes a string and returns it reversed", () => {
  expect(reverseString("abc de ;) 🌿")).toBe("🌿 ); ed cba");
});

test("takes a string and returns it reversed", () => {
    expect(reverseString(" ")).toBe(" ");
  });