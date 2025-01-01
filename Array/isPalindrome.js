 function isPalindrome (str){
        let clearstr = str.toLowerCase();
        let reversestr = clearstr.split("").reverse().join("");
        return clearstr === reversestr ;
    };
    console.log(isPalindrome("Malayalam"));
    //O(n)TS