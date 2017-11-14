// To run this file with garbage collection between submissions, type "npm run algo algorithms/algorithm-folder/analysis.js" in the terminal
const {complexityCalculator, runAllSubmissions} = require('../../complexityCalculator')
const inputs = require('./inputs')
const solutions = require('./solutions')

const submissions = [
  {person: 'Sally', submission: solutions.main1},
  {person: 'Ryan', submission: solutions.main2},
  {person: 'Patrick', submission: solutions.main3},
  {person: 'Miles', submission: solutions.main4},
  {person: 'Jason', submission: solutions.main5},
  {person: 'Doug', submission: solutions.main6},
  {person: 'Jonathan', submission: solutions.main7},
  {person: 'Baibhav', submission: solutions.main8},
  {person: 'John', submission: solutions.main9},
]

runAllSubmissions(submissions, 1000, inputs, false)
