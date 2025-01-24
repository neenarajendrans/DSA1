class TrieNode {
    constructor() {
        this.children = {};  // Stores child nodes
        this.isEndOfWord = false;  // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    // Find the longest common prefix
    longestPrefix() {
        let node = this.root;
        let prefix = "";

        // Traverse the Trie to find the longest common prefix
        while (node && Object.keys(node.children).length === 1 && !node.isEndOfWord) {
            let char = Object.keys(node.children)[0];  // Get the only child
            prefix += char;  // Add the character to the prefix
            node = node.children[char];  // Move to the child node
        }

        return prefix;
    }
}

// Example Usage:
const trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");

console.log(trie.longestPrefix());  // Output: "fl"
