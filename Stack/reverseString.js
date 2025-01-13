function reverse(str){
    let stack =[];
    for(let s of str ){
        stack.push(s)
    }
    let reverse =''
    while(stack.length >0){
        reverse +=stack.pop()
    }
    return reverse;
}
let str ='hello';
console.log(reverse(str))