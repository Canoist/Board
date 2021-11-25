const board = document.querySelector('#board')
const colors = ['#c43b3b', '#593bc4', '#3bbbc4', '#14ce33', '#89c205', '#da8300', '#e7b2cb']
const SQUARES_NUMBER = 800
for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () =>
      setColor(square))

   square.addEventListener('mouseleave', () =>
      removeColor(square))
   board.append(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
   element.style.backgroundColor = '#2f2f2f'
   element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
