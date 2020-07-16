const colors = ['green', 'red', 'yellow', 'rgba(133,122,200)', '#f15025'],
  btn = document.getElementById('btn'),
  color = document.querySelector('.color')

// Listeners
btn.addEventListener('click', () => {
  // Get random number between 0 - 3
  const randomNumber = getRandomNumber()
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
