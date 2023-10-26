console.log("Welcome to  Unocarrer")

//  document.body.innerHTML=" Hello Good Morning javascript"

let a=300;
let b=400;
console.log("Before swaping of a and b");
console.log("a="+a +"and"+"b="+b);
let t;
t=a;
a=b;
b=t;
console.log("Afer swaping of a and b");
console.log("a="+a +"and"+"b="+b);

//Find max and min

let x=500, y=600,z=700;
let max,min;

if(x>y){
max=x;
min=y;
}
else{
    max=y;
    min=x
}
if(z>max) max=z;
if(z<min) min=z;
console.log("max="+max);
console.log("min="+min);

//find second max,max,min

// let x1=500, y1=600,z1=700;
// let max1, smax1,min1;

// if(x1>y1){
// max1=x1;
// min1=y1;
// }
// else{
//     max1=y1;
//     min1=x1
// }
// if(z1>max1){
//     smax1=max1;
//     max1=z1;
  
// } 
// if(z1<min1) {
 
//     min1=z1;
// }
// console.log("max="+max1);
// console.log("smax="+smax1)
// console.log("min="+min1);


//find second max 
let x1=600, y1=450,z1=800;
let smax;
if (x1>y1 && x1>z1) {
    if (y1>=z1) {
      smax=y1; 
    } else {
        smax= z1; 
    }
  } else if (y1>=x1 && y1>=z1) {
    if (x1>=z1) {
        smax=x1; 
    } else {
        smax= z1; 
    }
  } else if ( z1>=x1 && z1>=y1){
       if (x1>=y1) {
        smax= x1; 
    } else {
        smax= y1; 
    }
  }

console.log(smax);



//better logic for find second large value
let a1=400
let b1=300
let c1=350
let smax2;

if((a1>b1)&&(c1>b1)&&(a1<c1) ){
    smax2 =a
}
else if(b1 > c1){
    smax2=b
}
else{
    smax2=c1
}

console.log("smax--->"+smax2)