
const Find_Digits = (N) => {
 let count=0
	 while(N>0){
	  N=( N / 10)|0
	   count++
	 }
	 return count
};
const di=Find_Digits(1234)
console.log(di);