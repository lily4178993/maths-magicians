/* import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('should handle AC (All Clear) button', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle number input', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '7');
    expect(result).toEqual({ total: '5', next: '37', operation: '+' });
  });

  it('should handle consecutive zeroes', () => {
    const result = calculate({ total: '5', next: '0', operation: '+' }, '0');
    expect(result).toEqual({});
  });

  it('should handle decimal input', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '.');
    expect(result).toEqual({ total: '5', next: '3.', operation: '+' });
  });

  it('should handle = (equals) button', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '8', next: null, operation: null });
  });

  it('should handle +/- button', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '5', next: '-3', operation: '+' });
  });
});
 */
