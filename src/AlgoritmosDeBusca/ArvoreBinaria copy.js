class Node{
    constructor(dado){
        this.dado = dado;
        this.esquesda = null;
        this.direita = null;
    }
}

class Arvore{
    constructor(dado){
        this.raiz = null
    }

    inserir(dado){
        let novo_no = new Node(dado);
        if(this.raiz === null){
            this.raiz = novo_no
            return;
        }

        if(dado > this.raiz.dado){
            if (this.raiz.esquesda == null){
                this.raiz = new Node(dado);
            }else{
                
            }
        }
    }

}