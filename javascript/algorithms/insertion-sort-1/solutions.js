// https://www.hackerrank.com/challenges/insertionsort1/problem

const sampleInput = `5
2 4 6 8 3`

const sampleInput2 = `14
1 3 5 9 13 22 27 35 46 51 55 83 87 23`

const samplen= 14
const sampleArray='1 3 5 9 13 22 27 35 46 51 55 83 87 23'

const sampleOutput = `2 4 6 8 8
2 4 6 6 8
2 4 4 6 8
2 3 4 6 8 `

function insertionSort1(n, arr) {
  const dataArr = arr.split(' ').map(Number)
  const e = dataArr[n-1]

  while (dataArr[currentIndex] > e) {
      dataArr[currentIndex + 1] = dataArr[currentIndex]
      console.log(dataArr.join(' '))
      currentIndex--
  }

  dataArr[currentIndex + 1] = e
  console.log(dataArr.join(' '))

}

insertionSort1(samplen,sampleArray)

function insertionSort1Online(n, arr) {
  const e = arr[n-1]
  let currentIndex = n-2

  while (arr[currentIndex] > e) {
      arr[currentIndex + 1] = arr[currentIndex]
      console.log(arr.join(' '))
      currentIndex--
  }

  arr[currentIndex + 1] = e
  console.log(arr.join(' '))
}
