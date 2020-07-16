// way 2
// Useing Selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(question => {
  // console.log(question)
  const btn = question.querySelector('.question-btn')
  // console.log(btn)
  btn.addEventListener('click', () => {
    questions.forEach(item => {
      if (item !== question) item.classList.remove('show-text')
    })
    question.classList.toggle('show-text')
  })
})

/* // way 1
// Travering the DOM
const btns = document.querySelectorAll('.question-btn')

// Loop over questions Buttons
btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const q = e.currentTarget.parentElement.parentElement
    q.classList.toggle('show-text')
  })
})
 */
