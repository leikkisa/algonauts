// https://www.hackerrank.com/challenges/insertionsort2/problem

const sampleInput = `6
1 4 3 5 6 2`

const samplen= 6
const sampleArray=[1, 4, 3, 5, 6, 2]

const sampleOutput = `1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6`

function insertionSort2(n, arr) {

  for (let i=1;i<n;i++) {
    if(arr[i] < arr[i-1]) {
      const currentNum = arr[i]
      let currentIndex = i-1
      while (arr[currentIndex] > currentNum) {
          arr[currentIndex + 1] = arr[currentIndex]
          currentIndex--
      }
      arr[currentIndex + 1] = currentNum
    }
    console.log(arr.join(' '))
  }

}
