window.addEventListener("load", function() {
  const frase = document.querySelector(".frase");
  frase.classList.add("animar-direita-para-esquerda");
});



function validar() {
let nome = document.getElementByClassName("nome").value;

if(nome.length == 0){
 alert("Nome em branco"); 
}  
else{
 if(nome.indexOf(" ") < 0){
 alert("Digite 02 nomes");  
 } 
else {
alert("Validado com sucesso");  
}
}
}



function validar1() {
let nome = document.getElementById("email").value;

if(nome.length == 0){
 alert("Email em branco"); 
}  

else {
alert("Validado com sucesso");  
}
}



function validar2() {
let nome = document.getElementById("telefone").value;

if(nome.length == 0){
 alert("Número de telefone em branco"); 
}  

else {
alert("Validado com sucesso");  
}
}                            



var checks = document.getElementsByClassName("checkbox");

for (let i = 0 ; i < checks.length; i++) { 
checks[i].onclick = function() {
this.classList.toggle("marcado");
}
}

var checks = document.getElementsByClassName("checkbox1");

for (let i = 0 ; i < checks.length; i++) { 
checks[i].onclick = function() {
this.classList.toggle("marcado1");
}
}

var checks = document.getElementsByClassName("checkbox2");

for (let i = 0 ; i < checks.length; i++) { 
checks[i].onclick = function() {
this.classList.toggle("marcado2");
}
}