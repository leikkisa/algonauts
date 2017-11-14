var q = 7;
let lines
let result = []
    for(var a0 = 0; a0 < q; a0++){
        var s = `1234
91011
99100
101103
010203
13
1`;

let result
for (let startLength = 1; startLength <= s.length / 2; startLength++) {
  const startSubstring = s.slice(0, startLength)
  if (startSubstring,length > 1 && startSubstring[0] === '0') {
    result = 'NO'
    break;
  } else {
    const startNum = Number.parseInt(startSubstring)
    const superString = Array(21).fill().map((num, i) => startNum + i).join('')
    if (superString.startsWith(s)) {
      result = 'YES ' + startNum
      break
    } else {
      continue
    }
  }
}

lines = s.split('\n')
digits = lines[a0].length
result[a0] = 'YES'
if(lines[a0].slice(0,1) != lines.slice(1,2)) {
  console.log(result)
}




    }


    const n1EndIndex
