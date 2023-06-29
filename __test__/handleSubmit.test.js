import { inputChecker } from '../src/client/js/formHandler';

describe('Testing the check input functionality', () => {
  test('Testing the inputChecker() function', () => {
    expect(inputChecker('text')).toBeDefined();
  });
});
