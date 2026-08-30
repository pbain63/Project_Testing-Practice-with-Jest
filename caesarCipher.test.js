const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
  test("shifts letter by the given factor", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("wraps letters from z back to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves the original letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
});
