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
    
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }


    delete(word) {
      this._delete(this.root, word, 0);
    }
    _delete(node, word, index) {

      // end of the word
      if (index === word.length) {
        if (!node.isEndOfWord) {
          return false;
        }
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }
      // char exists
      const char = word[index];
      if (!node.children[char]) {
        return false;
      }
      //shouldDelete
      const shouldDeleteCurrentNode = this._delete(node.children[char], word, index + 1);
      if (shouldDeleteCurrentNode) {
        delete node.children[char];
        return Object.keys(node.children).length === 0;
      }
      return false;
    }

    words(prefix){
      let current = this.root;
      let results = []
      for(let char of prefix){
        if(!current.children[char]){
          return results;
        }
        current = current.children[char]
      }

      this.collectWords(current, prefix, results)
      return results;
    }
    collectWords(prefixlast,prefix,results){
      if(prefixlast.isEndOfWord){
        results.push(prefix)
      }
      for(char in prefixlast.children){
        this.collectWords(prefixlast.children[char],prefix+char,results)
      }
    }
    

  }
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  console.log(trie.search("apple")); 
  trie.delete("apple");
  console.log(trie.search("apple"));


    