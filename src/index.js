 
import cipher from './cipher.js';

// primera pantalla
let homeBoxOne = document.getElementById("homeBoxOne");  
// segunda pantalla
let homeBoxTwo = document.getElementById("homeBoxTwo"); 
// offset 
let offset = document.getElementById("offset"); 
// errorSubmit
let errorSubmit = document.getElementById("errorSubmit"); 
// div del modal oculto
let modal = document.getElementById("modal"); 
// textAreaEncode
let encoded = document.getElementById("encoded"); 
// textAreaDecode 
let decode = document.getElementById("decode"); 
// boton de instrucciones que activa el modal oculto
let btnPopUp = document.getElementById('btnPopUp');
btnPopUp.addEventListener('click', showModal);  
document.addEventListener("click", hideModal); 

// botón de codificar  
let btnEncode = document.getElementById("btnEncode");  
btnEncode.addEventListener('click', cipherEncode); 
 
// botón de decodificar
let btnDecode = document.getElementById("btnDecode"); 
btnDecode.addEventListener('click', cipherDecode); 
// botón de validar inicio de sesión
let enterCipher = document.getElementById("enterCipher"); 
enterCipher.addEventListener('click', validateUser);
// botón de cerrar sesión
let close = document.getElementById('close');
close.addEventListener('click', closeSesion);
// botones de aumento y decremento de offset
let offsetIncrement = document.getElementById("offsetIncrement"); 
offsetIncrement.addEventListener("mousedown", offsetValueIncrement);
let offsetDecrement = document.getElementById("offsetDecrement");  
offsetDecrement.addEventListener("mousedown", offsetValueDecrement);
offsetIncrement.addEventListener('mouseup', stopTimer);
offsetIncrement.addEventListener('mouseleave', stopTimer);
offsetDecrement.addEventListener('mouseup', stopTimer);
offsetDecrement.addEventListener('mouseleave', stopTimer);
// declarar el timer global
let timer;

function stopTimer() {
  clearTimeout(timer);
}

function cipherEncode() {

  let textEncode = '';
  // obtener el valor del offset
  let offsetValue = parseInt(document.getElementById('offset').value);
  // obtener el valor del string
  let stringValue = document.getElementById('decode').value;
  // obtener el resultado del descifrado
  try {
  Math.sign(offsetValue) == 1 ? textEncode = cipher.encode(offsetValue, stringValue) : textEncode = cipher.decode(Math.abs(offsetValue), stringValue)
  // asignar el valor al textArea
  encoded.value = textEncode;
} catch (error) {
  encoded.value = error.message ;
 } 
}
 
function cipherDecode() {
  let textEncode = '';
  // obtener el valor del offset
  let offsetValue = parseInt(document.getElementById('offset').value);
  // obtener el valor del string
  let stringValue = document.getElementById('decode').value;
  // obtener el resultado del descifrado
  try{ 
  Math.sign(offsetValue) == 1 ? textEncode = cipher.decode(offsetValue, stringValue) : textEncode = cipher.encode(Math.abs(offsetValue), stringValue)
  // asignar el valor al textArea
  encoded.value = textEncode;
} catch (error) {
  encoded.value = error.message ;
 } 
}


function validateUser(event) {

  event.preventDefault();

  let password = document.getElementById('password').value;
  let user = document.getElementById('user').value;
  let userName = document.getElementById('userName');


  if (password == 'cipherlove') {
    if (user) { 
    
    userName.innerHTML = user[0].toUpperCase() + user.slice(1);
    homeBoxOne.classList.replace(".show", "hide");
    homeBoxTwo.classList.replace("hide", "show");
    } 
    else {
      errorSubmit.innerHTML = "Ingresa tu nombre de usuario";
    }
  }  
  else {
    errorSubmit.innerHTML = "Contraseña incorrecta";
  }
}


function closeSesion() {

  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text" || inputs[i].type == "password") {
      inputs[i].value = '';
    }
  }

  errorSubmit.innerHTML = "";
  decode.value = "";
  encoded.value = "";
  offset.value = ""; 

  homeBoxTwo.classList.replace("show", "hide");
  homeBoxOne.classList.replace("hide", ".show");

} 

function offsetValueIncrement() {
  let offsetValue = parseInt(document.getElementById('offset').value);
  let newValue = offsetValue + 1;

  if (offsetValue) {
    document.getElementById("offset").value = newValue;
  } else {
    document.getElementById("offset").value = "1";
  }

  timer = setTimeout(function () {
    offsetValueIncrement();
  }, 200);
}

function offsetValueDecrement() {
  let offsetValue = parseInt(document.getElementById('offset').value);
  let newValue = offsetValue - 1;
  if (offsetValue) {
    document.getElementById("offset").value = newValue;
  } else {
    document.getElementById("offset").value = "-1";
  }

  timer = setTimeout(function () {
    offsetValueDecrement();
  }, 200);
}


function showModal(event) { 
  event.stopPropagation();  
  modal.classList.replace("hide", "show");  
  
}

function hideModal(event) { 
  event.stopPropagation();   
  modal.classList.replace("show", "hide");  
}
