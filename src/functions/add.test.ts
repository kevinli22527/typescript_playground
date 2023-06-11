// add.test.ts
import add from './add';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('returns zero when adding zero to a number', () => {
  expect(add(10, 0)).toBe(10);
});

test('returns negative sum when subtracting larger number from a smaller number', () => {
  expect(add(5, -10)).toBe(-5);
});