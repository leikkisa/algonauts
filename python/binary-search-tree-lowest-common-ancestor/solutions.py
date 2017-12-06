def lca(root , v1 , v2):
    currentNode = root
    while True:
        if  min(v1, v2) <= currentNode.data <= max(v1, v2):
            return currentNode
        if v1 < currentNode.data and v2 < currentNode.data:
            currentNode = currentNode.left
        if v1 > currentNode.data and v2 > currentNode.data:
            currentNode = currentNode.right
