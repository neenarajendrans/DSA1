class Graph {
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) &&
               this.adjacencyList[vertex2].has(vertex1)
    }

    deleteEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
 
    deleteVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }else{
            for(let adjacentVertex of this.adjacencyList[vertex]){
                this.deleteEdge(adjacentVertex,vertex);
            }
        }

        delete this.adjacencyList[vertex];
        
    }

    display(){
        for(let value in this.adjacencyList){
            console.log(value,"=>",this.adjacencyList[value])
        }
    }

 


    // deleteEdge(vertex1,vertex2){
    //     this.adjacencyList[vertex1].delete(vertex2)
    //     this.adjacencyList[vertex2].delete(vertex1)
    // }
    
    // deleteVertex(vertex){
    //     if(!this.adjacencyList[vertex]){
    //         return
    //     }else{
    //        for(let adjacencyVertex of this.adjacencyList[vertex]){
    //            this.deleteEdge(adjacencyVertex,vertex)
    //        }
    //        delete this.adjacencyList[vertex];
    //     }
    // }
    
    bfs(start){
        let queue = [start];
        let result=[];
        let visited={};
        let currentVertex;
        visited[start]=true;
        
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            
            for(let neighbor of this.adjacencyList[currentVertex]){
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    queue.push(neighbor);
                }
            }
        }
        
        return result;
    }
    
bfs1(start){
    let q = [start];
    let v = {};
    let curr ;
    v[start] = true;
    re = []

    while(q.length){
        curr = queue.shift();
        reuslt.push(curr)
        for(let n of this.adjacencyList[curr]){
            if(!v[n]){
                v[n]= true;
                queue.push(n)
            }
        }
    }
}

    dfs(start){
        let queue=[start];
        let result =[];
        let visited={};
        let currentVertex;
        visited[start]=true;
        
        while(queue.length){
            currentVertex=queue.pop();
            result.push(currentVertex);
            
            for(let neighbor of this.adjacencyList[currentVertex]){
              if(!visited[neighbor]){
                  visited[neighbor]=true;
                  queue.push(neighbor);
              }   
            }
        }
        
        return result;
    }
    
}

const graph = new Graph();

graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "D");

console.log("Graph before deleting a vertex:");

graph.deleteVertex("D")
graph.display();
console.log("BFS starting from A:", graph.bfs("A"));
console.log("DFS starting from A:", graph.dfs("A")); 