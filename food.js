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
  let foodElement = document.createElement('img'); 
  foodElement.src = '/food.png'; 
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  foodElement.style.width = '40px';
  foodElement.style.height = '40px'; 
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition () {
  let newFoodPosition 
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition()
  }
  return newFoodPosition
}
