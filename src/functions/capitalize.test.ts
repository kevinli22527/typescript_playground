// capitalize.test.ts
import capitalize from './capitalize';

test('capitalizes the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string when given an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('handles single character string', () => {
  expect(capitalize('a')).toBe('A');
});