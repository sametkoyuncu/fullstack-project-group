let bodyColor = document.querySelector('.bodyColor')
let myInput = document.querySelector('#myInput')
let randomColor = 'ffffff'

let toastText = document.querySelector('#toastText')
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')

const changeColor = () => {
  randomColor = Math.floor(Math.random() * 16777215).toString(16)
  bodyColor.style.backgroundImage = null

  bodyColor.style.backgroundColor = '#' + randomColor
  myInput.value = randomColor
}

const copyColor = () => {
  /* Get the text field */
  var copyText = document.getElementById('myInput')

  /* Select the text field */
  copyText.select()
  copyText.setSelectionRange(0, 99999) /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value)
}

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    toastText.innerHTML = `The Color HEX Code <strong>#${randomColor}</strong> Copied to Clipboard 👍`
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}
