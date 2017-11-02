function complexityCalculator (iterations=10000, inputFunction, input1) {
  let t0 = Date.now()
  let m0 = process.memoryUsage()['heapUsed']

  for (let i=0; i<iterations; i++) {
    console.log( i )
    inputFunction(input1)
  }

  let t1= Date.now()
  let m1 = process.memoryUsage()['heapUsed']

  console.log(`Code took ${t1 - t0} milliseconds and ${m1 - m0} to run ${iterations} times.`)

}

function runAllSubmissions(submissions, iterations = 1000, anonymous = true) {
  
}


module.exports = {complexityCalculator, runAllSubmissions}
