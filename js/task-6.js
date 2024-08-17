function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  const sizeStep = 10; 
  const initialSize = 30; 

  
  boxesContainer.innerHTML = '';

  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = initialSize + i * sizeStep; 
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
  }
}


function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}


document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);