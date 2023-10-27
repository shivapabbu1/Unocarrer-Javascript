

//Functions:

function msg(){     // without paramas
    console.log("hai hello javascript");
}
console.log("i am from first consloe log");
msg()


function paramfun(data){ // with params
    console.log(data);
}
console.log(" i am from  second  console log");
paramfun("hai i am from paramter function")


function Usdollar(){  //wtithout params return function
      rate=87.50
     return rate
}
let dollar=90
let res=Usdollar()*dollar
console.log("inidan rupees for 90 us dollars"+res);



function EuropesToIndia(euros){ //with parameter and return function
    rate=101.98
    return parseInt(euros*rate)
}
let output=EuropesToIndia(80)
console.log("Euros to India rupees " +output) ;





