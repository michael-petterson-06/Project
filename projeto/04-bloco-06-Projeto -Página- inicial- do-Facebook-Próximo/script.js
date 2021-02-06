window.onload = function() {
  const botao = document.getElementById('button-login');
  const emailTelefone = document.getElementById('user-email-phone');
  const nome = document.getElementsByClassName('nome')[0];
  const sobreNome = document.getElementsByClassName("sobreNome")[0];
  const email = document.getElementsByClassName("email")[0];
  const novaSenha = document.getElementsByClassName("novaSenha")[0];
  const data = document.getElementsByClassName("data")[0];
  const botaoCadastrar = document.getElementsByTagName('button')[1];
  const escolherGenero = document.getElementsByClassName("genero");
  let genero = " ";

  botao.addEventListener('click',function(){
    alert(emailTelefone.value);
  })

  botaoCadastrar.addEventListener('click', function(){
    for (let i = 0; i < escolherGenero.length; i++){
      if (escolherGenero[i].checked) {
        genero =  escolherGenero[i].value;
      }
    }
    alert(nome.value + " " + sobreNome.value + "\n" + email.value + "\n" + novaSenha.value + "\n" + data.value + "\n" + genero);
  });
}
