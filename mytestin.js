class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;

  }
  
}

class BinarySeach{
    constructor(){
        this.root = null
    }

    add(value){
        const newNode = new Node (value)
        if(this.root){
            this.root = newNode
            return this
        }
        let current = this.root
        if(value > current.value){
            if(!current.left){
                current.left = newNode
                return this
            }
            current = current.left
        }
    }
}




class Node{
 constructor(){
     this.value = value;
     this.right = null;
     this.left = null;

 }
}
class MySerach{
    constructor(){
        this.root = null
    }
    add(value){
     const newNode = new Node (value)
     if(this.root){
       this.root = newNode;
       return this
       let current = this.root 
     }
    }
}

