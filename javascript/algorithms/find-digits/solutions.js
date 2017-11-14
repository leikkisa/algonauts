const sampleInput = `2
12
1012`

const sampleResult = `2
3`

function processData(input) {
  // start:  9:40AM, finish:  10:00AM
  // Guesses: Time: O(n2), Space: O(n)
  const inputArr = input.split('\n')
  const n = inputArr[0]
  let divisible = []
  for (num=1; num<=n; num++) {
    divisible[num-1] = 0
    const digitsArr = inputArr[num].split('')
    digitsArr.forEach((digit) => {
      if (digit !== 0) {
        if (inputArr[n] % digit === 0) {
          divisible[num-1]++
        }
      }
    })
  }

  console.log(divisible.join('\n'))
}

// processData(sampleInput)

function main1(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
  let divisible = []
    for(var a0 = 0; a0 < t; a0++){
        var n = inputArr[a0+1]
        divisible[a0] = 0
        const digitsArr = n.split('')
        digitsArr.forEach((digit) => {
        if (digit !== 0) {
            if (n % digit === 0) {
              divisible[a0]++
            }
          }
        })
    }
    console.log(divisible.join('\n'))
}

function main2(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(var a0 = 0; a0 < t; a0++){
        let count = 0
        var n = parseInt(inputArr[a0+1])
        let arr = n.toString().split("")

        for (let i = 0; i < arr.length; i++) {
            if(n % parseInt(arr[i]) == 0) {
                count++

            }

        }
        console.log(count)
    }
}

function main3(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(var a0 = 0; a0 < t; a0++){
        let count = 0
        var n = parseInt(inputArr[a0+1])
        let arr = n.toString().split("")

        for (let i = 0; i < arr.length; i++) {
            if(n % parseInt(arr[i]) == 0) {
                count++

            }

        }
        console.log(count)
    }
}

function main4(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(inputArr[a0+1])
        let options = n.toString().split('').map(Number)
        console.log(options.reduce( (acu, el) => {
            n % el === 0 && acu++
            return acu
        }, 0))

    }

}

function main5(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(inputArr[a0+1])

        console.log(numDigits(n))
    }

}

function numDigits(n) {
  const nString = n.toString()
  let count = 0

  for (let i = 0; i < nString.length; i++) {
    const d = Number(nString.charAt(i))

    if (n % d === 0) {
      count++
    }
  }

  return count
}

function main6(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    const individualArray = [];
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(inputArr[a0+1])
        individualArray.push(n)
    }
    individualArray.forEach(integer => {
        divisibleByItself(integer)
    })
}

function divisibleByItself(integer) {
    const integerArray = integer.toString().split('');
    let divisibleNumbersCount = 0;
    for(i = 0; i < integerArray.length; i++) {
        if(integer % integerArray[i] === 0) {
            divisibleNumbersCount++;
        }
    }
    console.log(divisibleNumbersCount);
}

function main7(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(let a0 = 0; a0 < t; a0++){
      const intString = inputArr[a0+1]
        var n = parseInt(intString)
        console.log([...intString]
            .map(digitString => Number.parseInt(digitString, 10))
            .filter(digit => digit && !(n % digit))
            .length
        );
    }
}

function main8(input) {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
  for(let a0 = 0; a0 < t; a0++){
    var n = parseInt(inputArr[a0+1])
    console.log(countEvenlyDivisibleDigits(n))
  }
}

const countEvenlyDivisibleDigits = number => {
  let _number = number
  let count = 0
  while(number > 0) {
    if(_number % (number % 10) === 0) count ++
    number = Math.floor(number / 10)
  }
  return count
}

function digiDivision(input){
    const inputArray = input.toString().split('')
    let result = 0
    inputArray.forEach( digit => {
        if(Number(digit) === 0) { return  }
        const dividedValue = input / Number(digit)
        if(dividedValue === Math.round(dividedValue) ){ result++}
    })
    console.log(result)
}


function main9() {
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(inputArr[a0+1])
        digiDivision(n)
    }

}


module.exports = {
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  main9
}
