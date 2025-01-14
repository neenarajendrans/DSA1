let str = "Hello how are you doing ";

function Upper(str){
   let result = str.split(' ').map((char)=>{ 
    if(char.length>0){
        let last = char[char.length-1].toUpperCase()
        return char.slice(0,-1)+last
    }
   })
   return result.join(' ');
}

console.log(Upper(str))
