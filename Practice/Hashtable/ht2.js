class Hash{
    constructor(s){
        this.t = new Array(s);
        this.s = s;

    }
    h(key){
        let total = 0;
        for(let i=0; i<key.length;i++){
            total += key.charCodeAt(i);

        }
        return total % this.s;
    }
    set(key,value){
        let index = this.h(key);
        let bucket = this.t[index];
        if(!bucket){
            this.t[index ]= [[key,value]];
        }else{
            let sameKeyI = bucket.find(item=>item[0]=== key)
            if(sameKeyI){
                sameKeyI[1]= value;

            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.h(key);
        let bucket = this.t[index];
        if(bucket){
            let sameKeyI = bucket.find(item=>item[0]===key)
            if(sameKeyI){
                return sameKeyI[1]
            }
        }
        return undefined;
    }
    display(){
        for(let i =0;i<this.t.length; i++){
            if(this.t[i]){
                console.log(this.t[i]);
                
            }
        }
    }
}

const table = new Hash(10);
table.set('name', 'Neena');
table.set('place', 'KYM');
table.set('month', 'jan');
table.set('year', '2025');
console.log(table.get('name'))
table.display()