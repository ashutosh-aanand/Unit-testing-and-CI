const { expect } = require('@jest/globals');
const math = require('./math');

test('addition tests', ()=>{
    expect(math.Add(1,2)).toBe(3);
    expect(math.Add(4,17)).toBe(21);
});

test('subtraction tests', ()=>{
    expect(math.Subtract(5,3)).toBe(2);
    expect(math.Subtract(10,18)).toBe(-8);
});

test('multiplication tests', ()=>{
    expect(math.Multiply(8,7)).toBe(56);
    expect(math.Multiply(0,73879423)).toBe(0);
});

test('division tests', ()=>{
    expect(math.Divide(18,2)).toBe(9);
    expect(math.Divide(0,9423)).toBe(0);
});
