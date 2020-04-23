let pets = [{
    nome: "Jake",
    tipo: "Cão",
    raca: "Bulldog",
    idade: 1,
    genero: "M",
    servicos: ["banho", "tosa", "corte de unha"],
    vacinado: true
}, {
    nome: "Baby",
    tipo: "Cão",
    raca: "Dálmata",
    idade: 2,
    genero: "F",
    servicos: ["banho", "tosa"],
    vacinado: false
}, {
    nome: "Candy",
    tipo: "Cão",
    raca: "Labrador",
    idade: 0.6,
    genero: "F",
    servicos: ["banho", "tosa", "corte de unha"],
    vacinado: false
}, {
    nome: "Blake",
    tipo: "Cão",
    raca: "Pastor Alemão",
    idade: 3,
    genero: "M",
    servicos: ["banho", "tosa", "corte de unha"],
    vacinado: false
}];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo+= `
        -------------------
        Nome: ${pet.nome}
        Tipo: ${pet.tipo}
        Raça: ${pet.raca}
        Gênero: ${pet.genero == "F" ? "Fêmea" : "Macho"}
        Idade: ${pet.idade}
        Vacinado: ${pet.vacinado ? "Sim" : "Não"}
        Serviços: ${pet.servicos}`;
    };
    return conteudo;
};

const adicionarPet = novoPet => {
    return pets.push(novoPet);
};

const buscarPet = nome => {
    let encontrado = pets.filter(pet => pet.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())
    return encontrado
}
module.exports = {listarPets, adicionarPet, buscarPet}