// https://www.hackerrank.com/challenges/problem-name

// To run this file with garbage collection between submissions, type "npm run algo algoritihms/problem-name/analysis.js" in the terminal

const {complexityCalculator, runAllSubmissions} = require('../../complexityCalculator')
const inputs = require('./inputs')
const solutions = require('./solutions')

const submissions = [
  {person: '', submission: solutions.s1},
  // {person: '', submission: solutions.s2},
  // {person: '', submission: solutions.s3},
  // {person: '', submission: solutions.s4},
  // {person: '', submission: solutions.s5},
  // {person: '', submission: solutions.s6},
  // {person: '', submission: solutions.s7},
  // {person: '', submission: solutions.s8},
  // {person: '', submission: solutions.s9},
  // {person: '', submission: solutions.s10},
  // {person: '', submission: solutions.s11},
  // {person: '', submission: solutions.s12},
]

runAllSubmissions(submissions, 1000, inputs, false)
