const _ = require('lodash')

console.reset = function () { // clears console screen and buffer
  return process.stdout.write('\033c');
}

function complexityCalculator (iterations=10000, inputFunction, input1) {
  let t0 = Date.now()
  let kb0 = Math.round(process.memoryUsage()['heapUsed'] / 1024)

  for (let i=0; i<iterations; i++) {
    console.log( i )
    inputFunction(input1)
  }

  let t1= Date.now()
  let kb1 = Math.round(process.memoryUsage()['heapUsed']  / 1024)

  console.log(`${inputFunction.name} took ${t1 - t0} milliseconds and ${kb1 - kb0}KB to run ${iterations} times.`)
  return {ms: t1-t0, kb: kb1-kb0}

}

function runAllSubmissions(submissionsArr, iterations = 1000, inputArr, anonymous = true) {
  let result = []
  inputArr.forEach((currentInput, inputIndex) => {

    submissionsArr.forEach((currentSubmission, submissionIndex) => {
      result[submissionIndex] = { submission: currentSubmission.submission.name }
      if(anonymous === false) { result[submissionIndex].person = currentSubmission.person }
      console.reset()
      global.gc()
      const calcResults = complexityCalculator(iterations, currentSubmission.submission, currentInput.value)
      result[submissionIndex].result[inputIndex] = {n: currentInput.n, ms: calcResults.ms, kb: calcResults.kb}
      global.gc()
      console.reset()
    })
  })
  const sortedResult = _.sortBy( result, 'ms' )
  console.log( 'sortedResult::', sortedResult )
}


module.exports = {complexityCalculator, runAllSubmissions}
