/* eslint-disable no-console */
import cipher from './cipher.js';

console.log(cipher);

let encodeButton = document.getElementById('btnEncode');
encodeButton.addEventListener('click', cipherEncode);

let decodeButton = document.getElementById('btnDecode');
decodeButton.addEventListener('click', cipherDecode);

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
