const lib = require('./add');

const { add, add3 } = lib;

describe('add', () => {
  it('add up two numbers', () => {
    expect(add(1,1)).toEqual(2);
  })
  it('add up three numbers', () => {
    expect(add3(1,1,1)).toEqual(3);
  })
})
