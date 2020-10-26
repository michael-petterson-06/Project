window.onload = function(){
  const botaoAdicionar = document.getElementById('criar-tarefa');
  const botaoLimpar = document.getElementById('apaga-tudo');
  const botaoLimpaCompletadas = document.getElementById('remover-finalizados');
  const botaoSalvarTarefa = document.getElementById('salvar-tarefas')
  const botaoCima = document.getElementById('mover-cima');
  const botaoBaixo = document.getElementById('mover-baixo');
  let tarefa = document.getElementById('texto-tarefa');
  let ol = document.getElementById('lista-tarefas');
  let todasLis = document.getElementsByTagName('li');
  let todasClassCompletadas = document.getElementsByClassName('completed');
  let todasClassSelecionadas = document.getElementsByClassName('selected');
  let li = '';
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem("chave");

  tarefa.focus();
 
  // Adicionar tarefa
  function adicionar(){
    li = document.createElement('li');
    li.innerText = tarefa.value
    ol.appendChild(li);
    tarefa.value = '';
    tarefa.focus();
   }
  // Selecionar tarefa
  ol.addEventListener('click',function(event){
     let todasClass = event.target.className.split(' ');
     for (let i = 0; i < todasClass.length; i+=1 ){
      if ("selected" == todasClass[i]){
        event.target.classList.remove('selected');
      }
      else {
        event.target.classList.add('selected');
      }
     }
   })
  //finalizar tarefa
  ol.addEventListener('dblclick',function(event){
    let todasClass = event.target.className.split(' ');
     for (let i = 0; i < todasClass.length; i+=1 ){
      if ("completed" == todasClass[i]){
        event.target.classList.remove('completed');
      }
      else {
        event.target.classList.add('completed');
      }
     }
  })
  
 // Limpar toda tarefas
  function limpar(){
     for (let i = (todasLis.length-1); i >= 0;  i-=1){
      todasLis[i].remove();
    }
    localStorage.clear();
  }
 // Limpar tarefas completas
 
 function limparCompletadas(){
    for (let i = (todasClassCompletadas.length-1); i >= 0 ; i-=1){
      todasClassCompletadas[i].remove();
    }        
 }
// salvar tarefas
 function salvarTarefas(){
  localStorage.clear();
  localStorage.setItem('chave',ol.innerHTML);
}

//mover para cima
   function moverCima(){
    let selecionado = document.getElementsByClassName('selected')[0];  
    if (selecionado){
      if (selecionado.previousElementSibling) {
        selecionado.parentNode.insertBefore(selecionado,selecionado.previousElementSibling);
        }
      else {
        alert('Não é possível mover esta tarefa para cima');
        }
    }
  }
  
  //mover para baixo
  function moverBaixo(){
    let selecionado = document.querySelectorAll('.selected')[0];
    if (selecionado){
      if(selecionado.nextElementSibling){
        selecionado.parentNode.insertBefore(selecionado.nextElementSibling,selecionado);
      }
      else {
        alert('Não é possível mover esta tarefa para baixo');
      }
    }
  }

  //limpar selecionadas

  const botaoLimparSelecionadas = document.querySelector('#remover-selecionado');
  
  botaoLimparSelecionadas.addEventListener('click', moverSelecionadas)

  function moverSelecionadas(){
    for (let i = (todasClassSelecionadas.length - 1); i >= 0; i-=1){
      todasClassSelecionadas[i].remove();
    }
  }

  botaoAdicionar.addEventListener('click',adicionar)
  botaoLimpar.addEventListener('click',limpar);
  botaoLimpaCompletadas.addEventListener('click', limparCompletadas)
  botaoSalvarTarefa.addEventListener('click',salvarTarefas)
  botaoCima.addEventListener('click', moverCima);
  botaoBaixo.addEventListener('click',moverBaixo)
}