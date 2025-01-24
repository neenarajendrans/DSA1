class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
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
    getWordsWithPrefix(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) {
          return [];
        }
        node = node.children[char];
      }
      return this._getWordsFromNode(node, prefix);
    }
    _getWordsFromNode(node, prefix) {
      let words = [];
      if (node.isEndOfWord) {
        words.push(prefix);
      }
      for (let char in node.children) {
        words = words.concat(this._getWordsFromNode(node.children[char], prefix + char));
      }
      return words;
    }
  }
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("apricot");
  trie.insert("banana");
  
  console.log(trie.getWordsWithPrefix("ap"));  
  console.log(trie.getWordsWithPrefix("ban")); 
  console.log(trie.getWordsWithPrefix("b"));


