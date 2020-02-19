let pets = [{nome: "doug"}, {nome: "costelinha"}];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo+= `
        -------------------<br>
        Nome: ${pet.nome}<br>
        -------------------<br>`;
    };
};

const adicionarPet = novoPet => {
    return pets.push(novoPet);
};

const buscarPet = nome => {
    let encontrado = pets.filter(pet => pet.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())
    return encontrado
}
module.exports = {listarPets, adicionarPet, buscarPet}