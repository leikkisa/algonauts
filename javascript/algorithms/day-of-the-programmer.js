// 256th day of the year
// 1700-2700 inclusive
//1700-1917 Russia used Julian Calendar
//Since 1919 Gregorian Calendar
// 1918, transitioned from Jan 31st to Feb 14th

// Julian, leap years divisible by 4
// Gregorian leap years are either divisible by 400, or divisible by 4 and not divisible by 100 1700-1917

// given year y, find 256th day of the year according to the official russian calendar that year, print in format dd.mm.yyyy


const y = 2017
const d = 256
let resultDay = d
// const daysPerMonth = {
//   1: 31,
//   2: 28,59
//   3: 31,90
//   4: 30,120
//   5: 31,151
//   6: 30,181
//   7: 31,212
//   8: 31,243
//   9: 31,274
// }

if (y < 1700 || y > 2700) {
  return "Not a valid year"
}

if (y <= 1917) { // Julian calendar
  if (y % 4 == 0) {
    resultDay --
  }
}

if (y == 1918) { // Transition year
  resultDay = resultDay + 13
}

if (y >= 1919) { // Gregorian calendar
  if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
    resultDay --
  }
}

resultDay = resultDay - 243
let result = new Date()
result.setDate(resultDay)
result.setYear(year)
resultString = dateString(result)
return resultString
