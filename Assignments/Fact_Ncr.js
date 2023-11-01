function Fact1(n){
    let nFact=1;
    for(let i=1;i<=n;i++){
        nFact*=i
    }
    return nFact
}
function Fact2(n,r){
    let nFact=1;
    for(let i=1;i<=(n-r);i++){
        nFact*=i
    }
    return nFact
}

let result=Fact1(5)/(Fact1(2)*(Fact2(5,2)))
console.log(result);