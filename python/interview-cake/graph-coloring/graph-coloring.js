class GraphNode {
  constructor(label) {
    this.label = label
    this.neighbors = new Set()
    this.color = null
  }
}

const a = new GraphNode('a')
const b = new GraphNode('b')
const c = new GraphNode('c')

a.neighbors.add(b)
b.neighbors.add(a)
b.neighbors.add(c)
c.neighbors.add(b)
a.neighbors.add(c)
c.neighbors.add(a)
// a.color = 1
// b.color = 2

// console.log(a.neighbors.forEach((neighbor) => {
//   console.log(neighbor.color)
//   return neighbor.color
// }))

graph = [a, b, c]

const colors = [1, 2, 3, 4]

// console.log(a)
let maxColor = 0

function assignColor(node) {
  let neighborColors = []
  node.neighbors.forEach((neighbor) => {
    if (neighbor.color !== null) {
      neighborColors.push(neighbor.color)
    }
  })

  colors.some((color) => {
    if(!neighborColors.includes(color)) {
      node.color = color
      maxColor = Math.max(maxColor, color)
      return true
    }
  })

  // for (let i=0; i<colors.length; i++) {
  //   console.log(colors[i])
  //   if(!neighborColors.includes(colors[i])) {
  //     node.color = colors[i]
  //     break
  //   }
  // }

  node.neighbors.forEach((neighbor) => {
    if (neighbor.color === null) {
      assignColor(neighbor)
    }
  })
}

// function assignColor(node) {
//   node.neighbors.forEach((neighbor) => {
//     let colors = []
//     if (neighbor.color) {
//       colors.push(neighbor.color)
//     }
//     if (neighbor.color === null) {
//       assignColor(neighbor)
//     }
//   })
// }

assignColor(a)
console.log(graph)
console.log(maxColor)
