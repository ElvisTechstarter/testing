const calculator = require("./calculator");

// test("Die Summe von 2 + 5 ist 7", () => {
//   const result = calculator.sum(2, 5);

//   expect(result).toEqual(7);
// });

// test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
//   const result = calculator.sum("Apfel", 5);

//   expect(result).toEqual("Apfel5");
// });

// test("Der Quotient aus 10 durch 2 ist 5", () => {
//   const result = calculator.divide(10, 2);

//   expect(result).toEqual(5);
// });

// test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
//   const result = calculator.divide(10, 3);

//   expect(result).toBeCloseTo(3.33, 2);
// });

// test("Postive durch negative Zahl ist kleiner als 0", () => {
//   const result = calculator.divide(10, -2);

//   expect(result).toBeLessThan(0);
// });

// test("Negativ durch negative Zahl ist größer als 0", () => {
//   const result = calculator.divide(-10, -2);

//   expect(result).toBeGreaterThan(0);
// });

test("Differenz von 5 - 2 ist 3", () => {
  const result = calculator.sub(5, 2);

  expect(result).toBe(3);
});

test("Differenz von -5 - 2 ist -7", () => {
  const result = calculator.sub(-5, 2);

  expect(result).toBe(-7);
});

test("Differenz von 0 - 2 ist -2", () => {
  const result = calculator.sub(0, 2);

  expect(result).toBe(-2);
});

test("Produkt von 5 x 2 ist 10", () => {
  const result = calculator.multiply(5, 2);

  expect(result).toBe(10);
});

test("Produkt von 5 x -(2) ist -10", () => {
  const result = calculator.multiply(5, -2);

  expect(result).toBe(-10);
});

test("Produkt von 5 x 0 ist 0", () => {
  const result = calculator.multiply(5, 0);

  expect(result).toBe(0);
});
