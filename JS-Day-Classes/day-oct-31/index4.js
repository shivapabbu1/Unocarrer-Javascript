function convertToCapital(str,len){
    let ch =""
    let newLineFound= false
    let res = ""
    for(let i=1,j=0;i<len;i++){
        ch = str[j]
         ch1=str[i]
        if( newLineFound  == true ){
            ch = ch.toUpperCase()
           
            newLineFound = false;
        }// if
        
        res +=  ch;
        res+=ch1
        if(ch == "."){
            newLineFound = true
        }// if

        
    }// for
 
   
    return res

}

let data = 
"It is very difficult to count."+
"this is Sample Data."+
"welcome to Hyderabad."+
"good Morning."+
"Java is beautifully language."

let conStr = convertToCapital(data,data.length)
console.log("Result Str------>"+conStr)