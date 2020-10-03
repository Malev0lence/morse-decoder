const { strikethrough } = require("colors");

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let subArr = [];
    let startSlicing = 0;
    for (let i = 0; i < expr.length / 10; i++) {
        subArr.push(expr.slice(startSlicing, startSlicing + 10));
        startSlicing += 10;
    };
  
    subArr = subArr.map((value) => {
      if (isNaN(parseInt(value))) {
        return value;
      }
      return parseInt(value) + '';
    });
  
    subArr = subArr.map((value) => {
      let RegExp = /(10)/g;
      value = value.replace(RegExp, '.');
      RegExp = /(11)/g;
      value = value.replace(RegExp, '-');
      return value;
    });
  subArr = subArr.map((value) => {
    if (value === '**********') {
      return ' ';
    }
    for (let key in MORSE_TABLE) {
      return MORSE_TABLE[value];
    }
    
  })
    return subArr.join('');
}

module.exports = {
    decode
}