//=======================
//1- API DE CACHORRO
//com node.js + express
//=======================
 //agora as fotos nao sao mais bixadas automaticamente
 //eles devem existir manualmente
 //data/fotos


 //importar framework express  para criar  servidor
 const  express = require ("express");
 //importar o CORS para permitir  requisições de outros dominios
 const cors = require ("cors")
 //importar o modulo de arquivo do node
 const fs = require ("fs")
 //importar para trabalhar em caminhos de arquivo
 const path = require ("path")
 //importar o arquivo JS  que contem as raças e fotos
 const cachorros = require("./data/dogs.json"  )
 //cria aplicação express
 const app = express()
 //definir a porta onde o servidor ira roda
 const PORT = 3000;
 //habilitar o  uso de CORS  na aplicação
app.use(cors());


app.use(
    "/fotos", //rota publica
express.static(
    path.join(__dirname, "data/fotos")
)
);


 //======================================
 // SERVIR ARQUIVOS ESTASTICOS
 //======================================


 //Aqui estamos dizendo para o Express:
 //"TUDOOO ue estiver na pasta data/fotos pode serr acessada pela URL /FOTOS"
 //=============================
 //FUNÇÃO AUXILIAR
 //=============================
 //função  que recebe um array e retorna um item aleatorio dele
 function sortear (array){
    //gerar um numero aleatorio
    const  i = Math.floor (Math.random()* array.length)
    //Math.random() gerar um número aleatório entre 0 e 1
    //array.length pega o tamanho do array (5 itens)
    //Math.floor arredondar o número para baixo
    //  //retorna o item sorteado
    return array[i]


 }


 //=================================
 //ROTAS API
 //=================================


 //=================================
  // ROTA 1- Cachorro Aleatorio
 //=================================


 //http://localhost:3000/api/cachorros/aleatorio


 app.get("/api/cachorros/aleatorio", (req, res)=>{
    //pegar todas as fotos de todas as raças
    //Obejcts.values pega os vaores do obejeto
    //flat transforma tudo me um unico array
    const todasAsFotos = Object.values(cachorros).flat()


    //sortear uma foto aleatorio
    const item = sortear(todasAsFotos)
    //Respoder o cliente em formato JSON
    res.json({
        //status da resposta
        status:"sucess",
        //URL da imagem que vai ser sorteada
        message:`http://localhost:${PORT}/fotos/${item}`
    });
 });


 //http://localhost:3000/api/cachorros/husky


 app.get("/api/cachorros/:raca", (req, res)=>{
   
    //pega o parametro da URL (ex. husky)
    const raca = req.params.raca.toLocaleLowerCase()


    //verifca se  essa exixste na json
    if (!cachorros[raca]){
        res.status(404).json({
            //status do erro
            status: "error",
            //mensagem explicando o problema
            message: `Raça "${raca}" não encontrada`
        })
        //encerra a execução da rota
        return;
    }
    //sortear uma foto da raça solicitada
    const item = sortear (cachorros[raca]);
    //retorna a resposta em JSON
    res.json({
        //status de sucesso
        status: "sucess",
        //URl da imagem sorteada
        message:`http://localhost:${PORT}/fotos/${item}`
    })
 })




 //=======================
 // INICIAR O SERVIDOR
 //=========================
 
 //iniciar o servidor express
 app.listen (PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT} `);
    console.log(`Coloque as fotos manualmente em: data/fotos/`);
   
   
 })


