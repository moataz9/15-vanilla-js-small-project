const toggleBtn = document.querySelector('.sidebar-toggle'),
  closeBtn = document.querySelector('.close-btn'),
  sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})