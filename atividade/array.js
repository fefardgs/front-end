
1//Crie um array cores com três cores e mostre a segunda cor.

let cores =['Roxo', 'Rosa', 'Lilas'];
//console.log(cores[0]);
console.table(cores);


2//Crie um array numeros com cinco números e mostre o primeiro e o último.

let numeros =[1, 2, 3, 4,5];
console.log(numeros[0]);
console.log(numeros[4]);

3//Crie um array frutas com duas frutas e adicione uma terceira.
let fruits = ['Ameixa', 'Morango'];
fruits.push('Manga');
console.log(fruits);


4//Crie um array nomes com quatro nomes e remova o último.
let nomes = ['Cadu', 'Roberto', 'Marina', 'Murilo'];
nomes.pop();
console.log(nomes);

5//Crie um array times e mostre quantos itens ele possui.
let times = ['Paysandu', 'Capivariano', 'Portuguesa'];
console.log(3)
//console.table(times);


6//Crie um array animais e percorra mostrando todos no console.

let animais =['Lontra', 'Tartaruga', 'Arraia'];

console.log(animais[0]);
console.log(animais[1]);
console.log(animais[2]);

7//Crie um array carros e altere o segundo item.
let carros = ["impala 67 ", "Audi 911", "Palio"];
console.log(carros[1] ="Ferrari"); 

console.log(carros)


8//Crie um array linguagens e verifique se contém "JavaScript".
let linguagens = ["HTML", "CSS", "JavaScript"];

console.log(linguagens[2] == "JavaScript"); 


9//Crie um array valores e mostre a soma de todos os números.
let valores = [10, 20, 30];
let soma = valores[0] + valores[1] + valores[2];

console.log(soma);

10//Crie um array vazio tarefas, adicione três tarefas e exiba numeradas.
let tarefas = [];

tarefas.push("Estudar");
tarefas.push("Lavar louça");
tarefas.push("Dormir");

console.log("1. " + tarefas[0]);
console.log("2. " + tarefas[1]);
console.log("3. " + tarefas[2]);