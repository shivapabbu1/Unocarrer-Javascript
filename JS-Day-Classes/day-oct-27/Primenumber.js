
//Prime:

function isPrime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num % i == 0) count++;
    }
    if(count == 2) return true
    else return false
    }

   for(let k=100,count=0;k>1;k--){
    if(isPrime(k) == true){
        console.log(k)
        count++;
        if(count == 7) {
            break
        }
    }
}


function primeNum(s,e){
    for(let num=s,count=0;num<=e;num++){
          for(let i=1;i<num;i++){
            if(num%i==0)
          
            count++
          }
          if(count==7) console.log(num);
          break;
    }
}
console.log(primeNum(1,100));