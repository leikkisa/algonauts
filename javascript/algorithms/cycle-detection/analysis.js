// https://www.hackerrank.com/challenges/problem-name

// To run this file with garbage collection between submissions, type "npm run algo algoritihms/problem-name/analysis.js" in the terminal

const {complexityCalculator, runAllSubmissions} = require('../../complexityCalculator')
const inputs = require('./inputs')
const solutions = require('./solutions')

const submissions = [
  {person: 'Sally', submission: solutions.leftRotation1},
  {person: 'Jonathan', submission: solutions.leftRotation2},
  {person: 'Emma', submission: solutions.leftRotation3},
  {person: 'Jorge', submission: solutions.leftRotation4},
  {person: 'Jason', submission: solutions.leftRotation5},
  {person: 'Helen', submission: solutions.leftRotation6},
  {person: 'Patrick', submission: solutions.leftRotation7},
  {person: 'John', submission: solutions.leftRotation8},
  {person: 'Doug', submission: solutions.leftRotation9},
  {person: 'Ryan', submission: solutions.leftRotation10},
  {person: 'Dani', submission: solutions.leftRotation11},
]

runAllSubmissions(submissions, 1000, inputs, false)
