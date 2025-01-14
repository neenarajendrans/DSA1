class HashTableQuadraticProbing {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    insert(key, value) {
        let index = this.hash(key);
        let i = 0;

        while (this.table[(index + i * i) % this.size] !== undefined) {
            i++;
        }
        this.table[(index + i * i) % this.size] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let i = 0;

        while (this.table[(index + i * i) % this.size] !== undefined) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                return this.table[(index + i * i) % this.size][1];
            }
            i++;
        }
        return null;
    }

    remove(key) {
        let index = this.hash(key);
        let i = 0;

        while (this.table[(index + i * i) % this.size] !== undefined) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                this.table[(index + i * i) % this.size] = undefined;
                return;
            }
            i++;
        }
    }
}
