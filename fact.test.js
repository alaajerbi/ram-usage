const fact = require('./fact');

test('factorial of -1 equals -1', () => {
    expect(fact(-1)).toBe(-1);
})

test('factorial of 0 equals 1', () => {
    expect(fact(0)).toBe(1);
})

test('factorial of 5 equals 120', () => {
    expect(fact(5)).toBe(120);
})