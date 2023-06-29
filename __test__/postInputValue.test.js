import { postInputValue } from '../src/client/js/postInputValue';
fetch = jest.fn();
describe('Testing the post input value functionality', () => {
  test('Testing the postInputValue() function', () => {
    const data = {
      type: 'txt',
      value: 'Main dishes were quite good, but desserts were too sweet for me.',
    };
    expect(postInputValue(data, 'http://localhost:8080/addUrl')).toBeDefined();
  });
});
