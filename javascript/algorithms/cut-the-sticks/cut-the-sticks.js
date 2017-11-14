// To run this file with garbage collection between submissions, type "npm run algo algoritihms/file-name.js" in the terminal

const {complexityCalculator, runAllSubmissions} = require('../complexityCalculator')

const inputs = [
  {n: 6, value: `6
5 4 4 2 2 8`},
  {n: 20, value: `20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20`},
  {n: 30, value: `30
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30`},
  {n: 40, value: `40
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40`},
  {n: 50, value: `50
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50`},
  {n: 60, value: `60
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60`},
  {n: 70, value: `70
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70`},
  {n: 80, value: `80
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80`},
  {n: 90, value: `90
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90`},
  {n: 100, value: `100
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100`},
]

const submissions = [
  {person: 'Sally', submission: processData1},
  {person: 'Patrick', submission: main2},
  {person: 'Miles', submission: main3},
  {person: 'Patrick', submission: main4},
  {person: 'Miles', submission: main5},
]

runAllSubmissions(submissions, 1000, inputs, false)

// Sally
function processData1(input) {
  // Started: 9:15 AM, Finished: 9:35 AM
  // Process input
  const inputArr = input.split('\n')
  const n = parseInt(inputArr[0])
  const a = inputArr[1]
  let sticks = inputArr[1].split(' ').map(Number)
  // Algorithm
  while (sticks.length > 0) {
    console.log( sticks.length )
    sticks = sticks.map(stick => stick - Math.min.apply(null, sticks))
    sticks = sticks.filter(stick => stick > 0)
  }
}

//Patrick 1
function cutLogs(arr) {
    let numOfLogs = arr.length;
    let minLength = Math.min(...arr);
    let reducedLogs = arr.map(num => num - minLength).filter(num => num > 0);
    if (reducedLogs.length > 0) {
        console.log(numOfLogs);
        cutLogs(reducedLogs);
    } else {
        console.log(numOfLogs);
        return;
    }

    /* Alternate method for reducedLogs calculation; will probably save some time by performing mapping
    and filtering operations in the same loop.
    let reducedLogs = [];
    for (let i = 0; i < numOfLogs; i++) {
        if (arr[i] - minLength > 0) {
        reducedLogs.push(arr[i] - minLength);
        }
    }
    */
}

// Patrick 2
function cutLogs2(arr) {
    let numOfLogs = arr.length;
    let minLength = Math.min(...arr);
    let reducedLogs = [];
    for (let i = 0; i < numOfLogs; i++) {
      if (arr[i] - minLength > 0) {
        reducedLogs.push(arr[i] - minLength);
      }
    }
    if (reducedLogs.length > 0) {
        console.log(numOfLogs);
        cutLogs(reducedLogs);
    } else {
        console.log(numOfLogs);
        return;
    }
}

function main2(input) {
  const inputArr = input.split('\n')
  const n = parseInt(inputArr[0])
  const a = inputArr[1]
  let arr = inputArr[1].split(' ').map(Number)
    cutLogs(arr);
}

//
function main4(input) {
  const inputArr = input.split('\n')
  const n = parseInt(inputArr[0])
  const a = inputArr[1]
  let arr = inputArr[1].split(' ').map(Number)
    cutLogs2(arr);
}
// main2(inputs[0].value)

// Miles 1
function main3(input) {
  const inputArr = input.split('\n')
  let n = parseInt(inputArr[0])
    console.log(n)
    arr = inputArr[1].split(' ').map(Number).sort((a,b)=>a-b);
    while(arr.length){
        let cut = arr.shift()
        arr = arr.reduce((acu,el)=>{
            if (el-cut !== 0){
                acu.push(el-cut)
            }
            return acu
        },[])
        if(arr.length>0)console.log(arr.length)
    }
}
// main3(inputs[0].value)

// Miles 2
function main5(input) {
  const inputArr = input.split('\n')
  let n = parseInt(inputArr[0])
  let arr = inputArr[1].split(' ')
    hash = arr.reduce((acu,el) => {     // O(arr.length)
        acu[el] ? acu[el]++ : acu[el]=1
        return acu
    },{})
    list = Object.keys(hash).map(Number).sort((a,b)=>a-b)
    while(list.length){                 // O(list.length)
        console.log(n)
        let cut = list.shift()
        n -= hash[cut]
    }
}
// main5(inputs[0].value)
