// https://www.hackerrank.com/challenges/sparse-arrays

// To run this file with garbage collection between submissions, type "npm run algo algoritihms/sparse-arrays/analysis.js" in the terminal

const {complexityCalculator, runAllSubmissions} = require('../../complexityCalculator')
const inputs = require('./inputs')
const solutions = require('./solutions')

const submissions = [
  {person: 'Sally', submission: solutions.s1},
  {person: 'Patrick', submission: solutions.s2},
  {person: 'Jonathan', submission: solutions.s3},
  {person: 'Baibhav', submission: solutions.s4},
  {person: 'Doug', submission: solutions.s5},
  // {person: '', submission: solutions.s6},
  // {person: '', submission: solutions.s7},
  // {person: '', submission: solutions.s8},
  // {person: '', submission: solutions.s9},
  // {person: '', submission: solutions.s10},
  // {person: '', submission: solutions.s11},
  // {person: '', submission: solutions.s12},
]

runAllSubmissions(submissions, 1000, inputs, false)
