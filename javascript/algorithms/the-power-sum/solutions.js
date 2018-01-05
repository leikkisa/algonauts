// Find the ways an integer X can be expressed as the sum of the Nth powers of unique natural numbers
const sampleInput1 = `100
2`
const sampleOutput1 = 3
const sampleInput2 = `100
3`
const sampleOutput2 = 1

function processData(input) {
  const inputArr = input.split('\n')
  const X = inputArr[0]
  const N = inputArr[1]  // the power
  const maxInt = Math.floor(Math.pow(X, 1/N))

  // Create array of available numbers
  const numArr = []
  for (let i=1; i<=maxInt; i++) {
    numArr.push(i ** N)
  }
  let memory = numArr.slice()
  for ()

  numArr.reduce((acc, num, index) => {

  })

  console.log(numArr)

  // console.log(resultArr.length)
}

processData(sampleInput2)
