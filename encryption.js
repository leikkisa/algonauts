
    var s = 'chillout'
    var l = s.length
    var sqrtLength = Math.sqrt(l)
    console.log( 'sqrtLength::', sqrtLength )
    var cols = Math.ceil(sqrtLength)
    var rows = Math.round(sqrtLength)
    var lines = []
    var encryptedLines = []
    for (col=0; col<cols; col++) {
      encryptedLines[col] = ''
        for (row=0; row<rows; row++) {
            lines[row] = s.slice(row * cols, (row+1) *cols)
            var adder = lines[row][col] || ''
             encryptedLines[col] += adder
        }
    }
    var result = encryptedLines.join(' ')

    console.log( 'lines::', lines )
    console.log( 'encryptedLines::', encryptedLines )
    console.log(result)


// hae and via ecy
