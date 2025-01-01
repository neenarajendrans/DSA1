
let a =[34,45,75,978,7,4]
function secMaxEven (array){
const [Largest,secondLargest] = array.reduce(([max1,max2],num)=>{
  if(num%2 === 0){
    if(num>max1){
      return [num,max1];
    }else if(num>max2 && num!==max1){
      return [max1,num]
    }
  }
  return [max1,max2];
},[-Infinity,-Infinity]);
 return console.log(secondLargest,Largest);
}
  
secMaxEven(a)

