class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.table[index];
      if (!bucket) {
        this.table[index] = [[key, value]];
      } else {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          sameKeyItem[1] = value;
        } else {
          bucket.push([key, value]);
        }
      }
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
          const sameKeyItem = bucket.find((item) => item[0] === key);
          if (sameKeyItem) {
            return sameKeyItem[1];
          }
        }
        return undefined;
      }
    
      remove(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
          const sameKeyItem = bucket.find((item) => item[0] === key);
          if (sameKeyItem) {
            bucket.splice(bucket.indexOf(sameKeyItem), 1);
          }
        }
      }
    
      display() {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[i]) {
            console.log(i, this.table[i]);
          }
        }
    }
}

const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
console.log(table.get("mane"));
table.remove("name");
table.display();


class HashTableNew {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    // Simple hash function
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    // Insert a key-value pair
    insert(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if the key already exists in the bucket (for collision resolution)
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value; // Update value
                return;
            }
        }

        // Add new key-value pair to the bucket
        this.table[index].push([key, value]);
    }

    // Retrieve value by key
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if (!bucket) return null;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return null;
    }

    // Remove key-value pair by key
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if (!bucket) return;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return;
            }
        }
    }
    re(key){
      let index = this.hash(key);
      let bucket = this.table[index];
      if(bucket){
        let samKey = bucket.find(item=>item[0]===key)
        if(samKey){
          bucket.splice(bucket.indexOf(samKeyItem),1)
        }
      }
    }
}
