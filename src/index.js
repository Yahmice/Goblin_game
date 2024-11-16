import Game from './components/Game';
import Board from './components/Board';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const boardElement = document.querySelector('.board');
  const scoreElement = document.querySelector('.score');
  const livesElement = document.querySelector('.lives');

  const board = new Board(boardElement);
  board.draw();

  const game = new Game(boardElement, scoreElement, livesElement);

  boardElement.addEventListener('click', (e) => {
    const cell = e.target.closest('.cell');
    if (cell) {
      game.handleHit(cell); 
    }
  });
  

  game.start();
});
