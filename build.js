// const dataSet = [,2,3,4,5,6,7,8,9,10]



// const MySearch = (array,target)=>{
// return MySearchrecur(array,target,0,array.length)
// }
// const MySearchrecur = (array,target,left,right)=>{

//     let mid = Math.floor(( left + right)/2)
//    if(left > right){
//        return false
//    }else if (target === array[mid]){
//        return mid;
//    }else if (target < array[mid]){
//        return MySearchrecur(array,target,mid -1,right)
//    }else {
//     return MySearchrecur(array,target,mid + 1)
//    }
     
// }
// console.log(MySearch(dataSet,5))
const myTree = require ("treeify")

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch{
    constructor(){
        this.root = null;
    }
    push(value){
        const newNode = new Node(value)

        if(!this.root){
           this.root = newNode
           return this
        }
        let current = this.root
        if(value < current.value){
            if(!current.left){
                current.left = newNode
                return this
            }
            current = current.left
        }else if(value > current.value){
            if(!current.right){
                current.right = newNode
                return this
            }
            current = current.right
        }else if(value === current.value){
            return null
        }
    }
}
const newSearched = new BinarySearch()

newSearched.push(15)
newSearched.push(20)
newSearched.push(2)

newSearched.push(2)

console.log(newSearched)
console.log( myTree.asTree(newSearched,true))