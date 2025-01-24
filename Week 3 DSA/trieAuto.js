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

    // Search for a prefix and return all words that start with it
    suggestWords(prefix) {
        let node = this.root;

        // Traverse the Trie based on the prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];  // No word exists with this prefix
            }
            node = node.children[char];
        }

        // Perform DFS to gather all words starting with the prefix
        let suggestions = [];
        this._collectWords(node, prefix, suggestions);
        return suggestions;
    }

    // Helper method to perform DFS and collect all words from the given node
    _collectWords(node, prefix, suggestions) {
        if (node.isEndOfWord) {
            suggestions.push(prefix);
        }

        for (let char in node.children) {
            this._collectWords(node.children[char], prefix + char, suggestions);
        }
    }
}

// Example Usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("appetite");
trie.insert("applause");
trie.insert("bat");
trie.insert("ball");

console.log(trie.suggestWords("app")); // ["apple", "appetite", "applause"]
console.log(trie.suggestWords("ba"));  // ["bat", "ball"]
console.log(trie.suggestWords("b"));   // ["bat", "ball"]
