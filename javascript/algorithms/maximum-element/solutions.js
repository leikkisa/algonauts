const sampleInput = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`

const sampleOutput = `26
91`

function processData(input) {
  const queries = input.split('\n').slice(1)
  const stack = []
  const max = [ 0 ]
  queries.forEach(query => {
    switch (query[0]) {
      case '1':
        const newNum = Number(query.slice(2))
        stack.push(newNum)
        max.push(Math.max(max[max.length-1], newNum))
        break
      case '2':
        stack.pop()
        max.pop()
        break
      case '3':
        console.log(max[max.length-1])
        break
    }
  })
}

processData(sampleInput)
