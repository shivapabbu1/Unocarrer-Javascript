let n=153;

function armstrong(n){
   let m=n
   let r
    let sum=1;
    for(let i=0;i<n;i++){
        r=n%10;
        r=(r*r*r)
        n=n/10 |0
        sum+=r
        }
        if(sum ==m){
            return ("true,it is armstrong number");
        }else{
            return ("false,no it is not a armstrong number");
        }
        
}
let resi=armstrong(153)
console.log(resi);


