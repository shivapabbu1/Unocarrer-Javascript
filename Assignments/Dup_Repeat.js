// Given an unsorted array of size n. Array elements are in the range of 1 to n. 
// One number from set {1, 2, …n} is missing and one number occurs twice in the array.
// Find these two numbers.

// Examples: 

// Input: arr[] = {3, 1, 3}
// Output: Missing = 2, Repeating = 3
// Explanation: In the array, 2 is missing and 3 occurs twice 

// Input: arr[] = {4, 3, 6, 2, 1, 1}
// Output: Missing = 5, Repeating = 1

let num = [4, 3, 6, 2, 1, 1];


 
function SortArray(num){
    let temp;
    for(let i = 0; i < num.length; i++){
        for(let j = i + 1; j < num.length; j++){
            if(num[i] > num[j]){
                temp = num[i];
                num[i] = num[j];
                num[j] = temp;
              }
            }
        }
        return num
 }

 function RepeatNum(num){
    let repeatNum;
      for (let i = 0; i < num.length; i++) {
    let count = 0;
    for (let j = 0; j < num.length; j++) {
      if (num[i] === num[j]) {
        count++;
      }
    }
     if (count > 1) {
      repeatNum = num[i];
      break;
    }
     }
     return repeatNum
 }
 function Missing(num){
    let k = 0;
 for(let i = 0; i < num.length; i++){
    if(i > 0 && num[i] === num[i - 1]) {
        continue;
    }
   if(num[i] != k + 1){
        k= ( k+1)
        break;
    }
    k++;

}
return k
 }


let sort=SortArray(num)
console.log("sortedarray:"+sort);
let re=RepeatNum(num)
console.log("Repaet number:"+re);
let miss=Missing(num)
console.log("Mising number:"+miss);



