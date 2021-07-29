const add = require('./add');

describe('add', () => {
  it('add up two numbers', () => {
    expect(add(1,1)).toEqual(2);
  })
})
