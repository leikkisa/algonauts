// To run this file with garbage collection between submissions, type "npm run algo algoritihms/algorithm-folder/analysis.js" in the terminal
const {complexityCalculator, runAllSubmissions} = require('../../complexityCalculator')
const inputs = require('./inputs')
const solutions = require('./solutions')

const submissions = [
  {person: 'Sally', submission: solutions.processData},
  {person: 'Patrick', submission: solutions.processData2},
  {person: 'Miles', submission: solutions.processData3},
  {person: 'Jonathan', submission: solutions.processData4},
  {person: 'Ryan', submission: solutions.processData5},
  {person: 'Zubair', submission: solutions.processData6},
  {person: 'Jason', submission: solutions.processData7},
  {person: 'Doug', submission: solutions.processData8},
  {person: 'Jorge', submission: solutions.processData9},
]

runAllSubmissions(submissions, 1000, inputs, false)
