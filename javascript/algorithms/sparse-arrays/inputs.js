// Constraints
//

// Sample
//

// Change this function to match constraints and format above
function generateInput(n) {
  let input = {}
  const a = Array.from(Array(n).keys())
  return {a: a, d: a.length - 1, n: a.length}
}

generateInput(100)

const nArr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

const inputs = nArr.map((el) => {
  return {n: el, value: generateInput(el)}
})

module.exports = inputs
