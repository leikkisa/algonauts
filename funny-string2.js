

const s = 'acxz'
const half = s.length / 2
const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.map(letter => letter.toLowerCase())
})()

s.split('').reduce((res, el) => {

})

for (l=0; l<half; l++) {
  const frontIndex = letters.findIndex(el => el === s[l])
  const backIndexGoal = 25 - frontIndex
  const backLetter = s[s.length - 1 - l]
  const backIndex = letters.findIndex(el => el === backLetter)
  if (backIndexGoal !== backIndex) {
    return 'Not Funny'
  }
}

return 'Funny'
console.log(result)
