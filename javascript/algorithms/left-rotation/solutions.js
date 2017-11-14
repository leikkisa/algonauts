// https://www.hackerrank.com/challenges/array-left-rotation/problem
const sampleInput = `5 4
1 2 3 4 5`
const sampleOutput = '5 1 2 3 4'
const sampleA = [ 1, 2, 3, 4, 5 ]
const sampleD = 4


function leftRotation5(a, d) {
  const result = []

  for (let i = 0; i < a.length; i++) {
    result[i] = a[(i + d) % a.length]
  }

  return result
}

console.log(leftRotation5(sampleA, sampleD))

function leftRotation3(a, d) {
  return a.slice(d).concat(a.slice(0, d))
}

function leftRotation8(a, d) {
  const shift = a.slice(0, d)
  const result = a.slice(d)
  shift.forEach(element => result.push(element))
  return result
}

function leftRotation4(a, d) {
  const endPiece = a.slice(0, d)
  const beginning = a.slice(d)
  return [...beginning, ...endPiece]
}

function leftRotation9(a, d) {
  for(i = 0; i < d; i++) {
    let first = a.shift();
    a.push(first);
  }
  return a
}

function leftRotation7(a, d) {
  // Complete this function
  let i = 0;
  while (i < d) {
    let indexToMove = a[0];
    a.shift();
    a.push(indexToMove);
    i++;
  }
  return a;
}

function leftRotation11(a, d) {
  let i=0;
  while (i< d) {
    let numShifted = a.shift();
    a.push(numShifted)
    i++
  }
  return a
}

function leftRotation10(a, d) {
  // Complete this function
  let holder = []

  for (let i = d; i > 0; i--) {
    holder.push(a.shift())
  }

  holder.forEach(function (element) {
    a.push(element)
  })

  return a
}

function leftRotation2(a, d) {
  const netShift = d % a.length;
  return a.slice(netShift).concat(a.slice(0, netShift))
}

function leftRotation6(a, d) {
  a.push.apply(a, a.splice(0, d))
  return a.join(' ')
}

function newPosition(currIndex, size, rotations) {
  if (currIndex - rotations < 0 ) {
    return size - rotations + currIndex
  } else {
    return currIndex - rotations
  }
}

function leftRotation1(a, d) {
  const length = a.length
  const results = []
  a.forEach((el, index) => {
    const newPos = newPosition(index, length, d)
    results[newPos] = el
  })
  return results.join(' ')

}

// function leftRotation99(a, d) {
//   const length = a.length
//   const results = a.map((el, index) => {
//     const newPos = newPosition(index, length, d)
//     return a[]
//   })
//   console.log(results.join(' '))
//
// }

module.exports = {
  leftRotation1,
  leftRotation2,
  leftRotation3,
  leftRotation4,
  leftRotation5,
  leftRotation6,
  leftRotation7,
  leftRotation8,
  leftRotation9,
  leftRotation10,
  leftRotation11,
}
