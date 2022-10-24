const { returnHelloWorld, isMoreThan5, substract } = require("../app");

describe("App.js", () => {
  describe("#returnHelloWorld", () => {
    it("should return Hello name!", () => {
      const result = returnHelloWorld("Malika");

      expect(result).toBe("Hello Malika!");
    });
  });

  describe("#isMoreThan5", () => {
    it("should return true", () => {
      const result = isMoreThan5(8);
      expect(result).toBeTruthy();
    });

    it("should return false", () => {
      const result = isMoreThan5(3);
      expect(result).toBeFalsy();
    });
  });

  describe("#substract", () => {
    it("should return 4", () => {
      const result = substract(7, 3);
      expect(result).toBe(4);
    });

    it("should not return value", () => {
      const result = substract("tujuh", 3);
      expect(result).not.toBe(4);
      expect(result).toBe("X or Y is not a number");
    });
  });
});
