const board = document.querySelector('#board');
const colors = ['#3cff00', '#ff00c8', '#ff0000', '#00eeff', '#1100ff', '#00ff88'];
const SQUARES_NUMBER = 462;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor (e) {
    const color = getRandomColor();
    e.style.backgroundColor = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    
}

function removeColor (e) {
    e.style.backgroundColor = "#1d1d1d";
    e.style.boxShadow = '0 0 2px #000';
}

function getRandomColor () {
       const index = Math.floor(Math.random() * colors.length);
       return colors[index];
}