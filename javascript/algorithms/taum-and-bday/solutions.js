const sampleInput = `10
443463982 833847400
429734889 628664883 610875522
623669229 435417504
266946955 600641444 515391879
763364819 37220400
711640763 34378393 655626808
177742229 51792729
358392247 642296973 158448705
402332409 253667421
384186676 728988281 883897044
962555475 753433321
20275090 23915540 815412555
853918694 319895873
649259954 136169934 948560755
112651828 759839162
236494610 379598782 212996957
751886489 142963601
250217357 463527251 29858345
905844164 493785831
81651073 116752762 136082804`

const sampleResult = `20
37
12
35
12`

function main1(input) {
  const {BigNumber} = require('bignumber.js')
  // start 9:20AM, first draft 9:33AM (Failing 2 of 11)
  const inputArr = input.split('\n')
  const t = parseInt(inputArr[0])
    for(var a0 = 0; a0 < t; a0++){
        var b_temp = inputArr[2*a0+1].split(' ');
        var b = parseInt(b_temp[0]);
        var w = parseInt(b_temp[1]);
        var x_temp = inputArr[2*a0+2].split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var totalCost = 0
        if (x < z + y) {
            totalCost += b * x
        } else {
            totalCost += b * (z + y)
        }
        if (y < z + x) {
            totalCost += w * y
        } else {
            totalCost += w * (z + x)
        }
        console.log(totalCost)
    }

}

main1(sampleInput)

main2(input) { //Jonathan
  const t = parseInt(readline())
  for(let a0 = 0; a0 < t; a0++) {
    const b_temp = readLine().split(' ')
    const b = new BigNumber(parseInt(b_temp[0]))
    const w = new BigNumber(parseInt(b_temp[1]))
    const x_temp = readLine().split(' ')
    let x = parseInt(x_temp[0])
    let y = parseInt(x_temp[1])
    const z = parseInt(x_temp[2])
    if (z < Math.abs(x-y)) {
      if (x > y) {
        x = y + z
      } else if (y > x) {
        y = x + z
      }
    }
    const bCost = new BigNumber(b.times(x))
    const wCost = new BigNumber(w.times(y))
    console.log(bCost.plus(wCost).toString())
  }
}

// module.exports = {
//   processData,
//   processData2,
//   processData3,
//   processData4,
//   processData5,
//   processData6,
//   processData7,
//   processData8,
//   processData9
// }
