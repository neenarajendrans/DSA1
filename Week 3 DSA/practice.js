class Graph {
    constructor(){
        this.adjlist = {};
    }

    addVertex(vertex){
        if(!this.adjlist[vertex]){
            this.adjlist[vertex] = new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjlist[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjlist[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjlist[vertex1].add(vertex2);
        this.adjlist[vertex2].add(vertex1);
    }
    hasEdge(vertex1,vertex2){
        return this.adjlist[vertex1].has(vertex2) && this.adjlist[vertex2].has(vertex1)
    }
    deleteEdge(vertex1,vertex2){
        this.addVertex[vertex1].delete(vertex2)
        this.adjlist[vertex2].delete(vertex1)
    }
    deleteVertex(vertex){
        
    }
}