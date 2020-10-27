window.onload = function(){
  const botaoGerador = document.getElementById('criar-carta');
  const botaoLimpar = document.getElementById('reiniciar');
 
  let input = document.getElementById('carta-texto');
  let paragrafo = document.getElementById('carta-gerada');
  let todosSpans = document.getElementsByTagName('span');
  let contador = document.getElementById('carta-contador');
  
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoTamanho = ['medium', 'big', 'reallybig']; 
  const grupoRotacao =['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];
   
   // gerar a classe aleatórias
  function gerarClass(){
    let estilo = grupoEstilo[Math.floor(Math.random()*3)];
    let tamanho= grupoTamanho[Math.floor(Math.random()*3)];
    let rotacao = grupoRotacao[Math.floor(Math.random()*2)];
    let inclinacao = grupoInclinacao[Math.floor(Math.random()*2)];
    let classe = estilo+" "+tamanho+" "+rotacao+" "+ inclinacao;
    return classe;
  }  
    //botão gerar carta

  function gerarCarta(){
    paragrafo.innerText = " ";
    let frase = input.value;
    let palavras = frase.split(' ');
    for (let i = 0; i < palavras.length; i+=1){
      let span = document.createElement('span');
      span.className = gerarClass();
      span.innerHTML = palavras[i]+" ";
      paragrafo.appendChild(span);
      classUnitaria(span);
    }
    contarPalavras();
  }

  
  //contador de palavras
  function contarPalavras(){
    let quantidadeSpans = todosSpans.length
    contador.innerHTML = quantidadeSpans + " palavras";
  }

  //colocar classes na span que quiser.
  function classUnitaria(spanAtual){
    spanAtual.addEventListener('click',function(){
        spanAtual.className = gerarClass();
    })
  }
  
  // limpar carta

  function limparCarta(){
    window.location.reload();
  }

  botaoGerador.addEventListener('click',gerarCarta);
  botaoLimpar.addEventListener('click', limparCarta)
}