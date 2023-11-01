function FirstNonRepeat(str) {
    for (let i = 0; i < str.length; i++) {
      let count=0
  
      for (let j = 0; j < str.length; j++) {
        if (i !== j && str[i] === str[j]) {
          count++
          break; 
        }
      }//for
  
      if (count==0) {
        return str[i];
      }
    }
  
    return "no first non-repeat charcters";
  }
  

  const result = FirstNonRepeat("swiss");
  console.log(result); 
