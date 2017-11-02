var h = parseInt(5);
var m = parseInt(45);
const specialCases = {
  1: "one minute past",
  15: "quarter past",
  30: "half past",
  45: "quarter to",
}

const hours = [
  'one', 'two', 'three',
  'four', 'five', 'six',
  'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve',
  'one'
]

const minutes = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine'
]

let joinWord = ''
let printHour = 0
let printMinute = ''
if(m < 31) {
  joinWord = 'past'
  printHour = h - 1
  printMinute = minutes[m-1]
} else {
  joinWord = 'to'
  printHour = h
  printMinute = minutes[59 - m]
}


let result = ''
if(m===0) {
  result = `${hours[printHour]} o' clock`
} else if (Object.keys(specialCases).includes(m.toString())) {
  printMinute = specialCases[m]
  result = `${printMinute} ${hours[printHour]}`
}
else {
  result = `${printMinute} minutes ${joinWord} ${hours[printHour]}`
}
console.log(result)
