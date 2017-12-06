// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
function hasCycle(head) {
    if (head === null) {
        return false
    }
    let nodes = []
    let currentNode = head

    do {
        nodes.push(currentNode)
        if (currentNode.next === null) {
            return false
        }
        if (nodes.includes(currentNode.next)) {
            return true
        }

        currentNode = currentNode.next
    } while ( true )
}

// John
function hasCycle2(head) {

}

// Jorge
function hasCycle(head, visited={}) {
  if(!head) return false;
  if(visited[head.data]) return true;
  visited[head.data] = true;
  return hasCycle(head.next, visited)
}

0
1
Node {
  data: 2,
  next: Node { data: 3, next: Node { data: 1, next: [Circular] } } }
Node {
  data: 3,
  next: Node { data: 1, next: Node { data: 2, next: [Circular] } } }
Node {
  data: 1,
  next: Node { data: 2, next: Node { data: 3, next: [Circular] } } }
0
1
Node {
  data: 2,
  next: Node { data: 3, next: Node { data: 4, next: [Object] } } }
Node {
  data: 3,
  next: Node { data: 4, next: Node { data: 5, next: [Object] } } }
Node {
  data: 4,
  next: Node { data: 5, next: Node { data: 6, next: [Circular] } } }
0
1
Node {
  data: 2,
  next: Node { data: 3, next: Node { data: 4, next: [Object] } } }
Node {
  data: 3,
  next: Node { data: 4, next: Node { data: 5, next: [Object] } } }
Node {
  data: 4,
  next: Node { data: 5, next: Node { data: 6, next: null } } }
0
1
Node {
  data: 2,
  next: Node { data: 3, next: Node { data: 4, next: [Object] } } }
Node {
  data: 3,
  next: Node { data: 4, next: Node { data: 5, next: [Object] } } }
Node {
  data: 4,
  next: Node { data: 5, next: Node { data: 6, next: [Object] } } }
0
