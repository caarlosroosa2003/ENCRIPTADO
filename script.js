function encodeText() {
    const inputText = document.getElementById('inputText').value;
    let encodedText = '';
  
    for (let i = 0; i < inputText.length; i++) {
      let char = inputText[i];
  
      if (char === ' ') {
        encodedText += ' ';
      } else if (char === 'Z') {
        encodedText == encodeText.concat('A');
      } else if (/[A-Y]/.test(char)) {
        encodedText += String.fromCharCode(char.charCodeAt(0) + 1);
    } else if (char === 'z') {
        encodedText += 'a';
      } else if (/[a-y]/.test(char)) {
        encodedText += String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (/[0-8]/.test(char)) {
        encodedText += String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char === '9') {
        encodedText == '0';
      }
    }
  
    document.getElementById('outputText').textContent = encodedText;
  }