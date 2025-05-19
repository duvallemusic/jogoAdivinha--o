let numeroSecreto;
let tentativas;
let jogoAtivo;
let contadorTentativas;

function defineTentativas() {
  
   contadorTentativas = parseInt(seleTentativas.value);


}
function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  
  jogoAtivo = true;
  tentativas = 0;
  document.getElementById("mensagem").textContent = "";
  document.getElementById("tentativas").textContent = "";
  document.getElementById("entrada").value = "";
  document.getElementById("seleTentativas").value = "";
  
}

function verificarPalpite() {
  if (!jogoAtivo) return;

  const entrada = document.getElementById("entrada");
  const palpite = parseInt(entrada.value);
  

  

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    document.getElementById("mensagem").textContent = "Digite um número válido entre 1 e 100.";
    return;
  }
  tentativas++ ;
  contadorTentativas-- ;
  

  if (palpite === numeroSecreto) {
    document.getElementById("mensagem").textContent = `Parabéns! Você acertou o número ; ${ numeroSecreto } em ; ${ tentativas } tentativa(s)!`;
    jogoAtivo = false;
  } else if (palpite < numeroSecreto) {
    document.getElementById("mensagem").textContent = "O número secreto é MAIOR.";
    
  } else {
    document.getElementById("mensagem").textContent = "O número secreto é MENOR.";
    
  }
  if(contadorTentativas > 0 ) {
    document.getElementById("tentativas").textContent =  `Você tem ${contadorTentativas} restantes!`;

    
  } else {
    document.getElementById("tentativas").textContent = `você têm perdeu! o número secreto era ${ numeroSecreto } .` ;
    jogoAtivo = false
  }
  
}


function reiniciarJogo() {
  iniciarJogo();
  defineTentativas();
}

iniciarJogo(); 