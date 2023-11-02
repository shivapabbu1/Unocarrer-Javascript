
function FirstDigit(num){
let r=0
for(let i=0;i<=num;i++){
  r=num%10|0;
  num=num/10;
}
return r
}

let res=FirstDigit(9876)
console.log(res);