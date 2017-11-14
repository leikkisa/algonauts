// To run this file with garbage collection between submissions, type "npm run algo algoritihms/file-name.js" in the terminal

const {complexityCalculator, runAllSubmissions} = require('../complexityCalculator')


const input = `2
4
5
1 4 5 3 2
4
4
2 2 4 3`



const inputs = [{n: 9, value: input}, {}]

const submissions = [
  {person: 'Jason', submission: processData2},
  {person: 'Miles', submission: processData3},
  {person: 'Patrick', submission: main4},
  {person: 'Miles', submission: main5},
]

function processData(input) {
  const inputArr = input.split('\n')
  const t = Number(inputArr[0])
  let m = [] // dollars
  let n = [] // number of flavors
  let c = [] // price of each flavor
  let result = []
  for(let trip=0; trip<t; trip++) {
    m[trip] = Number(inputArr[3 * trip + 1])
    n[trip] = Number(inputArr[3 * trip + 2])
    c[trip] = inputArr[3 * trip + 3].split(' ').map((el, index) => {
      cost = Number(el)
      return { cost: index }
    })
    console.log( 'c[trip]::', c[trip] )
    let costSum = 0

    loop3:
    do {
      loop1:
      for (flavorOne=0; flavorOne<(n-1); n++) {
        loop2:
        for (flavorTwo=flavorOne+1; flavorTwo<n; flavorTwo++) {
          costSum = c[trip][flavorOne] + c[trip][flavorTwo]
          if (costSum === m[trip]) {
            result[trip] = `${flavorOne+1} ${flavorTwo}`
            flavorOne = n
            flavorTwo = n+1
          }
        }
      }
    } while (costSum !== m[trip])
  }
  console.log( result.join('\n') )
}

// processData(input)

function printTwoFlavors(m, costs) {
  for (let i = 0; i < costs.length - 1; i++) {
    for (let j = i + 1; j < costs.length; j++) {
      if (costs[i] + costs[j] === m) {
        console.log(i + 1, j + 1)
        return
      }
    }
  }
}

function processData2(input) {
    const lines = input.split('\n').slice(1)

    for (let i = 0; i < lines.length; i += 3) {
        const m = Number(lines[i])
        const costs = lines[i + 2].split(' ').map(Number)

        printTwoFlavors(m, costs)
    }
}

function processData3(input) {
    input = input.split('\n')
    input.shift()
    while (input.length){
        let total = input.shift()
        input.shift()
        let options = input.shift().split(' ').reduce((acu, el, ind) => {
            acu[el]?acu[el].push(ind+1) :acu[el]=[ind+1];
            if (acu.max < el) acu.max = el
            return acu
        },{max:0})

        for (let j = 1; j <= options.max; j++){
            if ( options.hasOwnProperty(j) && options.hasOwnProperty(total-j) ) {
                if(j !== total-j ) {
                    options[j][0] > options[total-j][0]
                        ? console.log(options[total-j][0],options[j][0])
                        : console.log(options[j][0],options[total-j][0])
                    break;
                } else if (j === total-j) {
                    options[j][0] < options[j][1]
                        ? console.log(options[j][0], options[j][1])
                        : console.log(options[j][1], options[j][0])
                    break;
                }
            }
        }

    }
}
