import Elements from './Elements.js';

class PositionElements {
  constructor() {
    this.element = new Elements();
    this.leftPositions = [0, 8, 16, 24, 32];
    this.topPositions = [0, 6, 12, 18];
    this.addDragable();
    this.imgUrl = 'img/17.jpeg';
  }
  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  shufflePositions() {
    return (
      this.shuffle(this.leftPositions).map((leftPosition) => (
        this.shuffle(this.topPositions).map((topPosition) => [leftPosition, topPosition])
      )).reduce((position, item) => [...position, ...item])
    )
  }
  bgPositions() {
    return (
      this.topPositions.map((topPosition) => (
        this.leftPositions.map((leftPosition) => [topPosition, leftPosition])
      )).reduce((position, item) => [...position, ...item])
    )
  }

  async randomImg() {
  try {
    const URL = 'https://picsum.photos/1920/1080';
    const response = await fetch(URL);
    const blob = await response.blob();
    this.imgUrl = window.URL.createObjectURL(blob);
    
  } catch (error) {
    console.error('Error fetching random image:', error);
  }
}

  async addDragable() {
    const { cells, dragableDivs, preview, loader, changeImg } = this.element
    const bgPositions = this.bgPositions()
    const shufflePositions = this.shufflePositions()

    loader.classList.add('active');
    await this.randomImg();
    loader.classList.remove('active');

    preview.style.backgroundImage = `url(${this.imgUrl})`

    dragableDivs.forEach((div, i) => {
      div.style.backgroundImage = `url(${this.imgUrl})`
      cells.append(div)
      div.style.backgroundPosition = `-${bgPositions[i][1]}vw -${bgPositions[i][0]}vw`
      div.style.left = `${shufflePositions[i][0]}vw`;
      div.style.top = `${shufflePositions[i][1]}vw`;
    })
    changeImg.addEventListener('click', () => {
      location.reload();
    })
  }

}
export default PositionElements;