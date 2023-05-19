import { removeUndefined } from './remove-undefined';

describe('remove-undefined', () => {
  it('SHOULD only remove undefined values', () => {
    const testArray = [undefined, 'abc', 123, undefined];
    const result = testArray.filter(removeUndefined);
    expect(result).toEqual(['abc', 123]);
  });
});
