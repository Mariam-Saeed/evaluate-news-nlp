import { getData } from '../src/client/js/getData';
fetch = jest.fn();

describe('Testing the get data functionality', () => {
  test('Testing the getData() function', () => {
    expect(getData()).toBeDefined();
  });
});
