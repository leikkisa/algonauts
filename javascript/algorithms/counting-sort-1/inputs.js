function generateInput(n) {
  let numbers = []
  for (i=0; i<n; i++) {
    numbers.push(Math.floor(Math.random() * 100))
  }
  return `${n}
${numbers.join(' ')}`
}
// const nArr = []
// for (n=1; n=100; n++) {
//   nArr.push(n*10)
// }
const nArr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

const inputs = nArr.map((el) => {
  return {n: el, value: generateInput(el)}
})

module.exports = inputs
