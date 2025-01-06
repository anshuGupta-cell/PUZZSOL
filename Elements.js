class Elements {
  constructor() {
    this.puzzle = document.querySelector('.puzzle');
    this.cellAmounts = 20;
    this.puzzleDivs = [];
    this.dragableDivs = [];
    this.cells = document.querySelector('.cells')
    this.modal = document.querySelector('.modal')
    this.cAttempt = document.querySelector('.cAtm')
    this.wAttempt = document.querySelector('.wAtm');
    this.newGame = document.querySelector('.newGame');
    this.winState = document.querySelector('.win-state');
    this.wonImg = document.querySelector('.wonImg');
    this.preview = document.querySelector('.preview');
    this.loader = document.querySelector('.loader');
    this.changeImg = document.querySelector('.change-img');
    this.createElements();
  }
  createElements() {
    for (let i = 0; i < this.cellAmounts; i++) {
      const puzzleDiv = document.createElement('div')
      puzzleDiv.setAttribute('data-index',i)
      this.puzzle.append(puzzleDiv)
      this.puzzleDivs.push(puzzleDiv)
      
      const dragableDiv = document.createElement('div')
      dragableDiv.setAttribute('data-index',i)
      dragableDiv.setAttribute('dragable',true)
      this.dragableDivs.push(dragableDiv)
      
    }
  }

}

export default Elements;