window.onload = function(){
  const botaoReiniciar = document.getElementById('reiniciar');
  const botaoIniciar = document.getElementById('iniciar');
  let textoCodCores = document.querySelector('#rgb-color');
  let paiBalls = document.getElementById('paiBalls');
  let resposta = document.getElementById('answer');
  let contadorAtual = document.getElementById('score').innerHTML =  localStorage.getItem('painel');
  let painel = document.getElementById('score');
  let contador =  parseInt(contadorAtual);
  let todasCLassBalls = document.getElementsByClassName('ball');
  let todasCores = [];
    //pegar cor aleatória
  function pegaCor(){
    const hexadecimal = '0123456789ABCDEF';
    let cor='#';
    for (let i = 0; i < 6; i+=1){
      cor+= hexadecimal[Math.floor(Math.random()*16)];
    }
    return cor
  }

  // colocar cores nas balls, escolher uma das cores e colocar cor escolhida no label.
    
  for (let i = 0; i < todasCLassBalls.length; i+=1){
      todasCLassBalls[i].style.backgroundColor = pegaCor();
      todasCores.push(todasCLassBalls[i].style.backgroundColor);
  }
  let corSorteada = todasCores[Math.floor(Math.random()*6)];
  textoCodCores.innerText = corSorteada;
  
  //vericar se acertou ou errou
  paiBalls.addEventListener('click',function(event){
    if (corSorteada == event.target.style.backgroundColor){
      resposta.innerText = "Acertou!!! Parabéns";
      contador +=3;
      painel.innerHTML = contador;
    }
    else {
      resposta.innerText = "Errou! Tente novamente!"
    }
  });

  //reiniciar o jogo
  
  function reiniciar(){
    window.location.reload();
    localStorage.setItem('painel',painel.innerHTML);
  }

  //Inicial o jogo
  function iniciarJogo(){
    localStorage.clear();
    window.location.reload();
    painel.innerHTML = 0;
    localStorage.setItem('painel', painel.innerHTML)
  }

  botaoReiniciar.addEventListener('click',reiniciar);
  botaoIniciar.addEventListener('click',iniciarJogo);
  
}