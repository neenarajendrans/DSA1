class HasTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i =0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total% this.size;
    }
    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index]= [[key,value]]
            this.size++;
        }else{
            let sameindex = bucket.find(item=>item[0]===key)
            if(sameindex){
                sameindex[1]= value
            }else{
                bucket.push([key,value])
                this.size++;
            }
        }
    }
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameindex = bucket.find(item=>item[0]===key)
            if(sameindex){
                return sameindex[1]
            }
        }
        return undefined;
    }

    print(){
        console.log(this.table)
    }
}

let table = new HasTable(10);
table.set("name","Neena")
table.print()