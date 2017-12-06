const _ = require('lodash')

console.reset = function () { // clears console screen and buffer
  return process.stdout.write('\033c');
}

function complexityCalculator (iterations=10000, inputFunction, input1, input2=null) {
  let t0 = Date.now()
  let kb0 = Math.round(process.memoryUsage()['heapUsed'] / 1024)

  for (let i=0; i<iterations; i++) {
    console.log( i )
    if (input2 === null) {
      inputFunction(input1)
    } else {
      inputFunction(input1, input2)
    }
  }

  let t1= Date.now()
  let kb1 = Math.round(process.memoryUsage()['heapUsed']  / 1024)

  console.log(`${inputFunction.name} took ${t1 - t0} milliseconds and ${kb1 - kb0}KB to run ${iterations} times.`)
  return {ms: t1-t0, kb: kb1-kb0}

}

function runAllSubmissions(submissionsArr, iterations = 1000, inputArr, anonymous = true) {
  let result = []

  submissionsArr.forEach((currentSubmission, submissionIndex) => {
    result[submissionIndex] = { submission: currentSubmission.submission.name, n1: [], n2: [], ms: [], kb: [] }
    if(anonymous === false) { result[submissionIndex].person = currentSubmission.person }
    inputArr.forEach((currentInput, inputIndex) => {
      console.reset()
      global.gc()
      let calcResults = complexityCalculator(iterations, currentSubmission.submission, currentInput.value.a, currentInput.value.d)
      let resultsHolder = calcResults
      result[submissionIndex].n1[inputIndex] = currentInput.n
      result[submissionIndex].n2[inputIndex] = currentInput.value.d
      result[submissionIndex].ms[inputIndex] = calcResults.ms
      global.gc()
      console.reset()
      calcResults = complexityCalculator(1, currentSubmission.submission, currentInput.value.a, currentInput.value.d)
      // resultsHolder = calcResults
      console.log( 'calcResults::', calcResults )
      result[submissionIndex].kb[inputIndex] = calcResults.kb
      global.gc()
      console.reset()
    })
    result[submissionIndex].maxTime = Math.max.apply(null,result[submissionIndex].ms)
  })

  const sortedResult = _.sortBy( result, 'maxTime' )
  console.log( 'sortedResult::', JSON.stringify(sortedResult, null, 2) )
}


module.exports = {complexityCalculator, runAllSubmissions}
