class HashSondagemLinear{

    constructor(){
        this.array = Array();
        this.valores = Object();
        this.m = 16;
    }

    inserir(chave, valor){
        let indice = this.hash(chave);

        if(this.array[indice] == undefined){
            this.valores = [chave, valor]
            this.array[indice] = this.valores;
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

    buscar(chave){
        let indice = this.hash(chave);
        
        for (let i = indice; this.array[i] != undefined; i++) {
            if (this.array[i][0] == chave ) {
                return this.array[i][1];
            }
        }     
    }

    remover(chave){
        let indice = this.hash(chave);
        
        for (let i = indice; this.array[i] != undefined; i++) {
            if (this.array[i][0] == chave ) {
                this.array[i] = undefined;
            }
        }     
    }

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
export default HashSondagemLinear;
