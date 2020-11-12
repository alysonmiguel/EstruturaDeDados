class Node {
    constructor(key) {
        this.key = key;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isRoot() {
        if(this.root.right == null && this.root.left == null) return true;
        return false;
    }

    add(val) {
        let newNode = new Node(val);

        if(this.root == null) {
            this.root = newNode;
            console.log(val + " virou raiz")
            return true;
        }

        let aux = this.root;

        while(1) {
            if(val > aux.key) {
                if(aux.right == null) {
                    aux.right = newNode;
                    console.log(aux.key, val + " foi pra direita")
                    break;
                }
                aux = aux.right;
            } else if (val <= aux.key) {
                if(aux.left == null) {
                    aux.left = newNode;
                    console.log(aux.key, val + " foi pra esquerda")
                    break;
                }

                aux = aux.left;
            }
        }
    }

    toString(){}
  
}
// testes (foda se o jest)

let bt = new BinaryTree();

for(let i = 0; i < 20; i++)
    bt.add(Math.floor(Math.random()*18)+3)

console.log(bt.toString());