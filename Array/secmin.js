function secmin(a){
    let min = Infinity;
    let secmini = Infinity;
    if(a.length<2){
        return console.log("there is no secmin");
        
    }
    for(let i =0; i<a.length;i++){
        if(a[i]<min){
            secmini = min;
            min = a[i];

        }else if(secmini > a[i] && a[i] !== min){
            secmini= a[i];
        }
    }
    return [secmini,min]
}
let a = [2,3,5,6,7,89,56,7]
console.log(secmin(a));

let array =[1,2,3,4]
console.log(array)
array.splice(2,2,23,34)
console.log(array)
let one = array.slice(1,3)
console.log(one)
