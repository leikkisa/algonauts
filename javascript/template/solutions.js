// To run this file with garbage collection between submissions, type "npm run algo file-name.js" in the terminal

const {complexityCalculator, runAllSubmissions} = require('../complexityCalculator')
// const fs = require('fs')
// const input = fs.readFileSync('./input-file.txt', 'utf8')

Object.prototype.values = function(obj) {
    return Object.keys(obj).map( key => {
        return obj[key]
    })
}

const inputs = [
  {n: 10, value: ``},
  {n: 20, value: ``},
  {n: 30, value: ``},
  {n: 40, value: ``},
  {n: 50, value: ``},
  {n: 60, value: ``},
  {n: 70, value: ``},
  {n: 80, value: ``},
  {n: 90, value: ``},
  {n: 100, value: ``},
]

const submissions = [
  {person: 'Sally', submission: processData1},
]

function processData1(input) {
 // function code goes here
}

runAllSubmissions(submissions, 1000, input)
