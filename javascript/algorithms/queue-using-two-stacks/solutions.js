const fs = require('fs')
const input2 = fs.readFileSync('./input06.txt', 'utf8')
const sampleInput = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`

function processData(input) {
  const inputArr = input.split('\n')
  const q = inputArr[0]
  const queries = inputArr.slice(1)
  const stack1 = []
  const stack2 = []
  queries.forEach((query) => {
      const type = Number(query[0])
      if (type === 1) { // Enqueue
          const x = query.slice(2)
          stack1.push(x)
      }
      if (type === 2) { // Dequeue
          if (stack2.length === 0) {
              while (stack1.length > 0) {
                  stack2.push(stack1.pop())
              }
          }
           if (stack2.length > 0) {
               stack2.pop()
           }
      }
      if (type === 3) { // Print item at front of queue
           if (stack2.length > 0) {

               console.log(stack2[stack2.length-1])
           } else if (stack1.length > 0) {

               console.log(stack1[0])
           }
      }
  })
}

processData(input2)
