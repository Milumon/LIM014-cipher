/* eslint-disable no-console */
import cipher from './cipher.js';

console.log(cipher);

let encodeButton = document.getElementById('btnEncode');
encodeButton.addEventListener('click', cipherEncode);

let decodeButton = document.getElementById('btnDecode');
decodeButton.addEventListener('click', cipherDecode);

let validateForm = document.getElementById('enterCipher');
validateForm.addEventListener('click', validateUser);

let close = document.getElementById('close');
close.addEventListener('click', closeSesion);
 

let screenOne = document.getElementById("homeBoxOne");
let screenTwo = document.getElementById("homeBoxTwo");



function cipherEncode() {

  let textEncode = '';
  // obtener el valor del offset
  let offsetValue = parseInt(document.getElementById('offset').value);
  // obtener el valor del string
  let stringValue = document.getElementById('decode').value;
  // obtener el resultado del descifrado
  Math.sign(offsetValue) == 1 ? textEncode = cipher.encode(offsetValue, stringValue) : textEncode = cipher.decode(Math.abs(offsetValue), stringValue)
  // asignar el valor al textArea
  document.getElementById('encoded').value = textEncode;
}



function cipherDecode() {
  let textEncode = '';
  // obtener el valor del offset
  let offsetValue = parseInt(document.getElementById('offset').value);
  // obtener el valor del string
  let stringValue = document.getElementById('decode').value;
  // obtener el resultado del descifrado
  Math.sign(offsetValue) == 1 ? textEncode = cipher.decode(offsetValue, stringValue) : textEncode = cipher.encode(Math.abs(offsetValue), stringValue)
  // asignar el valor al textArea
  document.getElementById('encoded').value = textEncode;
}


function validateUser(event) {

  event.preventDefault();
  
let password = document.getElementById('password').value; 
let user = document.getElementById('user').value; 

  if (password == 'cipherlove') { 
    document.getElementById('userName').innerHTML = user[0].toUpperCase() + user.slice(1);
    screenOne.classList.replace(".show", "hide");
    screenTwo.classList.replace("hide", "show");
   } else {
    alert("CONTRASEÑA INCORRECTA");
  }
}


function closeSesion(){


  
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "text") {
          inputs[i].value = ' ';
      }
  } 

  screenTwo.classList.replace("show", "hide");
  screenOne.classList.replace("hide", ".show");

}