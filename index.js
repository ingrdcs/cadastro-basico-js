/*alert('Apenas perguntas para testar meus conhecimentos com JS até o momento');

let nome = prompt('Digite seu nome');
let idade = parseInt(prompt('Digite sua idade'));

alert(`Olá ${nome}, você tem ${idade} anos`);

alert('Perguntas mais avançadas de JS!');

let idadeSua = parseInt(prompt('Digite sua idade'));
let idadeSuaMae = parseInt(prompt('Digite a idade da sua mae ou pai'));

let diferenca = idadeSuaMae - idadeSua;

alert(`A diferença entre a idade da sua mãe ou pai e a sua é de: ${diferenca} anos!`);
*/









alert('Sistema de cadastro de Usuário!');

let nomeDousuário = prompt('Digite o nome completo do usuário:');
let idade = parseInt(prompt('Digite a idade do usuário:'));
let CPF = parseInt(prompt('Digite o CPF do usuário:'));
let sexo = prompt('O usuário é homem ou mulher?');

alert('Pronto, Agora digite o endereço do usuário!');

let nomeDaRua = prompt('Nome da rua:');
let numRua = parseInt(prompt('Número da rua:'));
let bairro = prompt('Nome do bairro:');
let cidade = prompt('Nome da cidade:');
let estado = prompt('Nome do estado onde mora:');

alert('Agora, já temos o endereço. Pressione OK');

alert('Obrigado! Agora pressione enter para conferir os dados')

alert(`Dados do paciente:\n Nome: ${nomeDousuário}\n Idade: ${idade}\n Sexo: ${sexo}\n Nome da rua: ${nomeDaRua}\n Número da rua: ${numRua}\n 
Nome do bairro: ${bairro}\n Cidade: ${cidade}\n Estado: ${estado}\n Comorbidades: ${comorbidades} \n\n Usuário cadastrado com sucesso!`);





/*
let opcao = prompt('Oque deseja fazer: 1- Cadastrar Paciente    2- Consultar dados do paciente');



switch (opcao = 1) {

    case 1:

        alert('Sistema de cadastro hospitalar!');

        let quantidadeDeCadastros = prompt('Quantos cadastros você quer efeituar?');
        let i = '';

        for (i = 1; i <= quantidadeDeCadastros; i++) {


            let nomeDoPaciente = prompt('Digite o nome completo do paciente:');
            let idade = parseInt(prompt('Digite a idade do paciente:'));
            let CPF = parseInt(prompt('Digite o CPF do paciente:'));
            let sexo = prompt('O paciente é homem ou mulher?');

            alert('Pronto, Agora digite o endereço do paciente!');

            let nomeDaRua = prompt('Nome da rua:');
            let numRua = parseInt(prompt('Número da rua:'));
            let bairro = prompt('Nome do bairro:');
            let cidade = prompt('Nome da cidade:');
            let estado = prompt('Nome do estado onde mora:');

            alert('Agora, já temos o endereço. Temos mais uma pergunta:');

            let comorbidades = prompt('O paciente possui comorbidades?');
            alert('Usuario cadastrado');

        }
        break;

}

*/