const capitalize = require("./capitalize.js");

describe("capitalize", () => {
  test("takes string and returns first character capitalized", () => {
    expect(capitalize("Abcdef")).toBe("Abcdef");
  });

  test("empty string and returns empty", () => {
    expect(capitalize(" ")).toBe(" "); // TODO
  });
});
