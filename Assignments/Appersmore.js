 /* 
 Given an array arr of N elements,  A majority element in an array arr of size N is an 
element that appears more than N/2 times in the array. The task is to write a function say isMajority() that 
takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true 
if x is a majority element (present more than n/2 times).

Examples: 

Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
Output: True (x appears more than n/2 times in the given array)

Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
Output: False (x doesn't appear more than n/2 times in the given array)

Input: arr[] = {1, 1, 1, 2, 2}, x = 1
Output: True (x appears more than n/2 times in the given array)
*/

function isMajority(arr,x){
    let freq=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x) {
           freq++
        } else{
           freq=freq
        }
   }
      if(freq>=(arr.length/2))  {
       return "TRUE"
      }else{
       return "FALSE"
      }
   }

let arr=[1, 2, 3, 3, 3, 3, 10]
let x=3;
let res=isMajority(arr,x)
 console.log(res);

 let arr1=[1, 1, 2, 4, 4, 4, 6, 6]
let x1=4;
let res1=isMajority(arr1,x1)
 console.log(res1);

 let arr2=[1, 1, 1, 2, 2]
let x2=1;
let res2=isMajority(arr2,x2)
 console.log(res2);




/* 
let arr=[1, 2, 3, 3,3,3, 10,5]
let x=3
let freq=0
for(let i=0;i<arr.length;i++){
     if(arr[i]===x) {
        freq++
     } else{
        freq=freq
     }
 }
   if(freq>=(arr.length/2))  {
    console.log("true" +  freq);
   }else{
    console.log("false"+ freq);
   }
*/
  

  



   
  

