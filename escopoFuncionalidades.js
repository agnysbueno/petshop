const PETSHOP = "Pet Shop DH";

let bancoDeDados = [{
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

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} vacinado com sucesso!`);
    } else {
        console.log(`${pet.nome} já está vacinado!`);
    }
};

const listarPets = () => {
    console.log("Projeto Petshop");
    for (pet of bancoDeDados){
        console.log("-------------------------")
        for (carac in pet){
            if (carac == "genero"){
                console.log(`${carac}: ${pet[carac] == "F" ? "Fêmea" : "Macho"}`);
            } else if (carac == "vacinado"){
                console.log(`${carac}: ${pet[carac] ? "Sim" : "Não"}`);
            } else {
                console.log(`${carac}: ${pet[carac]}`);
            }
        }
    }
};

const validarDados = dadosPet => dadosPet.nome && dadosPet.tipo && dadosPet.raca && dadosPet.idade && dadosPet.genero

const adicionarPet = novoPet => {
    if(typeof novoPet == "object" && validarDados(novoPet)){
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);
        if(!novoPet.servicos){
            novoPet.servicos = [];
        } else if (typeof novoPet.servicos == "string"){ 
            novoPet.servicos.split(",")
        } else {

        }
        bancoDeDados.push(novoPet);
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
    } else {
        console.log("Opa, informações inválidas! :c");
    }
};

const tosarPet = pet => {
    pet.servicos.push("tosa");
    console.log(`${pet.nome} foi tosado!`);
};
const banharPet = pet => {
    pet.servicos.push("banho");
    console.log(`${pet.nome} tomou banho!`);
};
const cortarUnhaPet = pet => {
    pet.servicos.push("corte de unha");
    console.log(`${pet.nome} cortou as unhas!`);
};
const atenderPet = (pet, ...servicos) => {
    console.log(`Bem-vindo, ${pet.nome}`);
    for (let servico of servicos){
        servico(pet);
    };
    const pagar = () => console.log("Pagamento efetuado!");
    pagar();
    console.log("Foi um prazer, volte sempre!");
};

const quantidadeVacina = () => {
    let vacinados = bancoDeDados.filter(pet => pet.vacinado).length;
    let naoVacinados = bancoDeDados.filter(pet => !pet.vacinado).length;
    console.log(`-------------------------
Temos ${vacinados} pets vacinados.
Temos ${naoVacinados} pets não vacinados.
-------------------------`);
};

const campanhaVacina = () => {
    let vacinadosNaCampanha = 0;
    for (let pet of bancoDeDados){
        if (!pet.vacinado) {
            vacinarPet(pet);
            vacinadosNaCampanha++
        };
    };
    console.log(`${vacinadosNaCampanha} pets foram vacinados nessa campanha!`);
};

const buscarPet = nome => {
    let encontrado = bancoDeDados.filter(pet => pet.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())
    if (encontrado.indexOf(nome) == -1){
        console.log(`${nome} não foi encontrado. Cadastre seu pet!`)
    } else {
        console.log(encontrado[0])
    }
};