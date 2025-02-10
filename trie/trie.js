class node{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new node();

    }

    insert(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char]){
                current.children[char]= new node()
            }
            current = current.children[char];
        }
        current.isEnd= true;

    }

    delete(word){
        this.deleteHelper(this.root,word,0)
    }
    deleteHelper(current,word,index){
        // when we the end of the word 
        if(index === word.length){
            // such word not exist
            if(!current.isEnd){
                return false;
            }
            // exist then change the isEnd pointer
            current.isEnd = false;
            // check if the end node have children 
            return Object.keys(current.children).length ===0
        }
        // look if the word is there in the trie.
        const char = word[index];
        // not the word then return false
        if(!current.children[char]){
            return false;
        }
        // check the child node has children or not
        const shouldDelete = this.deleteHelper(current.children[char],word,index+1)
        // if child node don't have children remove it.
        if(shouldDelete){
            delete current.children[char];
            // return true if the current node have children or not
            return Object.keys(current.children).length ===0
        }
        // return false to stop deletion if the current node is still valid or has children.
        return false;
        
    }

    delete1(word){
        this.deleteHelper1(this.root, word, 0)
    }
    deleteHelper1(current, word, index){
        //END NODE
        if(index === word.length){
            if(!current.isEnd){
                return false;
            }
            current.isEnd = false;
            return Object.keys(current.children).length ===0;
        }
        // NO WORD
        const char = word[index];
        if(!current.children[char]){
            return false;
        }

        //CHECK
        const shouldDelete = this.deleteHelper1(current.children[char],word,index +1)
        // child node don't have children
        if(shouldDelete){
            delete current.children[char];

            // check the current node is valid or not
            return Object.keys(current.children).length ===0
        }

        return false; // stop deletion if the current node is still valid.

    }

    search(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char]
        }
        return current.isEnd;
    }

    words(prefix){
        let results = [];
        let current = this.root;
        for(let char of prefix){
            if(!current.children[char]){
                return results;
            }
            current = current.children[char]
        }

        this.collectWords(current, prefix, results);
        return results
    }
    collectWords(current , prefix, results){
        if(current.isEnd){
            results.push(prefix)
        }
        for(let char in current.children){
            this.collectWords(current.children[char], prefix+char, results)
        }

    }

   
}

let trie = new Trie();
trie.insert("app");
trie.insert('apple');
trie.insert('map');
trie.insert('maple')
console.log(trie.words('ap'))
console.log(trie.words('m'))
trie.delete('app')
console.log(trie.words('ap'))
console.log(trie.words('m'))