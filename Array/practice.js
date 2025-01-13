// unique characters in string.
function unique (str){
    let map = new Map();
    let uni =[]
    for(let s of str){
        if(map.has(s)){
            map.set(s,map.get(s)+1)
        }else{
            map.set(s,1)
        }
    }
    map.forEach((value,key)=>{
        if(value===1){
          uni.push(key)  
        }
    })
    return uni;
}
let str = 'aaaqfvcdeerrryyhhgfdrrtyutt';
console.log(unique(str))

