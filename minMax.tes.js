const minMax = require("./minMax");

describe("min function", () => {
  test("2 ist kleiner als 5 ", () => {
    const result = minMax.min(2, 5);

    expect(result).toBe(2);
  });

  test("-5 ist kleiner als 2", () => {
    const result = minMax.min(-5, 2);

    expect(result).toBe(-5);
  });

  test("0 ist kleiner als 5", () => {
    const result = minMax.min(0, 5);

    expect(result).toBe(0);
  });
});

describe("max function", () => {
  test("5 ist größer als 2", () => {
    const result = minMax.max(5, 2);

    expect(result).toBe(5);
  });

  test("2 ist größer als -5", () => {
    const result = minMax.max(2, -5);

    expect(result).toBe(2);
  });

  test("5 ist größer als 0", () => {
    const result = minMax.max(5, 0);

    expect(result).toBe(5);
  });
});
