const form = document.querySelector('#forms'); // pegou os dados do formulario
form.addEventListener('submit', function (e){
 // pega os dados do submit e adiciona ao "e"
e.preventDefault();
 const inputPeso = e.target.querySelector('#peso'); // Pega os dados do html peso e coloca na funcao "e"
 const inputAltura= e.target.querySelector('#altura');

 const peso = Number (inputPeso.value) // vai pegar os dados da constante para do tipo numero
 const altura = Number (inputAltura.value)
 if (!peso){

setResultado('Peso inválido', false) // caso nao seja numero vai retornar falso
 return;
 }
 if (!altura)
{ setResultado ('Altura inválida', false)
return;}
const imc = getImc(peso, altura) // para pode mexer com as variaveis
const calculoImc = getCalculoImc(imc);
const msg = `Seu IMC é ${imc} (${ calculoImc}).`;

setResultado(msg, true) // retorna o resultado
})
 function getCalculoImc(imc){

    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];
    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
 }


function getImc(peso, altura){

    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaP(){
const p = document.createElement('p');
return p;}


function setResultado(msg, isValid)
{

    const resultado = document.querySelector('#resultado')
resultado.innerHTML = '';
 const p = criaP();

 if (isValid){

p.classList.add('paragrafo-resultado');

 }
 else { p.classList.add('bad');}

 p.innerHTML = msg
 resultado.appendChild(p);
}