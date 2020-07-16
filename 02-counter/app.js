// Set initial Count
let count = 0

// Select value and buttons
const value = document.getElementById('value'),
  btns = document.querySelectorAll('.btn')

// Loop on all btns
btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const styles = e.currentTarget.classList
    // check the count status
    if (styles.contains('decrease')) count--
    else if (styles.contains('increase')) count++
    else count = 0
    // set counter colors
    if (count > 0) value.style.color = 'green'
    if (count < 0) value.style.color = 'red'
    if (count == 0) value.style.color = '#222'
    value.innerHTML = count
  })
})
