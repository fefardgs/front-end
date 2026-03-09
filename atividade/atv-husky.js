fetch('https://dog.ceo/api/breed/husky/images/random')
  .then(resposta => resposta.json())

  .then(dados => {
    console.log('dados completo da API:', dados);
    console.log('URL da imagem:', dados.message);
  })
  .catch(erro => {
    console.error('Erro na requisição:', erro);
  });