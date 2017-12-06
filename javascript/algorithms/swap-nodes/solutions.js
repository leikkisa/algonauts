const sampleInput00 = `3
2 3
-1 -1
-1 -1
2
1
1`

const sampleOutput00 = `3 1 2
2 1 3`

const sampleInput01 = `5
2 3
-1 4
-1 5
-1 -1
-1 -1
1
2`

const sampleOutput01 = `4 2 1 5 3`

const sampleInput02 = `11
2 3
4 -1
5 -1
6 -1
7 8
-1 9
-1 -1
10 11
-1 -1
-1 -1
-1 -1
2
2
4`

const sampleOutput02 = `2 9 6 4 1 3 7 5 11 8 10
2 6 9 4 1 3 7 5 10 8 11`

class BinaryTreeNode {
  constructor(value, left, right) {
    this.value = value
    this.right = right
    this.left = left
  }
}

function processData(input) {
  const inputArr = input.split('\n')
  const n = Number(inputArr[0]) // Number of nodes
  const i = inputArr.slice(1,n+1) // Left and right nodes
  const t = inputArr[n+1] // Number of swaps
  const k = inputArr.slice(n+2) // Levels that gets swapped
  console.log( 'i::', i )

  var bst = new BinaryTreeNode(1)
  let currentNode = bst
  for (let j = 0; j < i.length; j++) {
    const nodes = i[j].split(' ')
    if (nodes[0] !== -1) {
      currentNode.left = new BinaryTreeNode(nodes[0])
    }
    if (nodes[1] !== -1) {
      currentNode.right = new BinaryTreeNode(nodes[1])
    }
    if (currentNode.left) {
      currentNode = currentNode.left
    }
  }

}

processData(sampleInput00)
