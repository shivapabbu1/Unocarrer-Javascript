//  let twoD=[[1,2,3],[4,5,6],[10,9,8]]
//  //print sum of coloumns in each row

//  sum=[0,0,0]
//  for(let r=0;r<3;r++){
//     for(let c=r;c<=r;c++){
//         sum+=twoD[r][c][r]
//     }
//  }
//  console.log( sum);

// let matrix1 = [ 
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ]
// let rSum1 = [0,0,0]            
// for(let r=0;r<3;r++){
// for(let c=0;c<3;c++){
// rSum1[r] = rSum1[r] + matrix1[c][r] // [0][0],[0][1],[0][2]
// }
// }  

// for(let i=0;i<3;i++){
// console.log("Row "+(i+1)+" Sum--->"+rSum1[i])
// }

 
//  let matrix = [ 
//     [1,2,3,4],
//     [4,5,6,4],
//     [7,8,9,4]
//   ]
//   let rlen=3
//   let clen=4

// let rsum = [0,0,0,] 
// for(let c=0;c<=clen;c++){           
// for(let r=0;r<=rlen;r++){

// rsum[c] += matrix[r][c] 
// }
// }  

// for(let i=0;i<clen;i++){
// console.log("col "+(i+1)+" Sum--->"+csum[i])
// }

// let mat=[[1,2,3,4],[4,5,6,7],[7,8,9,6]]
// let csum=[0,0,0,0]
// for(let c=0;c<4;c++){
//     for(let r=0;r<3;r++){
//         csum[c]=csum[c]+mat[r][c]
//     }
// }
// for(let i=0;i<4;i++){
//     console.log("column"+(i+1)+"sum-->"+csum[i])
// }

let matrix = [ 
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,1,2],
    [1,2,3,4,5],
    [6,7,8,9,1]
              ]

  let rSum = [0,0,0,0,0]   
  let cSum = [0,0,0,0,0]   

  for(let r=0;r<5;r++){
     for(let c=0;c<5;c++){
     rSum[r] +=  matrix[r][c]
        cSum[c]+=matrix[r][c]
}
  }  
  
  for(let i=0;i<5;i++){
    
   
  console.log("Row "+(i+1)+" Sum--->"+rSum[i])
  console.log("col "+(i+1)+" Sum--->"+cSum[i])

  }