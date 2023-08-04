import { comma } from '../utils/convert';

test('comma is good', () => {
    expect(comma(10000)).toBe('10,000');
});
