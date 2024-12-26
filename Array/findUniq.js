
function findunique(arr){
 let map = new Map();
 for(let i=0; i <arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
 }
 map.forEach((value,key)=>{
    if(value ===1){
        console.log(key)
    }
    
 })
}

let a = [2,3,4,4,3,5,6]
findunique(a)


