class Graph{
    constructor(){
        this.adjacencylist = {};
    }
//BFS


    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set();
        }
    }

    addEdge(v1,v2){
        if(!this.adjacencylist[v1]){
            this.addVertex(v1)
        }
        if(!this.adjacencylist[v2]){
            this.addVertex(v2)
        }

        this.adjacencylist[v1].add(v2)
        this.adjacencylist[v2].add(v1)
    }
    bfs(start){
        let queue = [start];
        let visited = {};
        let result =[]
        visited[start] = true;
        let current;
        while(queue.length>0){
            let current = queue.shift();
            result.push(current)
            for(let n of this.adjacencylist[current]){
                if(!visited[n]){
                    visited[n] = true;
                    queue.push(n)
                }

            }
        }
        return result;

    }

}

let graph = new Graph();
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("D","F")
console.log(graph.bfs("A"));
