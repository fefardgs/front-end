//TIPOS DE DADOS

// No JS, tudo oque armazenamos em variaveis tem um tipo. esses tipos definem o que podemos fazer com os valores.

//#Principais tipos de dados

// - **Strings** (textos)
// - **Number**(numeros)
// - **boolean** (verdadeiro ou falso)
// - **Object** (objetos, que agrupam  informações )
 // - ** Array** ( Listas de valores )
 // - **null** (valor vazio )
 // - **Undefined** (quando algo ainda nao foi definido)


 // Sring 
 //Sempre é escrita entre aspas ("" ou '')
 let nome = "fefa"
 let mensagem =' Ola Mundo'
 console.log(nome);
 console.log(mensagem);

 // O ' typeof ' serve para 88descobrir o tipos de um valor ou variavel**
 console.log(typeof nome);

 //podemos usar + para juntar Strings!
 let saudacao =`Ola, `+ nome + "!";
 console.log(saudacao);

 //crie uma variavel chamada cidade e armazena o nome de uma cidade.
 //depois, eexiba no console: "eu ro em [cidade]"
 let cidade = 'Florença'
 
 console.log("Eu moro em " + cidade + ".")

 //template strings
 //console.log(`Moro em ${cidade}.`)

 //Number 
 //Pode ser inteiro ou decimal

 let idadee = 16
 let altura = 1.68
 console.log(idade)
 console.log (altura )
 console.log (typeof altura)

 let soma =10 + 5
 console.log(soma)

 //crie uma variavel  chamada ano Atual e outra chamada anoNascimento. calcule e exiba a idade no console
 let anoAtual = 2026
 let anoNascimento = 2009 
 let idade = anoAtual - anoNascimento
 console.log ("Sua idade é" + idade  +"anos." )
 console.log(`sua idade é : ${idade} anos.` )

 //#####################################################################
 // Camel Case ---Mais famosa
 // Primeira palavra  Minuscula
 // Palavras seguinte começam com a letra maiuscula 
 //usada para classes, construtores e componentes
 //class usuarioSistema{
   // constructor(nome, idade){
       // this.nome = nome;
       // this.idades = idade;
    //}
 //}
 let idadeUsuario= 0

  let maiorDeidade
 
 // Snake Case 
 //Palvrs separadas por underscore
 //tudo minusculo 
 // Muito comum no PYTHON BANCOS DE DADOS E APIs 
 let nome_completo_casado

//Kebab case 
//Palavras seoardas por hífen -
// NÃO FUNCiONA COMO NOME DE VARIÁVEL EMJ S
//<div class ="Menu-Principal"></div>

 //#####################################################################

// Boolean (Verdadeiro ou Falso)

// 1
const ativo = true;
console.log(ativo);

// 2
const numero = 15;
console.log(numero > 10);

// 3
const idade2 = 11;
console.log(idade >= 18);

// Objeto
// Um objeto agrupa várias informações 
let pessoa = {
    nome:"Jessica",
    idade: 17,
    cidade:"Mogi das Cruzes"
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

let carro = {
    marca:"Fiat",
    modelo: "Fiat Cronos",
    ano: 2018
};
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ; 