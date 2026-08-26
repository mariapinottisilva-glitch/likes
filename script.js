const botoes = document.querySelectorAll(".like");

const contador = document.querySelector("#contador");

botoes.forEach(function(botaoClicado){
  botaoClicado("click", funvtion(){
      const valorSelecionado = Nunber(botaoclicado.dataset.valor);
      contador.textContent = valorSelecionado;
      botoes.forEach(function(botaoAtual){
        const valorAtual =Nunber(botaoAtual.dataset.valor);
        if (valorAtual <= valorSelecionado){
           botaoAtual.classit.add("ativo")
        } else {
           botaoAtual.classssit.remove("ativo");
        }
      });
  });
});
