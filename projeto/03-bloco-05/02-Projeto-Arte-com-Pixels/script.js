window.onload = function(){
  let tbody = document.getElementById('pixel-board');
  let pegarCor = document.getElementById('color-palette');
  let classeSelecao = document.getElementsByClassName('selected')[0];
  let botaoLimpar = document.getElementById('clear-board');
  let usuario = document.getElementById('board-size');
  let todasTrs = document.getElementsByTagName('tr');
  let botaoDefinirQuadro = document.getElementById('generate-board');
  let red = document.getElementsByClassName('red')[0];
  let blue = document.getElementsByClassName('blue')[0];
  let green = document.getElementsByClassName('green')[0];
  let corAtual = '';
  let numero = 5;
  
  //cor Aleatória
  function corAleatoria(){
    const hexadecimal = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i+=1){
      cor+= hexadecimal[Math.floor(Math.random()*16)];
    }
    return cor;
  }  

 //Começando com cores Aleatórias
 red.style.backgroundColor = corAleatoria();
 blue.style.backgroundColor = corAleatoria();
 green.style.backgroundColor = corAleatoria();

  //cor preta começa selecionada
  tbody.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'black';
    classeSelecao.classList.remove('selected');
    event.target.classList.add('selected')
  })

  //pegando e colocando cores
  pegarCor.addEventListener('click',function (event){
    corAtual = event.target.style.backgroundColor;
    classeSelecao.classList.remove('selected');
    event.target.classList.add('selected')
    
    tbody.addEventListener('click', function(event){
      event.target.style.backgroundColor = corAtual;
      classeSelecao.classList.remove('selected');
      event.target.classList.add('selected')
    
    })
  });

  preencherQuadro(numero);
  function preencherQuadro(valor){
    for (let indexLinha = 0; indexLinha < valor; indexLinha+=1){
      let linha = document.createElement('tr');
      for ( indexColuna = 0; indexColuna < valor; indexColuna+=1){
        let paleta = document.createElement('td');
        paleta.classList.add('pixel');
        linha.appendChild(paleta);
      }
      tbody.appendChild(linha);
    }
  }
  
  //Limpar Quadro
  function limparQuadro(){
    let todosPixes = document.getElementsByClassName('pixel');
    for (let i = 0; i < todosPixes.length; i+=1){
    todosPixes[i].style.backgroundColor = 'white';
    }
  }

  //Define Tamanho do Quadro
  function definirQuadro(){
    for (let indexLinha = (todasTrs.length - 1); indexLinha >=0 ; indexLinha-=1){
      todasTrs[indexLinha].remove();
    }
    let valorUsuario = usuario.value;
    if (valorUsuario < 5){
      preencherQuadro(5);
    }
    else if (valorUsuario > 50){
      preencherQuadro(50);
    }
    else {
      preencherQuadro(valorUsuario);
    }
  }

  botaoLimpar.addEventListener('click',limparQuadro)
  botaoDefinirQuadro.addEventListener('click',definirQuadro);
}