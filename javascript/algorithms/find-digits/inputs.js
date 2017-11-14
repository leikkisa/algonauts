// Constraints
// 1 <= t <= 15
// 0 < N < 10^9

function generateInput(t,n) {
  let numbers = []
  for (i=0; i<t; i++) {
    randNum = Math.random()
    numbers.push(Math.floor(Math.random() * 10 ** (n/100)))
  }
  return `${t}
${numbers.join('\n')}`
}

const nArr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

const inputs = []
nArr.forEach((el) => {
  for (j=0; j<15; j++) {
    inputs.push({n: el, t: j, value: generateInput(j, el)})
  }
})
// console.log(inputs)

module.exports = inputs
