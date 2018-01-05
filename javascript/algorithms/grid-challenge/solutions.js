// https://www.hackerrank.com/challenges/grid-challenge/problem

const sampleInput = `1
5
ebacd
fghij
olmkn
trpqs
xywuv`


const sampleOutput = 'YES'

function gridChallenge(grid) {
  const rowSort = grid.map((row) => {
      return row.split('').sort().join('')
  })
  let n = grid.length

  for (let i=0; i < n - 1 ; i++) {
      for (let j=0; j < n ; j++) {
          if (rowSort[i][j] > rowSort[i+1][j]) {
              return 'NO'
          }
      }
  }

  return 'YES'
}

function main() {
    var t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        var n = parseInt(readLine());
        var grid = [];
        for(var grid_i = 0; grid_i < n; grid_i++){
           grid[grid_i] = readLine();
        }
        var result = gridChallenge(grid);
        process.stdout.write("" + result + "\n");
    }

}
