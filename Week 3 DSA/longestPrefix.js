class TrieNode {
    constructor() {
        this.children = {};  // Stores child nodes
        this.isEndOfWord = false;  // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();  // Root node of the Trie
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();  // Create a new node if the char doesn't exist
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;  // Mark the end of the word
    }

    // Function to find the longest common prefix in the Trie
    longestCommonPrefix() {
        let node = this.root;
        let prefix = '';
        
        while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
            const childChar = Object.keys(node.children)[0];  // Get the only child
            prefix += childChar;  // Add the character to the prefix
            node = node.children[childChar];  // Move to the child node
        }

        return prefix;  // Return the longest common prefix
    }


}

// Example Usage

let trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("applause");
trie.insert("app");
trie.insert("bat");
trie.insert("ball");
trie.insert("batman");

// Find and display the longest common prefix
console.log(trie.longestCommonPrefix());  // Output: "ap"
