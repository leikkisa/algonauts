const input = `100
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33`

const sampleResult = '0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2'

function processData(input) {
  // start: 9:19 AM, finish: 9:33 AM
  // Guesses: Time O(n), Space O(n)
  const inputArr = input.split('\n', 2)
  const n = inputArr[0]
  const ar = inputArr[1].split(' ')
  let result = new Array(100).fill(0)
  ar.forEach((el) => {
    result[el]++
  })
  console.log(result.join(' '))
}

// processData(input)

//Patrick
function processData2(input) {
    //Enter your code here
    let formattedInput = input.split('\n').slice(1, 2).join('').split(' ');
    const count = {};
    formattedInput.map(num => {
        count[num] ? count[num]++ : count[num] = 1;
    });
    for (let i = 0; i < 100; i++) {
        if (!Object.keys(count).includes(i.toString())) {
            count[i.toString()] = 0;
        }
    };
    const displayArr = [];
    for (let key in count) {
        displayArr.push(count[key]);
    }
    console.log(displayArr.join(' '));
}

function processData3(input) {

    let count = input.split('\n')[1].split(' ').reduce((acu,el) => {acu[el]?acu[el]++:acu[el]=1; return acu},{})
    for(let i = 0; i<100 ; i++){process.stdout.write(count[i]?count[i]+' ':'0 ')}
}

function processData4(input) {
    const lines = input.split('\n', 2);
    const nums = lines[1].split(' ');
    const count = Number.parseInt(lines[0]);
    const counts = new Array(100).fill(0);
    for (let i = 0; i < count; i++) {
        counts[nums[i]]++;
    }
    console.log(counts.join(' '));
}

function processData5(input) {
    //Enter your code here
    let nums = {};
    let data = [];
    let answer = ""


    let cutpoint = input.indexOf('\n') + 1;
    data = input.substring(cutpoint, input.length).split(' ');

    for (let i = 0; i < data.length; i++) {
        if (nums[data[i]] == undefined) {
            nums[data[i]] = 1
        } else {
            nums[data[i]] += 1
        }
    }

    for (i = 0; i < 100; i++) {
        if (nums[i] == undefined) {
            answer += "0 "
        } else {
            answer += nums[i].toString() + ' ';
        }
    }
    console.log(answer)
}

function processData6(input) {
    const inputArray = input.split('\n')[1].split(' ');

    // create input object with frequencies
    const inputObject = {};
    inputArray.forEach((element) => {
        if (!inputObject[element]) inputObject[element] = 1;
        else inputObject[element]++;
    })

    // create answer array, then join that into a string for the final answer
    const answerArray = [];
    for (let i = 0; i < 100; i++) {
        if (i in inputObject) answerArray[i] = inputObject[i];
        else answerArray[i] = 0;
    }

    console.log(answerArray.join(' '));
}

function printCounts(inputNumbers) {
  const counts = []
  for (let i = 0; i < inputNumbers.length; i++) {
    const currentNumber = inputNumbers[i]

    if (counts[currentNumber]) {
      counts[currentNumber]++
    } else {
      counts[currentNumber] = 1
    }
  }

  for (let i = 0; i < 100; i++) {
    process.stdout.write(counts[i] ? counts[i].toString() : '0')
    if (i !== 100)
      process.stdout.write(' ')
  }
}

function processData7(input) {
  const numbers = input.split('\n')[1].split(' ')

  printCounts(numbers)
}

function processData8(input) {
    const splitInput = input.split('\n')
    const numberOfNumbers = splitInput[0];
    const arrayOfNumbers = splitInput[1].split(' ');
    const numberHashMap = {};
    const answerArray = [];
    for(i = 0; i <= 99; i++) {
        numberHashMap[i] = 0
        arrayOfNumbers.forEach(number => {
            const trueNumber = Number(number);
            if(numberHashMap[trueNumber] === numberHashMap[i]){
                numberHashMap[trueNumber]++
            }
        })
        answerArray.push(numberHashMap[i]);
    }
    console.log(answerArray.join(' '))
}

function processData9(input) {
  let res = '';
  const counts = input.split('\n')[1].split(' ').reduce((obj, number) => {
    obj[number] = 1 + (obj[number] || 0);
    return obj;
  }, {});

  for(let i = 0; i < 100; i++) {
    res += !counts[i] ? '0 ' : `${counts[i]} `
  }

  console.log(res);
}

module.exports = {
  processData,
  processData2,
  processData3,
  processData4,
  processData5,
  processData6,
  processData7,
  processData8,
  processData9
}
