const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.getElementById('numbers-display');

generateBtn.addEventListener('click', () => {
  const whiteBalls = [];
  while (whiteBalls.length < 5) {
    const randomNum = Math.floor(Math.random() * 69) + 1;
    if (!whiteBalls.includes(randomNum)) {
      whiteBalls.push(randomNum);
    }
  }
  whiteBalls.sort((a, b) => a - b);

  const powerball = Math.floor(Math.random() * 26) + 1;

  numbersDisplay.innerHTML = `
    ${whiteBalls.map(num => `<div class="ball white-ball">${num}</div>`).join('')}
    <div class="ball power-ball">${powerball}</div>
  `;
});