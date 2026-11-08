import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci-pin.js';

describe('Función fibonacci(n)', () => {
  it('lanza RangeError si n < 0', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
  });
  it('devuelve 0 si n = 0 y 1 si n = 1', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });
  it('calcula correctamente para n >= 2', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(6)).toBe(8);
  });
});