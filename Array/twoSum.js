let a = [1,3,4,5,8] 
let target = 6;
//O(n)TS
function twosum (a,t){
    const map = new Map();
    for(let i=0 ; i<a.length;i++){
        let c = target - a[i];
        if(map.has(c)){
            return [i,map.get(c)]
        }else(
            map.set(a[i],i)
        )
    }
}

console.log(twosum(a,target));
