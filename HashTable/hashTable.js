// with hash collision
class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size; // size is fixed;
    }

    hash(key){
        let total = 0;
        for(let i=0; i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }
    set(key, value){
        const index = this.hash(key);

        return this.table[index]= value;
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key);
        let remove = this.table[index];
        this.table[index] = undefined;
        return console.log(remove +" -successfully removed")
    }
    display(){
        for(let i =0 ; i< this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

let htable = new HashTable(10);
htable.set("name","Neena")
htable.set("age",25)
htable.set("place","uae")
htable.display()
htable.remove("place")
htable.display()


class HashTable {
    constructor(size){
        this.table = new HashTable(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key,value){
        let index = hash(key);
        const bucket  = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameitem = bucket.find(item =>item[0]===key)
            if(sameitem){
                sameitem[1]= value;
            }else{
                bucket.push([key,value])
            }
        }
    }

}