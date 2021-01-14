/* eslint-disable no-console */
import cipher from './cipher.js';

console.log(cipher);

let encodeButton = document.getElementById('btnEncode');
encodeButton.addEventListener('click', cipherEncode);

let decodeButton = document.getElementById('btnDecode');
decodeButton.addEventListener('click', cipherDecode);

function cipherEncode() {
  // obtener el valor del offset
  let offsetValue = parseInt(document.getElementById('offset').value);
  // obtener el valor del string
  let stringValue = document.getElementById('decode').value;
  // obtener el resultado del descifrado
  let textEncode = cipher.encode(offsetValue, stringValue);
  // asignar el valor al textArea
  document.getElementById('encoded').value = textEncode;
}



function cipherDecode() {
  // obtener el valor del offset
  let offsetValue = parseInt(document.getElementById('offset').value);
  // obtener el valor del string
  let stringValue = document.getElementById('decode').value;
  // obtener el resultado del descifrado
  let textEncode = cipher.decode(offsetValue, stringValue);
  // asignar el valor al textArea
  document.getElementById('encoded').value = textEncode;
}
