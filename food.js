import { onSnake, expandSnake } from './snake.js'
import { getRandomGridPosition } from './grid.js'


let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update(){
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  let foodElement = document.createElement('img'); // Creează un element de tip imagine
  foodElement.src = '/food.png'; // Adaugă calea către imaginea pe care dorești să o folosești
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  foodElement.style.width = '40px'; // Specifică lățimea dorită
  foodElement.style.height = '40px'; // Specifică înălțimea dorită
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition () {
  let newFoodPosition 
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition()
  }
  return newFoodPosition
}
