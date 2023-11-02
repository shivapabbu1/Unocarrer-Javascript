
function LastDigit(num){
   let r
    for(let i=0;i<=num;i++){
     r=num%10
    }
    return r
}
    let res=LastDigit(9876)
    console.log(res);