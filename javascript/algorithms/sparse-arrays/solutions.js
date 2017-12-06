const _ = require('lodash')

const sampleInput = `4
aba
baba
aba
xzxb
3
aba
xzxb
ab`

const sampleOutput = `2
1
0`

function processData1(input) {
  // Start: 9:12 AM, Finish: 9:35 AM
  const inputArr = input.split('\n')
  const numStrings = Number(inputArr[0])
  const strings = inputArr.slice(1, numStrings + 1)
  const queries = inputArr.slice(numStrings + 2)

  const stringCount = _.countBy(strings)
  queries.forEach((el) => {
    console.log(stringCount[el] || 0)
  })

}
processData1(sampleInput)

function processData2(input) {
    const inputArr = input.split('\n');
    let numberOfTests = parseInt(inputArr.shift());
    let stringsToQuery = inputArr.slice(0, numberOfTests);
    inputArr.splice(0, numberOfTests);
    let numberOfLines = parseInt(inputArr.shift());
    let count = 0;
    for (let i = 0; i < inputArr.length; i++) {
        stringsToQuery.forEach(str => {
            if (str === inputArr[i]) {
                count++
            }
        })
        console.log(count);
        count = 0;
    }
}

function processData3(input) {
    const inputs = input.split('\n');
    const stringCount = Number.parseInt(inputs[0]);
    const strings = inputs.slice(1, stringCount + 1);
    const queries = inputs.slice(stringCount + 2);
    const stringCounts = strings.reduce((sc, v) => {
        sc[v]++ || (sc[v] = 1);
        return sc;
    }, {});
    console.log(queries.map(v => stringCounts[v] || 0).join('\n'));
}

const findQueriesOccurences = (words, qWords) => {
  let occurences = words.reduce((map, word) => {
    map[word] = ++map[word] || 1
    return map
  }, {})

  return qWords.map(qWord =>
    occurences[qWord] ? occurences[qWord] : 0
  )
}

function processData4(input) {
  // Guess t: O(n), s: O(numberOfStrings * sizeOfStrings)
  let lines = input.split('\n')
  let wordsCount = Number(lines[0])
  let words = lines.slice(1, wordsCount + 1)
  let qCount = lines[wordsCount + 1]
  let queries = lines.slice[wordsCount + 2]
  console.log(findQueriesOccurences(words, queries).join('\n'))
}

function processData5(input) {
    const splitInput = input.split('\n');
    const stringListLength = Number(splitInput[0]);
    const stringList = [];
    const compareListLength = Number(splitInput[stringListLength + 1]) + stringListLength + 2
    const compareList = [];
    const countArray = [];
    for(i = 1; i < stringListLength + 1; i++) {
        stringList.push(splitInput[i]);
    }
    for(j = stringListLength + 2; j < compareListLength; j++) {
        compareList.push(splitInput[j]);
    }
    compareList.forEach(comparison => {
        let count = 0;
        stringList.forEach(string => {
            if(string === comparison) {
                count++;
            }
        })
        countArray.push(count + ' \n')
    })
    console.log(countArray.join(''));
}

module.exports = {
  processData1,
  processData2,
  processData3,
  processData4,
  processData5,
  // processData6,
  // processData7,
  // processData8,
  // processData9,
  // processData10,
  // processData11,
  // processData12,
}

// https://www.hackerrank.com/challenges/sparse-arrays/problem
//
// There is a collection of  strings ( There can be multiple occurences of a particular string ). Each string's length is no more than  characters. There are also  queries. For each query, you are given a string, and you need to find out how many times this string occurs in the given collection of  strings.
//
// Input Format
//
// The first line contains , the number of strings.
// The next  lines each contain a string.
// The nd line contains , the number of queries.
// The following  lines each contain a query string.
//
// Constraints
//
// 1 <= N <= 1000
// 1 <= Q <= 1000
// 1 <= length of any string <= 20
//
// Sample Input
//
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
// Sample Output
//
// 2
// 1
// 0
//
// Explanation
//
// Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and "ab" does not occur at all.
