// Given an array of integers of size N, the task is to find the first non-repeating element in this array. 

// Examples:

// Input: {-1, 2, -1, 3, 0}
// Output: 2
// Explanation: The first number that does not repeat is : 2

// Input: {9, 4, 9, 6, 7, 4}
// Output: 6





let arr=[-1,2,-1,3,3,0,0]


 
   
  
   


/* 
    let num =[9, 4, 9, 6, 7, 4]
    let dup =[]

for(let i=0;i<num.length;i++){
     dup=num
    let count=0
    let isPrev = false
    // check previos number list
    for(let k=0;k<i;k++){
        if(num[i] == num[k]) isPrev = true
    }
    if(isPrev == false){
        for(let j=i+1;j<num.length;j++){
            if(num[i] == num[j]) {
                count++
                break
            }// if
        }// j
        if(count == 0) {
            console.log("res--->"+num[i])
            break
        }
    }
    
}// i
console.log("ends")

 */
