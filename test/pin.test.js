import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('esPinValido', () => {
    it('debe devolver true para PINes válidos de 4 y 6 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
        expect(esPinValido('123456')).toBe(true);
        expect(esPinValido('908172')).toBe(true);
        expect(esPinValido(1234)).toBe(true); // Soporta números si se pasan directamente
    });

    it('debe devolver false si es null o undefined', () => {
        expect(esPinValido(null)).toBe(false);
        expect(esPinValido(undefined)).toBe(false);
    });

    it('debe devolver false si está vacío o tiene espacios', () => {
        expect(esPinValido('')).toBe(false);
        expect(esPinValido('   ')).toBe(false);
    });

    it('debe devolver false si la longitud no es 4 ni 6', () => {
        expect(esPinValido('123')).toBe(false);
        expect(esPinValido('12345')).toBe(false);
        expect(esPinValido('1234567')).toBe(false);
    });

    it('debe devolver false si contiene caracteres que no son dígitos', () => {
        expect(esPinValido('123a')).toBe(false);
        expect(esPinValido('12-4')).toBe(false);
        expect(esPinValido(' 234')).toBe(false);
    });

    it('debe devolver false si todos los dígitos son iguales', () => {
        expect(esPinValido('0000')).toBe(false);
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('888888')).toBe(false);
        expect(esPinValido('333333')).toBe(false);
    });
});