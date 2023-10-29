// DELETE A NUMBER FROM GIVEN DIGITS AND  REPLACE WITH REMAIN

let num = 865567446
let r;
let p=1
let d=0
while(num != 0){
    r = num % 10;
    num = num / 10
    num = parseInt(num,10)
    if(r == 4) {
      r=0;
     
    } else{
        d = d + r * p
        p = p * 10
    }
 
 }
console.log("new number--->"+d)
   
    