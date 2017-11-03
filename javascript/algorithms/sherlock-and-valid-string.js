// all characters in string have the same frequency
// OR deleting exactly 1 character from string will result in all characters having the same frequency

const t1 = 'aabbcc'
const t2 = 'baacdd'
const t3 = 'aabbcccddd'
const t4 = 'abcccc'
const t5 = 'abbbcccddd'
const t6 = 'abbbcccddde'

function letterFrequency(str) {
  return Object.values(str.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1
    return count
  }, {}))
}

function isValid(s) {
  const letterCount = letterFrequency(s)
    const maxCount = Math.max.apply(null, letterCount)
    const minCount = Math.min.apply(null, letterCount)
    if (maxCount - minCount == 0) { return "YES" }
    if (maxCount - minCount > 1) {
      return "NO"
    } else {
      const countMax = letterCount.filter( item => item == maxCount).length
      if (countMax == 1) { return "YES" } else { return "NO" }
    }
}

console.log(isValid(t1))
console.log(isValid(t2))
console.log(isValid(t3))
console.log(isValid(t4))
console.log(isValid(t5))
