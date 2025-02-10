
class TrieNode {
    constructor() {
        this.children = {}; // Holds the child nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie along with all its suffixes
    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let suffix = word.slice(i); // Extract suffix starting from index i
            this._insertSuffix(suffix);
        }
    }
    // Helper method to insert suffix into the Trie
    _insertSuffix(suffix) {
        let node = this.root;
        for (let char of suffix) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                return false; // Word doesn't exist
            }
            node = node.children[char];
        }

        return node.isEndOfWord; // Return true if it's the end of a valid word
    }

    // Check if there's a word starting with the given prefix
    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return false; // No word starts with the prefix
            }
            node = node.children[char];
        }

        return true; // Prefix exists in Trie
    }

    // Check if there is any suffix starting from the given string
    endsWith(suffix) {
        return this.search(suffix);
    }
}

// Example Usage:
const trie = new Trie();
trie.insert("apple");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.endsWith("ple")); // true
console.log(trie.endsWith("le")); // true
console.log(trie.endsWith("pple")); // true
console.log(trie.endsWith("apple")); // true

