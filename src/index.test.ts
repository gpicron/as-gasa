import { add, addWrapper } from './index.js';

describe('main module', () => {
  test('direct', () => {
    expect(add(1,2)).toBe(3)
  });

  test('wrapper', () => {
    expect(addWrapper(1,2)).toBe(3)
  });
});
