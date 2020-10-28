class Potenciacao {
	
	constructor(base, expoente) {
		this.base = base;
		this.expoente = expoente;
	}

	VerificaBase(base1, base2) {
		if(base1 !== base2){ throw new Error("As Bases devem ser iquais!")}
	}

	multiplicar(potenciacao) {
		this.VerificaBase(this.base, potenciacao.base)
		return new Potenciacao(this.base, (this.expoente + potenciacao.expoente));
	}

	dividir(potenciacao) {
		this.VerificaBase(this.base, potenciacao.base)
		return new Potenciacao(this.base, (this.expoente - potenciacao.expoente));
    }
    
    potencia(potenciacao) {
		this.VerificaBase(this.base, potenciacao.base)
		return new Potenciacao(this.base, (this.expoente * potenciacao.expoente));
	}

	toString() {
		return `${this.base}, ${this.expoente}`;
	}
}

export default Potenciacao;