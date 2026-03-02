

//1

document.addEventListener("keydown", function (e){
    if(e.key=== "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key ==="g"){
        document.body.style.backgroundColor = "green"
    }else{
          document.body.style.backgroundColor = "blue"
    }
})

//2 - Mostre no console qual tecla foi pressionada e mude a cor se for r, g ou b.

document.addEventListener("keydown", function (e){
    if(e.key=== "r"){
         console.log(e.key)
        document.body.style.backgroundColor = "red"
    } else if (e.key ==="g"){
        document.body.style.backgroundColor = "green"
         console.log(e.key)
    }else {
        document.body.style.backgroundColor = "blue"
        console.log(e.key)
    }
})

//3 - Permita que o usuário pressione R, G, B maiúsculos também.



document.addEventListener("keydown", function (e){
    let tecla = e.key.toLowerCase()

    if(tecla ==="r"){
        document.body.style.backgroundColor = "red"
    } else if (tecla==="g"){
        document.body.style.backgroundColor = "green"
         }
        else {
          document.body.style.backgroundColor = "blue"
    }
})

// 4 - Além de mudar a cor, exiba o nome dela na página. (Dica: innerHTML)
document.addEventListener("keydown", function (e){
    let tecla = e.key.toLowerCase()
    let cor = this.getElementById("cor")
    if(tecla ==="r"){
        document.body.style.backgroundColor = "red"
        cor.innerHTML = "VERMELHO"
    } else if (tecla==="g"){
        document.body.style.backgroundColor = "green"
         cor.innerHTML = "VERDE"
         }
        else {
          document.body.style.backgroundColor = "blue"
           cor.innerHTML = "AZUL"
    }
})


// 5 - Adicione y - amarelo e p - roxo

document.addEventListener("keydown", function (e){
    if(e.key=== "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key ==="g"){
        document.body.style.backgroundColor = "green"
    }else{
          document.body.style.backgroundColor = "blue"
    }
      if(e.key=== "y"){
        document.body.style.backgroundColor = "yellow"
 } else if (e.key ==="p"){
        document.body.style.backgroundColor = "purple"
 }
        })  

// 6 - Pressione x para remover a cor aplicada
document.addEventListener("keydown", function (e){
    if(e.key=== "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key ==="g"){
        document.body.style.backgroundColor = "green"
    }else{
          document.body.style.backgroundColor = "blue"
    }
      if(e.key=== "y"){
        document.body.style.backgroundColor = "yellow"
 } else if (e.key ==="p"){
        document.body.style.backgroundColor = "purple"
 } if(e.key=== "x"){
        document.body.style.backgroundColor = "white"
 }
})
        
// 7 - Refatore o código usando um objeto que guarda teclas e cores
let cores = {
    r: "red",
    g: "green",
    y: "yellow",
    p: "purple"
};

document.addEventListener("keydown", function(e) {

    let tecla = e.key.toLowerCase();

    if (tecla === "x") {
        document.body.style.backgroundColor = "";
        console.log("Cor removida");
        return;
    }

    // Verifica se a tecla existe dentro do objeto
    if (cores[tecla]) {
        document.body.style.backgroundColor = cores[tecla];
        console.log("Tecla pressionada:", e.key);
    } else {
        document.body.style.backgroundColor = "blue";
        console.log("Tecla pressionada:", e.key);
    }

});


// 8 - Mostre no console o valor RGB da cor aplicada.

let cores1 = {
    blue: "#0000FF",
    red: "#FF0000",
    green: "#00FF00",
    purple: "#9D00FF",
    yellow: "#FFFF00"
}

let teclas = {

}


document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log(cores.yellow)
   
    }
    else if(e.key.toLowerCase() === "p"){
        document.body.style.backgroundColor = "purple"
        console.log(cores.roxo)
    }

    else if(e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
        console.log(cores.blue)
    }

    else if(e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        console.log(cores.red)
    }

    else if(e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
        console.log(cores.green)
    }

})
// 9 - Cada tecla pressionada muda para a próxima cor da lista.

let cores3 = ["red", "green", "blue", "purple", "yellow"]
let contador = 0

document.addEventListener("keydown", function(){

    document.body.style.backgroundColor = cores[contador]
    contador++
    if (contador>=console.log){
        contador=0
    }
})

//// 10 - Pressione n para modo escuro e d para modo claro



document.addEventListener("keydown", function(e){
    if (e.key === "n"){
        document.body.style.backgroundColor = "black"
        document.body.style.color="white"
   
    }
    else if(e.key === "d"){
        document.body.style.backgroundColor = "white"
        document.body.style.color="black"

    }

    
})














