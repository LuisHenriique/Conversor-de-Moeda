const form = document.querySelector('#form')
form.addEventListener('submit', function (e){
e.preventDefault()

const inputDolar = form.querySelector('#dolarValue');
const dolar = inputDolar.value;
if(!dolar){
    setResult('Valor inválido', false)
    return
}

const calculationDolar = conversionDolar(dolar)
const msg = calculationDolar
setResult(msg,true)
})

function conversionDolar (dolar){
    
    const calculationDolar = dolar * 5.08;
    return calculationDolar.toLocaleString('pt-BR')

}
function criaP (){
    const p = document.createElement('p');
    return p 
}
function setResult(msg,isValid){
const result = document.querySelector('#resultConversion');
result.innerHTML = '';
const p = criaP ();
p.innerHTML = msg;
if(isValid){p.classList.add('text')}
else{p.classList.add('bad')}
result.appendChild(p)
}
