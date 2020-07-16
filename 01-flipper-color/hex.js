// Variables
const hex = Array.from('0123456789abcdef'),
  btn = document.getElementById('btn'),
  color = document.querySelector('.color')

// Listener
btn.addEventListener('click', () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomHexNumber()]
  }
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
})

function getRandomHexNumber() {
  return Math.floor(Math.random() * hex.length)
}
