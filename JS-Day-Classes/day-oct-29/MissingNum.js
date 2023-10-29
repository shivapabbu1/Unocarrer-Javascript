// Input: arr[] = {4, 3, 6, 2, 1}  
// output 5
// 1 2  3 4 6
// 1+2+3+4+5+6- 1+ 2 + 3+ 4+ 6---5



let num = [4, 3,2, 6,1, 2, 1]
let t
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i] > num[j]){
            t= num[i]
            num[i] = num[j]
            num[j] = t
        }
    }
}
console.log(num)
for(let i=0;i<num.length;i++){
    if(i > 0 && num[i] === num[i - 1]) {
        continue;
    }
    if(num[i] != i+1) 
    {
        console.log("Missing num-->"+(i+1))
        break
    }
}


// method-2:
/*  

let num = [4, 3, 6, 2, 1]
let min = num[0]
let max = num[0]
let actualSum =0
for(let i=0;i<num.length;i++){
    if(num[i] > max) max = num[i]
    if(num[i] < min) min = num[i]
    actualSum = actualSum +num[i]
}
let sum = 0;
for(let k=min;k<=max;k++){// min=1...max=6
    sum = sum + k;// 
}
console.log("missing num-->"+(sum - actualSum))
*/