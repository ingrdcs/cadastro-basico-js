// cadastro básico js
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

alert('Usuário cadastrado com sucesso! Pressione OK');

alert('Obrigado! Agora pressione enter para conferir os dados');

alert(`Dados do paciente:\n Nome: ${nomeDousuário}\n Idade: ${idade}\n Sexo: ${sexo}\n Nome da rua: ${nomeDaRua}\n Número da rua: ${numRua}\n 
Nome do bairro: ${bairro}\n Cidade: ${cidade}\n Estado: ${estado}\n Comorbidades: ${comorbidades} \n\n Até mais!`);




