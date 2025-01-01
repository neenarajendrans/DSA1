let a = [1.2,3,4,4,6,6,67,56,8]
let target = 0

function LinearSearch(a,t){
    for(let i=0; i<a.length; i++){
        if(a[i]=== t){
            return console.log(i)
        }
    }
    return console.log(-1)

}
LinearSearch(a,target)