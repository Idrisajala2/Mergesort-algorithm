// const prompt = require("prompt-sync")()

// // let name = prompt("what is your name:")

// // console.log(`oh my welcom ${name}`)

// // let x = parseInt(prompt("what is your first value:"));
// // let y = parseInt(prompt("what is your second value:"))
// // let z = x*y
// // console.log(z);



// // let luckynumb = Math.floor(Math.random() * 10) 
// // let guessnum = parseInt(prompt("what is my luky num:"))

// // if (luckynumb === guessnum){
// //     console.log("wow u guess right")
// // }else if (luckynumb > guessnum){
// //   console.log("you are wrong")
// //   console.log("you input is too low" + luckynumb)
// // }else if (luckynumb < guessnum){
// //     console.log("you are wrong.....")
// //     console.log("you input is too high....." + luckynumb)
// // }

// // let lucknumb = Math.floor(Math.random()* 3);
// // while(true){
// //   let guessnum = parseInt(prompt("what is my lucky number:"));
// //   if(lucknumb === guessnum){
// //       console.log("wow .. you guessed my mind, right!");
// //        break;
// //   }else if(lucknumb > guessnum){
// //     console.log("You wrong ....!");
// //     console.log("Your input is too low..." + lucknumb);   
// //   }else if(lucknumb < guessnum){
// //     console.log("You wrong ....!");
// //     console.log("Your input is too High..." + lucknumb);     
// //   }
// // }



// let dataSet1 = {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
//   10: "ten"
// };
// let Newdata = [];
// const dataSet = [1,2,3,4,5,6,7,8,9,10];

// const MySearch = (array,target) =>{
//     return MySearchMain(array,target,0,array.length);
//   }

// const MySearchMain = (array,target,left,right)=>{
//   let mid = Math.floor((left + right)/2)
// if(left > right){
//   return false;
// }
// if(target === array[mid]){
//   return mid;

//    }
//      else if(target < array[mid]){
//     return MySearchMain   (array,target,left,mid -1);
//     }
//     else{
//        return MySearchMain(array,target,mid + 1,right);
//        }
//       } 
// console.log(MySearch(dataSet,1))

// // for(let x in dataSet){
// //   Newdata.push(dataSet[x])
// // }
// // console.log(Newdata);



// const prompt = require("prompt-sync")()

// const search = (value) =>{
//     const data = [1,2,3,4,5,6,7,8,9]
//     for(let i = 0; i < data.length; i ++){
//         let v = data[i]
//         if(value === v){
//             return data.indexOf(value)
//         }
//     }

// }
// // console.log(search(11))
// const array = [1,2,3,4,5,6,7]
// const lsearch = (array,target)=>{
//     for(let y in array ){
//         if (array[y] === target){
//             return y
//         }
//     }
// }
// console.log(lsearch())
// let x = parseInt(prompt("what is your first value:"));
// let y = parseInt(prompt("what is your second value:"))

// let myarry = [,2,3,4,5,6,7,8,9]

// const MySearch = (array,target) => {
//     let left = 0;
//     let right = array.length
//     while (left <= right){
//         const mid = Math.floor((left + right)/2);
//         if(target === array[mid]){
//             return mid
//         } else if (target < array [mid]){
//             right = mid -1
//         }else {
//             left = mid + 1;
//         }
//     }
//     return false;
// }
// console.log(MySearch(myarry,2 ));


// let myarry = [,2,3,4,5,6,7,8,9]

// const MySearch = (array,target) => {
//     let left = 0;
//     let right = array.length
//      return MySearchrecursive (array,target,left,right);
// } 
// const mySearchrecursive =(array,target,left,right) =>{
//     if (left > right){
//         return undefined;
//     }
//     const mid = Math.floor((left + right) / 2);
//     if (target === array[mid]){
//         return mid;
//     }else if (target < array[mid]){
//         return mySearchrecursive(array,target,mid -1,right)
//     }else{
//       return  mySearchrecursive(array,target,left,mid +1)
//     }
// }

     

 

// console.log(MySearch(myarry,2 ));



// class Node {
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null

//     }
// }

// class MySearch{
//     constructor(){
//       this.root = null;
//     }

//     push (value){
//         const NewNode = new Node(value)
//         if(!this.root){
//             this.root = NewNode;
//             return this;
//         }
//         let current = this.root;
//         if(value < current.value){
//             if(!current.left){
//                 current.left = NewNode;
//                 return this;
//             }
//             current.left = current;
//         } else if(value < current.value){
//             if(!current.right){
//                 current.right = NewNode;
//                 return this;
//             }
//             current.right = current;
//     }else if(value === current.value){
//         return null
//     }
// }