 //FIND SUM OF NUMBER VALUE IN GIVEN NUMBER:
/*
let N = 1456;
let res;
let sum = 0;
while (N > 0) {
  res = N % 10;
  N = Math.floor(N / 10); 
  sum += res;
}
console.log(sum);
*/
// USING FOR LOOP:
/* 
 let num=123;
    let r;
    let s=0;
for(let i=num;i>0;i--){
    r=num%10;
    num=parseInt(num/10);
    s=s+r;

}
console.log(s);
*/

/* //FIND MAX AND MIN VALUE IN GIVEN NUMBER:
let n=23456789
let max=0;
let min=9;

wile (n > 0) {
   let   r = n % 10;
      n = Math.floor(n / 10); 
      if(r>max){
    max=r;
      }else if(r<min){
       min=r;
      }
     }
     console.log(max);
     console.log(min);
     
*/
//FIND EVEN SUM AND ODD SUM IN GIVEN NUMBER
 /* let n=23456789
    let evensum=0;
    let oddsum=0;

     while (n > 0) {
       let   r = n % 10;
      n = Math.floor(n / 10); 
      if(r%2===0) evensum+=r;
      if(r%2!=0) oddsum+=r;
     }
     console.log("evens sum="+evensum);
     console.log("oddsum="+oddsum); 


  //REPLACE A SPECFIC DIGIT WITH ANOTHER NUMBER:
/*
let num = 2429
let r;
let p=1
let d=0
while(num != 0){
    r = num % 10;
    num = num / 10
    num = parseInt(num,10)
    if(r == 2) r=7
    d = d + r * p
    p = p * 10
 }
console.log("new number--->"+d)
  */   


