const _ = require('lodash')

_.sortBy( objs, 'first_nom' )

function complexityCalculator (iterations=10000, inputFunction, input1) {
  let t0 = Date.now()
  let m0 = process.memoryUsage()['heapUsed']

  for (let i=0; i<iterations; i++) {
    console.log( i )
    inputFunction(input1)
  }

  let t1= Date.now()
  let m1 = process.memoryUsage()['heapUsed']

  console.log(`${inputFunction.name} took ${t1 - t0} milliseconds and ${m1 - m0}b to run ${iterations} times.`)
  return {time: t1-t0, space: m1-m0}

}

function runAllSubmissions(submissionsArr, iterations = 1000, input, anonymous = true) {
  let result = []
  submissionsArr.forEach((currentValue, index) => {
    result[index] = { submission: currentValue.submission.name }
    if(anonymous === false) { result[index].person = currentValue.person }
    const calcResults = complexityCalculator(iterations, currentValue.submission, input)
    result[index].time = calcResults.time
    result[index].space = calcResults.space
  })
  console.log( 'result::', result )
}


module.exports = {complexityCalculator, runAllSubmissions}
