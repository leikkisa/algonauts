const {complexityCalculator, runAllSubmissions} = require('../complexityCalculator')
const fs = require('fs')
const input2 = fs.readFileSync('./algorithms/inputs.txt', 'utf8')

// i < j < k
// a[j] - a[i] = a[k] - a[j] = d
//n d
//a[i] a[j] a[k]

// count the number of beautiful triplets in the sequence

const input = `7 3
1 2 4 5 7 8 10`

const inputs = [
  {n: 10, value: `10 3
  1 2 4 5 7 8 10 11 12 13`},
  {n: 20, value: `20 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23`},
  {n: 30, value: `30 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33`},
  {n: 40, value: `40 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43`},
  {n: 50, value: `50 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53`},
  {n: 60, value: `60 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63`},
  {n: 70, value: `70 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73`},
  {n: 80, value: `80 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83`},
  {n: 90, value: `90 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93`},
  {n: 100, value: `100 3
  1 2 4 5 7 8 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103`},
]

const submissions = [
  {person: 'Sally', submission: processData1},
  {person: 'Patrick', submission: processData2},
  {person: 'Ryan', submission: processData3},
  {person: 'Miles', submission: processData4},
  {person: 'Jorge', submission: processData5},
  {person: 'Jorge', submission: processData6},
  // {person: 'Jonathan', submission: processData7},
  {person: 'Jonathan', submission: processData4a},
]


runAllSubmissions(submissions, 1000, inputs)

function processData4(input) {
    let d/*ifference*/ = input.split('\n')[0].split(' ').map(Number)[1]
    let a/*rray*/ = input.split('\n')[1].split(' ').map(Number)
    let o/*ptions*/ = a.reduce((acu,el) => {acu[el] ? acu[el]++ : acu[el] = 1; return acu},{})
    let t/*riplets*/ = a.reduce((acu,el) => {
        if (o.hasOwnProperty(el+d) && o.hasOwnProperty(el+d+d)){
            acu++
        } return acu
    },0)
    console.log(t)
}

function processData6(input) {
  const numbers = input.replace(/\n/g, ' ').split(' ');
  let count = 0;
  const obj = numbers.slice(2).reduce((obj, num) => {
    obj[num] = Number(num);
    return obj;
  }, {});

  for(key in obj) {
    if(obj[obj[key] + Number(numbers[1])] && obj[obj[key] + Number(numbers[1]) * 2]) {
      count += 1;
    }
  }

  console.log(count);
}

function processData3(input) {
    //Enter your code here
    let a
    let b
    let c
    let count = 0;
    let test = [];
    let cutPoint = input.indexOf('\n') + 1;
    let data = {
        d: parseInt(input.substring(0, cutPoint - 1).split(" ")[1]),
        tripletCandidates: []
    }
    let holder = input.substring(cutPoint, input.length).split(" ")

    for (let i = 0; i < holder.length; i++) {
        data.tripletCandidates.push(parseInt(holder[i]))
    }

    for (let i = 0; i < data.tripletCandidates.length; i++) {
        a = data.tripletCandidates[i]
        for (let j = i + 1; j < data.tripletCandidates.length; j++) {
            if (data.tripletCandidates[j] - a == data.d) {

                b = data.tripletCandidates[j]
                for (let k = j + 1; k < data.tripletCandidates.length; k++) {

                    if (data.tripletCandidates[k] - b == data.d) {
                        count++;
                        break
                    }
                }
            }
        }
    }

    console.log(count)
}

function processData5(input) {
  const removedNewLine = input.replace(/\n/, ' ').split(' ');
  let count = 0;

  removedNewLine.slice(2).forEach((num, index) => {
    let currentNum = Number.parseInt(num);
    let d = removedNewLine[1];

    if(index + 2 < Number.parseInt(removedNewLine[0])) {
      if(removedNewLine.includes((currentNum + Number.parseInt(d)).toString(), index)
        && removedNewLine.includes((currentNum + (Number.parseInt(d)*2)).toString(), index) ) {
         count += 1;
       }
    }
  });
  console.log(count);
}

function processData2(input) {
    //Enter your code here
    let inputArr = input.split('\n');
    let firstLine = inputArr.shift().split(' ');
    let arrLength = firstLine[0];
    let tripletNum = parseInt(firstLine[1]);
    let secondLine = inputArr.join('').split(' ').map(num => parseInt(num));
    let matchArr = secondLine;
    let countMatches = 0;
    for (let i = 0; i < arrLength; i++) {
        let firstMatch;
        if (matchArr.includes(secondLine[i] + tripletNum)) {
            firstMatch = secondLine[i] + tripletNum;
            if (matchArr.includes(firstMatch + tripletNum)) {
               countMatches++;
            }
        }
    }
    console.log(countMatches);
}

function processData1(input) {
  const inputArr = input.split('\n')
  const firstRowArr = inputArr[0].split(' ')
  const d = Number(firstRowArr[1])
  const sequence = inputArr[1].split(' ')

  const maxA = Math.max.apply(null, sequence)
  const maxA0 = maxA - 2 * d
  const tripletCount = sequence.reduce((triplets, el) => {
    const num0 = parseInt(el)
    const num1 = num0 + d
    const num2 = num0 + d * 2
    if (num0 <= maxA0 && sequence.includes(num1.toString()) && sequence.includes(num2.toString())) {
      triplets++
    }
    return triplets
  }, 0)
  console.log(tripletCount)
}

const are2OK = (ai, aj, d) =>
    Number.parseInt(aj) - Number.parseInt(ai) === Number.parseInt(d);

function processData7(input) {
    const inputs = input.split('\n', 2);
    const params = inputs[0].split(' ', 2);
    const ints = inputs[1].split(' ');
    const okPairIndexes = [];
    for (let i = 0; i < params[0] - 1; i++) {
        for (let j = i + 1; j < params[0]; j++) {
            if (are2OK(ints[i], ints[j], params[1])) {
                okPairIndexes.push([i, j]);
                break;
            }
        }
    }
    let okCount = 0;
    for (let p = 0; p < okPairIndexes.length - 1; p++) {
        for (let q = p + 1; q < okPairIndexes.length; q++) {
            if (okPairIndexes[p][1] === okPairIndexes[q][0]) {
                okCount++;
            }
        }
    }
    console.log(okCount);
}

function processData4a(input) {
    const params = input.split('\n', 2);
    const d/*ifference*/ = params[0].split(' ').map(Number)[1];
    const a/*rray*/ = params[1].split(' ').map(Number);
    const o/*ptions*/ = a.reduce((acu, el) => {
        acu[el] = 1;
        return acu;
    }, {});
    let t/*riplets*/ = a.reduce((acu,el) => {
        if (o.hasOwnProperty(el + d) && o.hasOwnProperty(el + d + d)) {
            acu++;
        }
        return acu;
    }, 0);
    console.log(t);
}

const renderPairVerdict = (ai, aj, d) =>
    Math.sign(Number.parseInt(aj) - Number.parseInt(ai) - Number.parseInt(d));

function processData8(input) {
    const inputs = input.split('\n', 2);
    const params = inputs[0].split(' ', 2);
    const ints = inputs[1].split(' ');
    const okPairIndexes = [];
    const okPairIndexStarts = {};
    for (let i = 0; i < params[0] - 1; i++) {
        for (let j = i + 1; j < params[0]; j++) {
            const pairVerdict = renderPairVerdict(ints[i], ints[j], params[1]);
            if (pairVerdict === 0) {
                okPairIndexes.push([i, j]);
                okPairIndexStarts[i] = 1;
                break;
            }
            else if (pairVerdict === 1) {
                break;
            }
        }
    }
    let okCount = 0;
    for (let p = 0; p < okPairIndexes.length - 1; p++) {
        if (okPairIndexStarts[okPairIndexes[p][1]]) {
            okCount++;
        }
    }
    console.log(okCount);
}

// complexityCalculator(100,processData4, input2) // 376 //4728 //43377 //313918
// complexityCalculator(100,processData6, input2) // 523
// complexityCalculator(100,processData3, input2) // 14008
// complexityCalculator(100,processData5, input2) // 15133
// complexityCalculator(100,processData2, input2) // 25215
// complexityCalculator(100,processData1, input2) // 41563
// complexityCalculator(100,processData7, input2) // 673393
// complexityCalculator(100000,processData4a, input2) // 4839 //36120
// complexityCalculator(100,processData8, input2) //2708

// complexityCalculator(1000000,processData1, input) // 11705
// complexityCalculator(1000000,processData2, input) // 14256
// complexityCalculator(1000000,processData3, input) // 16443
// complexityCalculator(1000000,processData4, input) // 17627
// complexityCalculator(1000000,processData5, input) // 22004

// complexityCalculator(1000000,processDataSally, input) // 11705
// complexityCalculator(1000000,processDataPatrick, input) // 14256
// complexityCalculator(1000000,processDataRyan, input) // 16475
// complexityCalculator(1000000,processDataMiles, input) // 17627
// complexityCalculator(1000000,processDataJorge, input) // 22004
// Jorge2
// Jonathan

// complexityCalculator(1000000,processData5, input) //
// complexityCalculator(1000000,processData6, input) //
// complexityCalculator(1000000,processData7, input) //
// complexityCalculator(1000000,processData8, input) //
// complexityCalculator(1000000,processData9, input) //
