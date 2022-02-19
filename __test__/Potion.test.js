const Potion = require('../lib/Potion')

test('creates a health potion object', () => {
    // make an instance of an object and test the values with given parameters
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});