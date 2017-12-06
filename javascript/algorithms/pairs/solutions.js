const sampleInput = `5 2
1 5 3 4 2`
const sampleOutput = 3

function processData(input) {
  const inputArr = input.split('\n')
  const nAndk = inputArr[0].split(' ')
  const k = Number(nAndk[1])
  const numbersArr = inputArr[1].split(' ').map(Number)
  const numbersObj = numbersArr.reduce((acc, number, i) => {
    acc[number] = number + k
    return acc
  }, {})

  let totalPairs = 0

  numbersArr.forEach((number) => {
    if (numbersObj[number+k]) {
      totalPairs++
    }
  })
  console.log(totalPairs)
}

processData(sampleInput)
