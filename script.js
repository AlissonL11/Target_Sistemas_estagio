/* questao 1 */
function calcularSoma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  /*console.log(SOMA);*/

  let resposta = document.getElementById('respostaQ1');
  resposta.textContent = "Resposta: " + SOMA;
  resposta.style.color = 'red';
};

/* questao 2 */

function q2() {
  const numero = parseInt(document.getElementById('numeroQ2').value);
  let a = 0;
  let b = 1;
  let temp;

  if (numero == 0){
    document.getElementById('respostaQ2').innerText = numero + " pertence à sequência de Fibonacci.";
  } else{
  while (b <= numero) {
    if (numero === b) {
      document.getElementById('respostaQ2').innerText = numero + " pertence à sequência de Fibonacci.";
      return;
    }
    temp = a + b; /* calculando a sequencia*/
    a = b;
    b = temp;
  }

  document.getElementById('respostaQ2').innerText = numero + " não pertence à sequência de Fibonacci.";
}
}
/* questão 3 */

function q3() {
  document.getElementById('3a').innerText = "9";
  document.getElementById('3a').style.color = 'red';

  document.getElementById('3b').innerText = "128";
  document.getElementById('3b').style.color = 'red';

  document.getElementById('3c').innerText = "49";
  document.getElementById('3c').style.color = 'red';

  document.getElementById('3d').innerText = "100";
  document.getElementById('3d').style.color = 'red';

  document.getElementById('3e').innerText = "12";
  document.getElementById('3e').style.color = 'red';

  document.getElementById('3f').innerText = "20";
  document.getElementById('3f').style.color = 'red';
}

/* questão 4 */

function q4() {
  document.getElementById('respostaQ4').style.visibility = 'visible';
};

/* questão 5 */

function q5(){
  let input = document.getElementById('textoQ5').value;

  let invertido = "";
  
  for (let i = input.length - 1; i>= 0; i--){
    invertido+=input[i];
  }

  document.getElementById('respostaQ5').textContent = "Resultado: " + invertido;
}