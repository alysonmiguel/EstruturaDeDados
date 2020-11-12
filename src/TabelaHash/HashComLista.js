import Lista from "../Lista";

class Node{
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashComLista{

    constructor(){
        this.array = Array();
        this.lista = new Lista();
        this.m = 16;
    }

    inserir(chave, valor){
        let indice = this.hash(chave);
        let novo_no = new Node(chave, valor);

        if(this.array[indice] == undefined){
            this.lista.add(novo_no);
            this.array[indice] = this.lista;
        }else{
            for (let i = indice; this.array[indice] != undefined; i++) {
                    if (this.array[i] == undefined ) {
                        this.valores = [chave, valor]
                        this.array[i] = this.valores;
                    return;
                }
            }       
        }   
    }

    // buscar(chave){
    //     let indice = this.hash(chave);
        
    //     for (let i = indice; this.array[i] != undefined; i++) {
    //         if (this.array[i][0] == chave ) {
    //             return this.array[i][1];
    //         }
    //     }     
    // }

    // remover(chave){
    //     let indice = this.hash(chave);
        
    //     for (let i = indice; this.array[i] != undefined; i++) {
    //         if (this.array[i][0] == chave ) {
    //             this.array[i] = undefined;
    //         }
    //     }     
    // }

    hash(dado){
        let hash = 0;
        if (dado.length == 0) return hash;
        for (let i = 0; i < dado.length; i++) {
            hash += dado.charCodeAt(i);
        }

        return Math.abs(hash % this.m);
    }
       
    size(){
		return this.array.length;
    }

    toString(){
       return this.array.toString();
    }

}
export default HashComLista;
