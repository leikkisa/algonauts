/**
 * Write a function factorial(n) that uses recursion to calculate the
 * factorial of n
 *
 * Test Cases
 * factorial(1) => 1
 * factorial(2) => 2   // 2 * 1 => 2
 * factorial(5) => 120 // 5 * 4 * 3 * 2 * 1 => 120
 */

const factorial = n => {
  if (n === 1) {
    return 1
  }
  return n * factorial(n-1)
}

/**
 * Write a function digitalRoot(num). It should Sum the digits of a positive
 * integer. If it is greater than or equal to 10, sum the digits of the resulting number.
 * Keep repeating until there is only one digit in the result, called the
 * "digital root".
 *
 * Test Cases
 * digitalRoot(9) => 9
 * digitalRoot(10) => 1
 * digitalRoot(99) => 9
 * digitalRoot(75) => 3
 */

const digitalRoot = num => {
  if (num < 10) {
    return num
  }
  var sum = num.toString().split('').reduce((acc,el) => {
    return acc += Number(el)
  }, 0)
  return digitalRoot(sum)
}

/**
 * Write a function sumTo(n) that uses recursion to calculate the
 * sum from 1 to n (inclusive of n)
 *
 * Test Cases
 * sumTo(5) => 15
 * sumTo(1) => 1
 * sumTo(9) => 45
 * sumTo(-8) => null
 */

const sumTo = n => {
  if(n < 0) {
    return null
  }
  if(n  === 1) {
    return 1
  }
  return n + sumTo(n-1)
}

/**
 * Write a recursive  Fibonacci method.
 * The method should take in an integer n and return the
 * first n Fibonacci numbers in an array.
 *
 * Test Cases
 *  nFibonacci(1) => [1]
 *  nFibonacci(2) => [1, 1]
 *  nFibonacci(3) => [1, 1, 2]
 *  nFibonacci(4) => [1, 1, 2, 3]
 */

const nFibonacci = n => {
  if (n === 1) {
    return [1]
  }
  if (n === 2) {
    return [1,1]
  }
  let accum = nFibonacci(n-1)
  let newNum = accum[n-2] + accum[n-3]
  accum.push(newNum)
  return accum
}

/**
 * Deep Copy
 * Write a method deepCopy(array)that returns a deep copy of a nested array
 *
 * Test Case
 * let ary = [['dog', ['tiger']], ['cat']]
 * deepCopy(ary) => [['dog', ['tiger']], ['cat']]
 *
 * Note that every array(and sub array(s)) that the function returns should be different
 * from the original
 */

const deepCopy = array => {
  if(!Array.isArray(array)) {
    return array
  }
  const newArr = []
  array.forEach((el) => {
    var copyValue = deepCopy(el)
    newArr.push(copyValue)
  })
  return newArr
}


/**
 * Binary Search
 * The binary search algorithm begins by comparing the target value to the value
 * of the middle element of the sorted array. If the target value is equal to the
 * middle element's value, then the position is returned and the search is finished.
 * If the target value is less than the middle element's value, then the search
 * continues on the lower half of the array; or if the target value is greater
 * than the middle element's value, then the search continues on the upper half
 * of the array. This process continues, eliminating half of the elements,
 * and comparing the target value to the value of the middle element of the
 * remaining elements - until the target value is either found (and its associated
 * element position is returned), or until the entire array has been searched
 * (and "not found" is returned).
 *
 * Write a recursive binary search: bsearch(array, target).
 * Note that binary search only works on sorted arrays.
 * Make sure to return the location of the found object (or null if not found!).
 * Hint: you will probably want to use subarrays.
 * Make sure that these test cases are working:
 * bsearch([1, 2, 3], 1) => 0
 * bsearch([2, 3, 4, 5], 3) => 1
 * bsearch([2, 4, 6, 8, 10], 6) => 2
 * bsearch([1, 3, 4, 5, 9], 5) => 3
 * bsearch([1, 2, 3, 4, 5, 6], 6) => 5
 * bsearch([1, 2, 3, 4, 5, 6], 0) => null
 * bsearch([1, 2, 3, 4, 5, 7], 6) => null
 */

const bsearch = (array, target) => {
  let middle = Math.floor(array.length/2)
  let position = middle
  if(array[middle] === target) {
    return position
  } else if (array.length ===0) {
    return null
  } else if(array[middle] > target) {
    let firstHalf = array.slice(0,middle)
    return bsearch(firstHalf, target)
  } else if(array[middle] < target) {
    let secondHalf = array.slice(middle)
    var right = bsearch(secondHalf, target)
    if (right === null) {return null}
    return position + right
  }
}

// console.log(bsearch([1, 2, 3, 4, 5, 6], 6))

/**
 * Write a recursive method permutations(array) that calculates all the
 * permutations of the given array. For an array of length n there are
 *  n! different permutations. So for an array with three elements we will
 *  have 3 * 2 * 1 = 6 different permutations.
 *
 * Test Cases
 * permutations([1, 2, 3]) => [ [1, 2, 3], [1, 3, 2],
 *                               [2, 1, 3], [2, 3, 1],
 *                               [3, 1, 2], [3, 2, 1] ]
 * Note that the ordering of inner arrays may be different in your solution
 */

const permutations = array => {
  //TODO
}

/**
 * Array Subsets
 * Write a method subsets that will return all subsets of an array.
 *
 * Test Cases
 * subsets([]) => [[]]
 * subsets([1]) => [[], [1]]
 * subsets([1, 2]) => [[], [1], [2], [1, 2]]
 * subsets([1, 2, 3]) => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 *
 * Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
 * Those that do not contain 3 (all of these are subsets of [1, 2]).
 * For every subset that does not contain 3,
 * there is also a corresponding subset that is the same,
 * except it also does contain 3.
 */

const subsets = array => {
  //TODO
}


/**
 * FOLLOWING PROBLEMS NEED NOT BE SOLVED RECURSIVELY
 *
 * https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
 * https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem
 *
 */


module.exports = {
  factorial,
  digitalRoot,
  sumTo,
  nFibonacci,
  deepCopy,
  bsearch,
  permutations,
  subsets
}
