function unoSplit(str,sChar,len){
    let ch
    let myWords = []
    let capWords=[]
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
   
      for(let j=0;j<myWords.length;j++){
         myWords = myWords[j][0].toUpperCase()
      }
    
    return myWords
}// function
let data = "It is very difficult to count.this is Sample Data.welcome to Hyderabad.good Morning. Java is beautifully language."
let totalWords = unoSplit(data,".",data.length)
console.log("total no of words--->"+totalWords.length)
console.log(totalWords);