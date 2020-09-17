class Fracao{

    constructor(numerador, denominador){
        this.dados = [numerador,denominador];
    }

    mult(frac){
        return (this.dados[0] * frac.dados[0]) + "/" + (this.dados[1] * frac.dados[1])
    }

    div(frac){
        return (this.dados[0] * frac.dados[1]) + "/" + (this.dados[1] * frac.dados[0])
    }

}
 
export default Fracao;