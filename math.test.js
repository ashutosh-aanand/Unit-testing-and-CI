const { expect } = require('@jest/globals');
const math = require('./math');

test('adds 1 + 2 to equal 3', ()=>{
    expect(math.Add(1,2)).toBe(3);
});

test('subtract 3 from 5 to get 2', ()=>{
    expect(math.Subtract(5,3)).toBe(2);
});
