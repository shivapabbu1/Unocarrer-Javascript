// let data="welcome javascript. In javascript we can do awesome functionality" 
// let index=data.indexOf("I")
// let cut=data.substring(index)
// console.log(cut);


let msg="hai.i am shivaprasad. i am learning right now javascript along with java"
let res=msg.split(" ")

let wordlength;
let minWord=[];
let maxWordCount;
let maxWord=[];
let count=1
let index=0
for(let i=0;i<res.length;i++){
  
    wordlength=res[i].length
    console.log(res[i]+","+wordlength);
    if(wordlength==0){
        console.log("empty word");
    }else if(wordlength==1){
     minWord[index]=res[i]
     index++;
    } else if(wordlength>1){
        count++
    }
     else if(count>1){
        maxWordCount=count
          
        maxWord[index]=res[i]
        index++

       }
    
    }
  
    console.log(minWord);
    console.log(maxWord);
    


 


    /*
    let data = "It is very difficult to count. This is Sample Data.Welcome to Hyderabad. Good Morning. Java is beautifully language."

let splitStr = data.split(" ")
let maxWord = splitStr[0]
let eachWord
for(let i=1;i<splitStr.length;i++){

    eachWord= splitStr[i]
    if(eachWord.length > maxWord.length){
        maxWord = eachWord
    }
}
console.log("Max Word--->"+maxWord)
console.log("total number of chars of MAx Word--->"+maxWord.length)
console.log("Total Words---->"+splitStr.length)
    
    
    
    */
  
 


 
