// https://www.hackerrank.com/challenges/password-cracker/problem
// N registered users with pass[i]
// String which is concatenation of one or more passwords is also accepted
// password can appear zero or more times

const sampleInput0 = `3
6
because can do must we what
wedowhatwemustbecausewecan
2
hello planet
helloworld
3
ab abcd cd
abcd`

const sampleOutput0 = `we do what we must because we can
WRONG PASSWORD
ab cd`

function processData(input) {
  const inputArr = input.split('\n')
  const T = inputArr[0] // test cases

  for (let i=0; i<T; i++) {
    const N = inputArr[i*3+1] // Num users with passwords
    const passwords = inputArr[i*3+2].split(' ')
    console.log( 'passwords::', passwords )
    const loginAttempt = inputArr[i*3+3]
    console.log( 'loginAttempt::', loginAttempt )
    let loginAttemptProcessed = loginAttempt

    let result = []
    let successCounter = 1
    while (loginAttemptProcessed.length > 0 && successCounter === 1) {
      successCounter = 0
      passwords.forEach((password) => {
        if(loginAttemptProcessed.startsWith(password)) {
          result.push[password]
          loginAttemptProcessed.splice(0,password.length)
          successCounter = 1
        }
      })
      console.log( 'loginAttemptProcessed::', loginAttemptProcessed )
      console.log( 'result::', result )
    }

    if (loginAttemptProcessed.length === 0) {
      console.log(result.join(' '))
    } else {
      console.log('WRONG PASSWORD')
    }
  }

  //   passwords.forEach((password) => {
  //     if (loginAttempt = password)
  //     loginAttempt.indexOf(password)
  //     loginAttemptProcessed = loginAttemptProcessed.replace(password,'')
  //   })
  //   if (loginAttemptProcessed.length > 0) {
  //     console.log("WRONG PASSWORD")
  //   }
  // }
}

processData(sampleInput0)
