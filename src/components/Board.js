export default class Board {
    constructor(container, size = 4) {
      this.container = container;
      this.size = size;
    }
  
    draw() {
      this.container.innerHTML = '';
      for (let i = 0; i < this.size ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.container.appendChild(cell);
      }
    }
  }
  