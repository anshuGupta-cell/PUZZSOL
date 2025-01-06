const alertCont = document.querySelector('.alertCont')
const closeAlert = document.querySelector('.close-alert')

closeAlert.addEventListener('click',()=>{
  alertCont.style.visibility = 'hidden'
})