const key = 'form-memory'

const SaveButton = document.getElementById('btn1') // 
const DeleteButton = document.getElementById('btn2') 
const Form = document.getElementById('main-form')
const inputField = Form.querySelector('input')

SaveButton.addEventListener('click', function(){
localStorage.setItem(key,inputField.value)

const firstAlert = document.getElementsByClassName('alert')[0]
firstAlert.classList.remove('d-none')
inputField.value = ''
  setTimeout(() => {
    firstAlert.classList.add('d-none')
  }, 2000)
})

DeleteButton.addEventListener('click', function () {
    inputField.value = ''
    localStorage.removeItem(key)
    
    const SecondAlert = document.getElementsByClassName('alert')[1]
    SecondAlert.classList.remove('d-none')
    setTimeout(() => {
      SecondAlert.classList.add('d-none')
    }, 2000)
  })