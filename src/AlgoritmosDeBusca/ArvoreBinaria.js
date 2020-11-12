class Node{
    constructor(key){
        this.key = key;
        this.right = null;
        this.left = null;
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    add(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
            return;
        }

        if(data > this.root.key){
            this.root.right = newNode;
            console.log("Direita");
        }else if (data <= this.root.key){
            console.log("Esqueda");
            this.root.left = newNode;        
        }
        
    
    }

}

let a =  new Tree();

a.add(3);
a.add(4);
a.add(2);