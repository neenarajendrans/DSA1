class TrieNode {
    constructor() {
        this.children = {};  // Stores child nodes
        this.count = 0;       // Count the number of occurrences of this character
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a character into the Trie and update the count
    insert(char) {
        let node = this.root;
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
        node.count += 1;  // Increment count for the character
    }

    // Traverse the Trie to find unique characters (count == 1)
    findUniqueCharacters() {
        let uniqueChars = [];
        this._collectUniqueChars(this.root, uniqueChars);
        return uniqueChars;
    }

    // Helper method to collect characters with count 1
    _collectUniqueChars(node, uniqueChars) {
        if (node.count === 1) {
            uniqueChars.push(node);
        }
        
        for (let char in node.children) {
            this._collectUniqueChars(node.children[char], uniqueChars);
        }
    }
}

// Function to find unique characters in a string using Trie
function findUniqueCharactersInString(str) {
    const trie = new Trie();

    // Insert all characters into the Trie
    for (let char of str) {
        trie.insert(char);
    }

    // Find and return unique characters
    const uniqueChars = trie.findUniqueCharacters();
    return uniqueChars.map(node => node.char); // Convert Trie nodes to chars
}

// Example Usage:
const str = "swiss";
console.log(findUniqueCharactersInString(str));  // Output: ["w", "i"]
