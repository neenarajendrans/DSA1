// class TreeNode{
//     constructor(value){
//         this.value = value;
//         this.children = [];
//     }

//     addChild(child){
//         this.children.push(child)
//     }

//     removeChild(value){
//         this.children = this.children.filter(child=> child.value !==value)
//     }

//     display(level = 0){
//         console.log(" ".repeat(level) + this.value);
//         for(let child of this.children){
//             child.display(level+1)
//         }

//     }
// }

// // Creating the tree
// let root = new TreeNode("Root");
// let nodeA = new TreeNode("A");
// let nodeB = new TreeNode("B");
// let nodeC = new TreeNode("C");
// let nodeD = new TreeNode("D");
// let nodeE = new TreeNode("E");

// // Adding children to root
// root.addChild(nodeA);
// root.addChild(nodeB);

// // Adding children to A
// nodeA.addChild(nodeC);
// nodeA.addChild(nodeD);

// // Adding child to B
// nodeB.addChild(nodeE);

// // Display the tree structure
// root.display();

// /*
// Expected Output:
// Root
//   A
//     C
//     D
//   B
//     E
// */

// // Removing a child
// nodeA.removeChild("C");

// console.log("\nAfter Removing 'C':");
// root.display();

// /*
// Expected Output:
// Root
//   A
//     D
//   B
//     E


// */
// let nodeF = new TreeNode("F");
// let nodeG = new TreeNode("G");
// nodeD.addChild(nodeF);
// nodeF.addChild(nodeG);
// root.display();


class Tnode {
    constructor(value){
        this.value = value;
        this.children = [];

    }

    addChild(child){
        this.children.push(child)
    }
    removeChild(value){
        this.children = this.children.filter(child => child.value !== child)
    }

    display(level = 0){
        console.log(" ".repeat(level)+ this.value);
        for(let child of this.children ){
            child.display(level+1)
        }
    }
}

let node0 = new Tnode("Root")
let node1 = new Tnode("A")
let node2 = new Tnode("B")
let node3= new Tnode("C")
let node4= new Tnode("D")
let node5 = new Tnode("E")
let node6 = new Tnode("F")
let node7 = new Tnode("G")
let node8= new Tnode("H")
node0.addChild(node1)
node0.addChild(node2);
node1.addChild(node3)
node1.addChild(node4)
node2.addChild(node5)
node2.addChild(node6)
node3.addChild(node7)
node5.addChild(node8)
node0.display()



 