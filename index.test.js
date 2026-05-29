const generateRandomNumber = require('./index');

test('generates a random number between 0 and 99', () => {
  const randomNum = generateRandomNumber();
  expect(randomNum).toBeGreaterThanOrEqual(0);
  expect(randomNum).toBeLessThan(100);
}
);