// number of a's in the first n characters of infinitely repeated string up to 100 characters
// Finished by 9:37 AM - woot!

const s = 'a'

const l = s.length
const n = 1000000000000
const repeats = n / l

let sum = 0
const aCount = s.split('').map((el) => {
  if(el == 'a') {
    sum++
  }
  return sum
})

const result = aCount[l-1] * Math.floor(n / l) + aCount[(n % l) - 1] || 0
console.log( 'result::', result )

//s{0:n%len(s)]).count("a") + s.count("a"*n//len(s))}
