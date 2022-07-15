function getNeighbors(row, col, graph) {

  let neighbors = [];

  // Check top
  if (graph[row-1] && graph[row-1][col] === 1) {
    neighbors.push([row-1, col]);
  }

  // Check bottom
  if (graph[row+1] && graph[row+1][col] === 1) {
    neighbors.push([row+1, col]);
  }

  // Check left
  if (graph[row][col-1] && graph[row][col-1] === 1) {
    neighbors.push([row, col-1]);
  }

  // Check right
  if (graph[row][col+1] && graph[row][col+1]=== 1) {
    neighbors.push([row, col+1]);
  }
  // Return neighbors
  return neighbors;
}

let matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
];
getNeighbors(0, 0, matrix);


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let startingNode = [row, col];
  let stack = [startingNode];

  // Put the stringified starting node in visited
  visited.add(startingNode.toString());

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let currentNode = stack.pop();
    let currentRow = currentNode[0];
    let currentCol = currentNode[1];

    // DO THE THING (increment size by 1)
    if (graph[currentRow][currentCol] === 1) {
      size++;
    }

    // Then push all the UNVISITED neighbors on top of the stack
    let neighbors = getNeighbors(currentRow, currentCol, graph);
    neighbors.forEach(
      neighbor => {
        if (!visited.has(neighbor.toString())) {
          stack.push(neighbor);
          // and mark them as visited
          visited.add(neighbor.toString());
        }

      }
    );

    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }

  // return size
  return size;

  // Your code here
}

module.exports = [getNeighbors, islandSize];
