export default class Game {
    constructor(board, scoreElement, livesElement) {
      this.board = board;
      this.scoreElement = scoreElement;
      this.livesElement = livesElement;
      this.score = 0;
      this.lives = 5;
      this.activeGoblin = null;
      this.timer = null;
    }
  
    start() {
      this.updateScore();
      this.updateLives();
      this.nextTurn();
    }
  
    stop() {
      clearInterval(this.timer);
      alert('Game Over! Your score: ' + this.score);
      window.location.reload();
    }
  
    nextTurn() {
      if (this.lives <= 0) {
        this.stop();
        return;
      }
      this.showGoblin();
      this.timer = setTimeout(() => {
        if (this.activeGoblin) {
          this.lives -= 1;
          this.updateLives();
          this.nextTurn();
        }
      }, 1000);
    }
  
    showGoblin() {
        const cells = Array.from(this.board.children);
      
        if (this.activeGoblin) {
          this.activeGoblin.innerHTML = '';
        }

        const randomCell = cells[Math.floor(Math.random() * cells.length)];

        randomCell.innerHTML = `<img src="${require('../assets/goblin.png')}" alt="Goblin" class="goblin">`;
      
        this.activeGoblin = randomCell;
      }
      
  
    handleHit(cell) {
        const goblin = cell.querySelector('.goblin');
        if (goblin) {
          this.score += 1; 
          this.updateScore();
      
          cell.innerHTML = '';
          this.activeGoblin = null;
      
          clearTimeout(this.timer);
          this.nextTurn();
        }
      }
      
  
    updateScore() {
      this.scoreElement.textContent = `Score: ${this.score}`;
    }
  
    updateLives() {
      this.livesElement.textContent = `Lives: ${this.lives}`;
    }
  }
  