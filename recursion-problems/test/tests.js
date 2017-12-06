const { expect } = require('chai')
const {
  factorial,
  digitalRoot,
  sumTo,
  nFibonacci,
  deepCopy,
  bsearch,
  permutations,
  subsets
} = require('../functions')

describe('#factorial', function () {
  it('Calculates the factorial of n', function () {
    expect(factorial(1)).to.equal(1)
    expect(factorial(2)).to.equal(2)
    expect(factorial(5)).to.equal(120)
  })
})

describe('#digitalRoot', function() {
  it('Calculates the digital root of n', function() {
    expect(digitalRoot(9)).to.equal(9)
    expect(digitalRoot(10)).to.equal(1)
    expect(digitalRoot(99)).to.equal(9)
    expect(digitalRoot(75)).to.equal(3)
  })
})

describe('#sumTo', function() {
  it('Calculates sum from n to sum', function() {
    expect(sumTo(5)).to.equal(15)
    expect(sumTo(1)).to.equal(1)
    expect(sumTo(9)).to.equal(45)
    expect(sumTo(-8)).to.equal(null)
  })
})

describe('#nFibonacci', function() {
  it('Returns first n fibonacci numbers', function() {
    expect(nFibonacci(1)).to.deep.equal([1])
    expect(nFibonacci(2)).to.deep.equal([1, 1])
    expect(nFibonacci(3)).to.deep.equal([1, 1, 2])
    expect(nFibonacci(4)).to.deep.equal([1, 1, 2, 3])
  })
})

describe('#deepCopy', function() {
  it('Returns a deep copy of a nested array', function() {
    let meow = ['meow']
    let woof = ['woof']
    let cat = ['cat', meow]
    let dog = ['dog', woof]
    let nested = [cat, dog]
    let deepNested = deepCopy(nested)

    meow.push('purr')
    woof.push('ruff')

    expect(deepNested[0][1].length).to.equal(1)
    expect(deepNested[1][1].length).to.equal(1)

  })
})

describe('#bsearch', function() {
  it('Returns the position of the target', function() {
    expect(bsearch([1, 2, 3], 1)).to.equal(0)
    expect(bsearch([2, 3, 4, 5], 3)).to.equal(1)
    expect(bsearch([2, 4, 6, 8, 10], 6)).to.equal(2)
    expect(bsearch([1, 3, 4, 5, 9], 5)).to.equal(3)
    expect(bsearch([1, 2, 3, 4, 5, 6], 6)).to.equal(5)
    expect(bsearch([1, 2, 3, 4, 5, 6], 0)).to.equal(null)
    expect(bsearch([1, 2, 3, 4, 5, 7], 6)).to.equal(null)
  })
})

/**
 * WRITE YOUR OWN TESTS FOR PERMUTATIONS AND SUBSETS
 */