


const myArray = [8,9,15,28,48,69,1]

const myArray2 = [
    {name:"idris",age:22},
    {name:"victor",age:52},
    {name:"joseph",age:32},
    {name:"blessing",age:22},
    {name:"lucy",age:15}
    
]

myArray2.sort((a,b)=>{
    return a.age - b.age;
});
myArray.sort((a,b)=>{
    return a- b
});
const a = myArray;
const n = a.length
// for(i = 0; i < n -1; i ++){
//     for(j = 0; j < n -1; j ++){
//         if(a[j] > a[j + 1]){
//             let swap = a[j];
//             a[j] = a[j + 1];
//             a[j + 1] = swap
//         }
//     }

// }




for(i = 0; i < n -1 - i; i ++){
    for(j = 0; j < n -1; j ++){
        if(a[j] > a[j + 1]){
            let swap = a[j];
            a[j] = a[j + 1];
            a[j + 1] = swap
        }
    }
}





// console.log("this is sorted", a)

const mergesort = (array) => {
  if(array.length < 2 ){
      return array;

  }
  const mid = Math.floor(array.length / 2);
  const myLeft =  array.splice(0,mid)
  const myRight =  array.splice(0,array.length)
 return merge(mergeSort(myLeft),mergeSort(myRight))
}

const merge = (left, right) =>{
    let result = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right.shift())
        }else{
            result.push(right.shift())
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
};
