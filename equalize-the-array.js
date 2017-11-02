const codeTimer = require('./timer')
// array of n integers
// can delete any element from array
// wants all elements to be equal
// must delete zero or more elements
// find and print the minimum number of deletion operations
// n = number of elements

// a is from 1 - 100, n is from 1 - 100

const input = `5
3 3 2 1 3`

// Sally's first attempt
function processData(input) {
    const inputArr = input.split('\n')
    const n = inputArr[0]
    const arr = inputArr[1].split(' ')
    const numCount = {}
    const result = arr.map((el) => {
      numCount[el] ? numCount[el]++ : numCount[el] = 1
    })
    const numCountArr = Object.keys(numCount).map((key) => numCount[key])

    console.log(n - Math.max.apply(null, numCountArr))
}

// Sally's second attempt
function processData2(input) {
    const inputArr = input.split('\n')
    const n = inputArr[0]
    const arr = inputArr[1].split(' ')
    const numCount = []
    const result = arr.map((el) => {
      numCount[el] ? numCount[el]++ : numCount[el] = 1
    })
    const numCountFiltered = numCount.filter(Boolean)

    console.log(n - Math.max.apply(null, numCountFiltered))
}

// Jonathan
function processData3(input) {
  const inputs = input.split('\n', 2)
  const items = inputs[1].split(' ')
  const freqs = items.reduce((f, v) => {
    f[v] = 1 + (f[v] || 0)
    return f
  }, {})
  const maxFreq = Object.keys(freqs).reduce((max, v) => {
    if (freqs[v] > max) {
      max = freqs[v]
    }
    return max
  }, 0)
  console.log(Number.parseInt(inputs[0]) - maxFreq)
}

// Baibhav
function processData4(input) {
  findMinimumDeletions(input.split('\n')[1].split(' '))
}

function findMinimumDeletions(numbers) {
  let numberCounts = numbers.reduce((countMap, number) => {
    if(countMap[number]) {
      countMap[number]++
    } else {
      countMap[number] = 1
    }
    return countMap
  }, {})
  let mostFrequentNumberRepeats = 0

  for(let key in numberCounts) {
    if(numberCounts[key] > mostFrequentNumberRepeats)
    mostFrequentNumberRepeats = numberCounts[key]
  }
  console.log(numbers.length - mostFrequentNumberRepeats)
}

// Jose
function makeMap(array) {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        if (!map[array[i]]) { map[array[i]] = [] }
        map[array[i]].push(i);
    }
    return map;
}
function processData5(input) {
    const arrayStart = input.indexOf('\n') + 1;
    const arraySize = input.slice(0, arrayStart - 1);
    if (arraySize === '0' || arraySize === '1') {
        console.log('0');
        return;
    }

    const array = input.slice(arrayStart).split(' ');
    const map = makeMap(array);

    let max = 0;
    Object.keys(map).forEach((number) => {
        if (map[number].length > max) {
            max = map[number].length;
        }
    });

    let elementsToDelete = arraySize - max;

    if (max === 1) {
        console.log(array.length - 1);
    }
    else {
        console.log(elementsToDelete);
    }
    /*
       console.log(map);
       console.log('Max: ', max);
    */
}

// Zubair
// function processData6(input) {
//   const inputArray = input.split('\n')[1].split(' ')
//   const findAnswerObject = {}
//   let maxRepeatedElement = 1
//
//   inputArray.forEach(element => {
//     if(!findAnswerObject.hasOwnProperty(element)) {
//       findAnswerObject[element] = 1
//     } else {
//       findAnswerObject[element]++
//     }
//     if(maxRepeatedElement)
//   })
//
//   let answer = input[0] - maxRepeatedElement
//   console.log(answer)
// }

//Jason

function howMany(inputArray) {
  const counts = {}
  let maxCount = -Infinity

  inputArray.forEach(element => {
    if (counts[element])
      counts[element]++
    else
      counts[element] = 1

    if (counts[element] > maxCount)
      maxCount = counts[element]
  })

  return inputArray.length - maxCount
}

function processData7(input) {
    const inputArray = input.split('\n')[1].split(' ')
    console.log(howMany(inputArray))
}

function processData8(input) {
    //Enter your code here

    let data = [];
    let count = {};
    let most_common = "";
    let most_common_count = 0;
    let cut_point = 1 + input.indexOf('\n')

    data = input.substring(cut_point, input.length)
    data = data.split(" ");

    for (let i = 0; i < data.length; i++ ){
        if (count[data[i]] === undefined){
            count[data[i]] = 1
            if (most_common_count == 0) {
                most_common_count = 1;
                most_common = data[i];
            }
        } else {
            count[data[i]] += 1
            if (count[data[i]] > most_common_count) {
                most_common = count[data[i]]
                most_common_count = count[data[i]]
            }
        }
    }

    let answer = data.length - most_common_count
    console.log(answer)
}

function processData9(input) {
    //Enter your code here
    let numArr = input.split('\n')[1].split(' ').filter(number => number !== ' ');
    numArr.sort(function (a, b) {
        return a - b;
    });
    let countOfNums = {};
    for (let i = 0; i < numArr.length; i++) {
        if (Object.keys(countOfNums).includes(numArr[i])) {
            countOfNums[numArr[i]]++
        } else {
            countOfNums[numArr[i]] = 1;
        }
    }
    if (Object.keys(countOfNums).length === 1) {
         console.log(0);
        return;
    }
    let countOfNumsValues = [];
    for (let num in countOfNums) {
        countOfNumsValues.push(countOfNums[num]);
    };
    let maxCount = Math.max(...countOfNumsValues);
    let numOfMaxCount;
    for (let num in countOfNums) {
        if (countOfNums[num] === maxCount) {
            numOfMaxCount = num;
        }
    }
    let countRemoved = 0;
    for (var num in countOfNums) {
        if (num !== numOfMaxCount) {
            countRemoved += countOfNums[num]
        }
    }
    console.log(countRemoved);
}

// codeTimer(1000000,processData, input) //Sally 13253
// codeTimer(1000000,processData2, input) //Sally 2 11865
// codeTimer(1000000,processData3, input) //Jonathan 12831
// codeTimer(1000000,processData4, input) //Baibhav 12071
// codeTimer(1000000,processData5, input) //Jose 12218
// codeTimer(1000000,processData6, input) // Zubair
// codeTimer(1000000,processData7, input) //Jason 10287
// codeTimer(1000000,processData8, input) //Ryan 11409
// codeTimer(1000000,processData9, input) //Patrick 17845
