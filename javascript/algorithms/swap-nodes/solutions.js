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
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

function inOrderTraversal(node, results = [], counter = 0) {
  if(node.left) {
    inOrderTraversal(node.left, results, 1)
  }
  results.push(node.data)
  if(node.right) {
    inOrderTraversal(node.right, results, 1)
  }
  if(counter === 0 ) {
    console.log(results.join(' '))
  }
}

function swapNodes(node) {
  let nodePlaceholder = node.left
  node.left = node.right
  node.right = nodePlaceholder
}

function levelTraversal(root, levelToSwap) {
  let level = 1
  let Q = [[root, level]]
  while (Q.length > 0) {
    let current = Q.shift()
    let node = current[0]
    let level = current[1]
    if (level % levelToSwap === 0) {
      swapNodes(node)
    }
    if(node.left) {
      Q.push([node.left, level + 1])
    }
    if(node.right) {
      Q.push([node.right, level + 1])
    }
  }
}

function processData(input) {
  const inputArr = input.split('\n')
  const n = Number(inputArr[0]) // Number of nodes
  const i = inputArr.slice(1,n+1) // Left and right nodes
  const t = inputArr[n+1] // Number of swaps
  const k = inputArr.slice(n+2) // Levels that gets swapped

// Construct binary tree
  var bst = new BinaryTreeNode(1)
  const queue = [ bst ]
  while (queue.length > 0 && i.length > 0) {
    let currentNode = queue.shift()
    let nodes = i.shift().split(' ')
    if (Number(nodes[0]) !== -1) {
      currentNode.left = new BinaryTreeNode(nodes[0])
      queue.push(currentNode.left)
    }
    if (Number(nodes[1]) !== -1) {
      currentNode.right = new BinaryTreeNode(nodes[1])
      queue.push(currentNode.right)
    }
  }

  k.forEach((level) => {
    levelTraversal(bst, Number(level))
    inOrderTraversal(bst)
  })

}

processData(sampleInput02)
