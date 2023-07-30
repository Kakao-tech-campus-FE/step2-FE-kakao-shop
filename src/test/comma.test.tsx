import { comma } from '../utils/comma';

it('comma', () => {
  expect(comma(1000)).toBe('1,000');
});
