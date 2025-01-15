class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index]; // bucket is array of arrays of key value pairs
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let samekeyItem = bucket.find(item=>item[0]===key)
            if(samekeyItem){
                samekeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return "invalid key";
        
    }
    display(){
        for(let i=0;i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }

    }
}

const table = new HashTable(10);
table.set('name', 'Neena');
table.set('place', 'KYM');
table.set('month', 'jan');
table.set('year', '2025');
console.log(table.get('name'))
table.display()