window.onload = function(){
  let imagem = document.getElementById('meme-image');
  let resposta = document.getElementById('resposta');
  let digitaTexto = document.getElementById('text-input');
  let container = document.getElementById('meme-image-container');
  digitaTexto.addEventListener('input',escrita)
  function escrita(){
    resposta.innerText = digitaTexto.value;
  }
 
  let chamarImage = document.getElementById('meme-insert');
  mostraFoto = function(event) {
   
    imagem.src = URL.createObjectURL(event.target.files[0]);
  }  
  chamarImage.addEventListener("change",mostraFoto)

  let botoes = document.getElementsByTagName('button')
  botoes[0].addEventListener('click',bordaDashed);
  function bordaDashed(){
    container.style.border = "dashed 3px red";
  }
  botoes[1].addEventListener('click',bordaDouble);
  function bordaDouble(){
    container.style.border = "double 5px blue";
  }
  botoes[2].addEventListener('click',bordaGroove);
  function bordaGroove(){
    container.style.border = "groove 6px green";
  }

  let imagens = document.getElementsByTagName("img");
  imagens[1].addEventListener('click',trocarImagem1);
  imagens[2].addEventListener('click',trocarImagem2);
  imagens[3].addEventListener('click',trocarImagem3);
  imagens[4].addEventListener('click',trocarImagem4);
  
  function trocarImagem1(){
    imagem.src="imgs/'meme1.jpg";
  }
  function trocarImagem2(){
    imagem.src="imgs/'meme2.jpeg";
  }
  function trocarImagem3(){
    imagem.src="imgs/'meme3.jpg";
  }
  function trocarImagem4(){
    imagem.src="imgs/'meme4.jpg";
  }



}