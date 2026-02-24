//   1- Crie uma função que receba um número e retorne o dobro.  
function dob (a, b){
    return a*b 
}
console.log(dob(8,2));
//   2- Crie uma função que receba um número e retorne o triplo.  
function tri (a,b){
    return a*b
}
console.log(tri(2,4))
//   3- Crie uma função que receba dois números e retorne a soma. 
function soma (a,b){
    return a + b
}
console.log(soma(3,4));

//   4- Crie uma função que receba dois números e retorne a multiplicação.  
function mult(a, b){
    return a *b 
}
console.log(mult(3,4))

//   5- Crie uma função que receba um valor em real e converta para dólar.
function realParaDolar(valorReal, cotacao){
    return valorReal/cotacao
}
console.log(realParaDolar(20,5.17).toFixed(2))

//   6- Crie uma função que receba um valor em dólar e converta para real.
function DolarparaReal(valorDolar, cotacao){
    return valorDolar/cotacao
}
console.log(DolarparaReal(20,0.19).toFixed(2))


//   7- Crie uma função que receba um salário e calcule aumento de 10%.  
function calcularAumento(salario){
    return salario + (salario * 0.10);
}
console.log(calcularAumento(10000));

//   8- Crie uma função que retorne se o número é par.  
function ehPar(numeros){
    return numeros %2 === 0
}
console.log(ehPar(4));
console.log(ehPar(7));


//   9- Crie uma função que imprima números de 1 até 10.
function contar(){
for (let i=1; i <=10; i++)
    console.log(i)
}  

//   10- Crie uma função que receba um limite e imprima até ele.  
function limite(numero){
for (let i=1; i <=5; i++)
    console.log(i)
}  
limite()

//   11- Crie uma função que some todos os números até 10. 
function somarAte10() {
    let somar = 0; 
    for (let i = 1; i <= 10; i++) {
        somar +=i; 
    }

    return somar;
}

console.log(somarAte10()); //55



//   12- Crie uma função que conte quantos pares existem até 10.  
function paresSoma (n){
    let acumula1 = 0;
    for (let i = 0; i <= n; i++){
        if ( i % 2 === 0){
            
            acumula1 ++;
        }
        
    }
   return (acumula1)
}
console.log(paresSoma(10));

//   13- Crie uma função que exiba a tabuada de um número. 
 function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}


exibirTabuada(7);

//   14- Crie uma função que faça contagem regressiva.  
function regressiva(){
     for (let con = 10; con >= 1; con--) {
    console.log(con)
  }
}

regressiva()



//   15- Crie uma função que encontre o número 27.  
function encontre(){
    for (let encontre = 1; encontre <=28; encontre++){
        if(encontre == 27)
        console.log(encontre)
    }
}
encontre()
//   16- Crie uma função que some números pares até um limite.
function conta(){
    let somarr = 0
    let par = 0
     for (let contar = 1; contar <= 20; contar++) {
        if (contar % 2 === 0) { // Verifica se é par
            somarr+= contar
            console.log(som)
            par++
        }
  }
}

conta()

console.log()

//   17- Crie uma função que conte números ímpares. 
function conta(){
    let impar = 0
     for (let contar = 1; contar <= 10; contar++) {
        if (contar % 2 === 1) { 
            console.log(contar)
            impar++
        }
  }
}


//   18- Crie uma função que retorne a média de dois números. 
function media(a, b){
    return (a + b) / 2
}

console.log(media(9,9))


//   19- Crie uma função que retorne o quadrado de um número.  
function calcularQuadrado(numero) {
    return numero * numero;
}

console.log(calcularQuadrado(5)); 