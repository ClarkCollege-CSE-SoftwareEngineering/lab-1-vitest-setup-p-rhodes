import { describe, it, expect } from 'vitest';
import { add, multiply, divide } from './math';

describe('Math utilities', () => {
    describe('Add', () => {
        it('Adds two positive numbers', () => {
            const a=2;
            const b=3;

            const result=add(a, b);

            expect(result).toBe(5);
        });
        
        it('Adds two negative numbers', () => {
            expect(add(-1, -1)).toBe(-2);
        });
        
        it('Adds zero', () => {
            expect(add(1, 0)).toBe(1);
        });
    });
});