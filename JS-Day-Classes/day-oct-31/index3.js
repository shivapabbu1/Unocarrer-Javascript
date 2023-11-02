function unoSplit(str,sChar,len){
    let ch
    let myWords = []
    let temp=""
    let index=0
    for(let i=0;i<len;i++){
        ch = str[i]
        if(ch == sChar){
            myWords[index] = temp
            temp = ""
            index++
        }// if
        else temp = temp + ch
        
    }// for
    return myWords
}// function
let data = "It is very difficult to count.this is Sample Data.welcome to Hyderabad.good Morning. Java is beautifully language."
let totalWords = unoSplit(data," ",data.length)
console.log("total no of words--->"+totalWords.length)
console.log(totalWords);




function convertToCapital(str,len){
    let ch =""
    let newLineFound= false
    let res = ""
    for(let i=0;i<len;i++){
        ch = str[i]
        if( newLineFound  == true){
            ch = ch.toUpperCase()
            newLineFound = false;
        }// if
        res = res + ch
        if(ch == "."){
            newLineFound = true
        }// if
        
    }// for
    return res

}

let data1 = 
"It is very difficult to count."+
"this is Sample Data."+
"welcome to Hyderabad."+
"good Morning."+
"Java is beautifully language."

let conStr = convertToCapital(data1,data1.length)
console.log("Result Str------>"+conStr)