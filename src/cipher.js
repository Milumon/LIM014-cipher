let stringResult = '';

const cipher = {
  
  encode: function (offset, string) {


    let words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    stringResult = '';


    if (typeof (offset) !== 'number') {
      throw TypeError('El offset debe ser un número');

    } else if (typeof (string) !== 'string') {
      throw TypeError('El string debe ser un string');
    }

    for (var i = 0; i < string.length; i++) {
      let letter = string[i];
      let validWord = words.includes(letter.toUpperCase());
 

      if (validWord == true) {
        if (letter == letter.toUpperCase()) {
          let ASCIIvalue = (letter.charCodeAt(0) - 65 + offset) % 26 + 65;
          let finalLetter = String.fromCharCode(ASCIIvalue);
          stringResult += finalLetter;
        } else {
          console.log(letter.charCodeAt(0)); 
          let ASCIIvalue = (letter.charCodeAt(0) - 97 + offset ) % 26 + 97;
          let finalLetter = String.fromCharCode(ASCIIvalue);
          stringResult += finalLetter; 

        }
      } else {
        stringResult = stringResult + letter;
      } 
    }
    return stringResult;
  },

  decode: function (offset, string) {

    let words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

     stringResult = '';


    if (typeof (offset) !== 'number') {
      throw TypeError('El offset debe ser un número');

    } else if (typeof (string) !== 'string') {
      throw TypeError('El string debe ser un string');
    }

    for (var i = 0; i < string.length; i++) {
      let letter = string[i];
      let validWord = words.includes(letter.toUpperCase());

      if (validWord == true) {
        if (letter == letter.toUpperCase()) {
          let ASCIIvalue = (letter.charCodeAt(0) + 65 - offset ) % 26 + 65;
          let finalLetter = String.fromCharCode(ASCIIvalue);
          stringResult += finalLetter;
        } else {
          console.log(letter.charCodeAt(0));
          let ASCIIvalue = (letter.toUpperCase().charCodeAt(0) + 65 - offset ) % 26 + 65;
          let finalLetter = String.fromCharCode(ASCIIvalue);
          stringResult += finalLetter.toLowerCase(); 
        }

      } else {
        stringResult = stringResult + letter;
      }
    }
    return stringResult;
  } 
};

export default cipher;
