const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', function() {
  
  let inputValue = nameInput.value;

  
  while (inputValue.startsWith(' ')) {
    inputValue = inputValue.substring(1);
  }
  
  while (inputValue.endsWith(' ')) {
    inputValue = inputValue.substring(0, inputValue.length - 1);
  }

  
  if (inputValue.length > 0) {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});


