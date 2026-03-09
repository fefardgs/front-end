async function explorar(){
    // 1 - buscar todas raças
    const racas = await fetch('https://dog.ceo/api/breeds/list/all')
    // quando a resposta chegar, convertemos para JSON
    .then(r => r.json ());
    // 2 - contar quantas raças existem 
    const total = Object.keys(racas.message).length;
    //mostrar o total das raças no controle
    console.log(`total de raças: ${total}`)
    // 3 - descobrir raças que tem sub-raças
    for (const raca in racas.message){ 
         if(racas.message[raca].length > 0){
            console .log(`${raca} tem sub-raças`, racas.message[raca]);
        
         }
    } 

}   
explorar();                
