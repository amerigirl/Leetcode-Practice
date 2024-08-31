/*Depth first search: start wtih a node, and go to its first child, then its first child, until you can't go any further, then backtrack to the node that hasn't been searched and search it in the same way this is typically done with a recursive function: 

      function visit(n): if n not visited: visit n
*/

/* Breadth first search startes with a que and you add direct children to a que and once they've been visited, visit the grandchildren, and continue

let q = [s]

while q not empty: n = q.dequeue()

for v of n.children: q.enqueue(v)
*/


//using the variables below, create an adjacency list



const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

//implementing an adjacency list insteady of a matrix

//1. create the graph using a map --you have api functions and it aligns more with other languages

const adjacencyList = new Map(); 

//add node function

function addNode(airport){
adjacencyList.set(airport, []); //it creates an empty array
}

//add edge, undirected

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

//create graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)
