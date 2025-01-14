class HashTableDoubleHashing {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash1(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    hash2(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return 7 - (hashValue % 7); // A prime number for the second hash function
    }

    insert(key, value) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);

        while (this.table[index] !== undefined) {
            index = (index + stepSize) % this.size; // Double hashing step
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);

        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + stepSize) % this.size;
        }
        return null;
    }

    remove(key) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);

        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                this.table[index] = undefined;
                return;
            }
            index = (index + stepSize) % this.size;
        }
    }
}
