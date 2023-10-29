// Find avg of total students and find grade according to avg marks: [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let stu=[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let avg=0
for(let i=0;i<stu.length;i++){
   avg+=stu[i][1]
  

if (avg < 60){
   console.log("Grade : F");      
   } 
 else if (avg < 70) {
         console.log("Grade : D"); 
           } 
 else if (avg < 80) 
      {
         console.log("Grade : C"); 
 } else if (avg < 90) {
         console.log("Grade : B"); 
 } else if (avg < 100){
         console.log("Grade : A");
       }

   }
   console.log("average is"+avg/stu.length); 