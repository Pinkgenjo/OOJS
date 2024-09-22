class CorpoCeleste {
    constructor(nome, massa, diametro) {
        this.nome = nome;
        this.massa = massa;
        this.diametro = diametro;
    }

    informacoes() {
        return `${this.nome}: Massa = ${this.massa} kg, Diâmetro = ${this.diametro} km.`;
    }
}

class Planeta extends CorpoCeleste {
    constructor(nome, massa, diametro, temAnel) {
        super(nome, massa, diametro);
        this.temAnel = temAnel;
    }

    informacoes() {
        const anel = this.temAnel ? 'Sim' : 'Não';
        return `${super.informacoes()} Possui anéis: ${anel}.`;
    }
}

class Lua extends CorpoCeleste {
    constructor(nome, massa, diametro, planetaPai) {
        super(nome, massa, diametro);
        this.planetaPai = planetaPai;
    }

    informacoes() {
        return `${super.informacoes()} Orbitando o planeta: ${this.planetaPai}.`;
    }
}

const terra = new Planeta("Terra", 5.972e24, 12742, false);
const saturno = new Planeta("Saturno", 5.683e26, 116460, true);
const luaDaTerra = new Lua("Lua", 7.35e22, 3474, "Terra");

console.log(terra.informacoes());
console.log(saturno.informacoes());
console.log(luaDaTerra.informacoes());
