 const cipher = {

   encode: function (offset, string) {

     let words = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z'.split(" ");
     let stringResult = '';

     if (typeof (offset) !== 'number' || typeof (string) !== 'string') {
       throw TypeError('El offset debe ser un número y el mensaje debe ser una cadena de texto');
     }  

     for (var i = 0; i < string.length; i++) {
       let letter = string[i];
       let validWord = words.includes(letter.toUpperCase());
       if (validWord == true) {
         let upperLetter = letter.toUpperCase();
         let ASCIIvalue = (upperLetter.charCodeAt(0) - 65 + offset) % 26 + 65;
         let finalLetter = String.fromCharCode(ASCIIvalue);
         letter === letter.toUpperCase() ? (stringResult += finalLetter) : (stringResult += finalLetter.toLowerCase());
       } else {
         stringResult += letter;
       }
     }
     return stringResult;
   },

   decode: function (offset, string) {

     let words = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z'.split(" ");
     let stringResult = '';
     if (typeof (offset) !== 'number' || typeof (string) !== 'string') {
      throw TypeError('El offset debe ser un número y el mensaje debe ser una cadena de texto');
    }

     for (var i = 0; i < string.length; i++) {
       let letter = string[i];
       let validWord = words.includes(letter.toUpperCase());
       if (validWord == true) {
         let upperLetter = letter.toUpperCase();
         let ASCIIvalue = (upperLetter.charCodeAt(0) + 65 - offset) % 26 + 65;
         let finalLetter = String.fromCharCode(ASCIIvalue);
         letter === letter.toUpperCase() ? (stringResult += finalLetter) : (stringResult += finalLetter.toLowerCase()); 
       } else {
         stringResult += letter;
       }
     }
     return stringResult;
   }
 };

 export default cipher;
