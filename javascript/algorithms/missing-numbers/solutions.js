// https://www.hackerrank.com/challenges/missing-numbers/problem
// Repeated numbers should be accounted for, otherwise they're missing
// Print all missing numbers in ascending order
// Print each missing number once even if missing multiple times
// Difference between max and min in B <= 100

const sampleInput = `10
203 204 205 206 207 208 203 204 205 206
13
203 204 204 205 206 207 205 208 203 206 205 206 204`

const sampleOutput = '204 205 206'

function processData(input) {
  const inputArr = input.split('\n')
  const listA = inputArr[1].split(' ') // Missing numbers
  const listB = inputArr[3].split(' ')

  const listAFreq = listA.reduce((freq, num) => {
    (!freq[num] ? freq[num] = 1 : freq[num]++)
    return freq
  }, {})

  const listFreq = listB.reduce((freq, num, index) => {
    (!freq[num] ? freq[num] = {'B': 1, 'A':listAFreq[num] || 0} : freq[num].B++)
    return freq
  }, {})

  let result = []

  for (num in listFreq) {
    if (listFreq[num].A < listFreq[num].B) {
      result.push(Number(num))
    }
  }
  console.log(result.sort().join(' '))
}

processData(sampleInput)
