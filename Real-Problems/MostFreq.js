// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr=[3, 2, 2, 1, 2, 3, 1, 3, 1, 2, 4, 9, 3,1,1]

   
     let mostFrequentItem;
     let maxCount = 0;
   
     for (let i = 0; i < arr.length; i++) {
       let currentItem = arr[i];
       let count = 0;
   
       for (let j = 0; j < arr.length; j++) {
         if (arr[j] === currentItem) {
           count++;
         }
       }
   
       if (count > maxCount) {
         mostFrequentItem = currentItem;
         maxCount = count;
       }
     }
     console.log(mostFrequentItem);
     console.log(maxCount);
   console.log(mostFrequentItem +maxCount+"times");
   
   var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  