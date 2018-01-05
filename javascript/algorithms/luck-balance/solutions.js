// https://www.hackerrank.com/challenges/luck-balance/problem

const sampleInput = `10 3
3 1
13 1
21 1
31 1
17 1
20 1
8 1
12 0
14 0
21 1`

const sampleOutput = 38

function processData(input) {
  const inputArr = input.split('\n')
  const NK = inputArr[0].split(' ').map(Number)
  const N = NK[0] // num of preliminary contests
  const K = NK[1] // max important contests Lena can lose
  let contests = []
  let importantContests = 0
  for(let i=1;i<=N;i++) {
    let LT = inputArr[i].split(' ').map(Number)
    contests[i-1] = [LT[0], LT[1]]
    importantContests += LT[1]
  }
  const winsNeeded = importantContests - K

  const lowestImportant = contests.sort((a, b) => {
    return b[1] - a[1] || a[0] - b[0]
  })
  console.log( 'lowestImportant::', lowestImportant )
  const result = lowestImportant.reduce((acc, el, index) => {
    if(index <= winsNeeded - 1) {
      return acc -= el[0]
    } else {
      return acc += el[0]
    }
  }, 0)

  console.log( result )
}

processData(sampleInput)
