let bodyColor2 = document.querySelector('.bodyColor')
let myInput1 = document.querySelector('#myInput1')
let myInput2 = document.querySelector('#myInput2')
let randomColor1 = 'ffffff'
let randomColor2 = 'ffffff'
let copyText2 = `linear-gradient(to right, #${randomColor1} ,  #${randomColor2})`

let toastText2 = document.querySelector('#toastText2')
var toastTrigger2 = document.getElementById('liveToastBtn2')
var toastLiveExample2 = document.getElementById('liveToast2')

const changeGradient = () => {
  randomColor1 = Math.floor(Math.random() * 16777215).toString(16)
  randomColor2 = Math.floor(Math.random() * 16777215).toString(16)
  bodyColor2.style.backgroundImage = `linear-gradient(to right, #${randomColor1} ,  #${randomColor2})`
  myInput1.value = randomColor1
  myInput2.value = randomColor2
}

const copyGradient = () => {
  copyText2 = `linear-gradient(to right, #${randomColor1} ,  #${randomColor2})`

  navigator.clipboard.writeText(copyText2)
}

if (toastTrigger2) {
  toastTrigger2.addEventListener('click', function () {
    toastText2.innerHTML = `The Gradient Css Code <strong>${copyText2}</strong> Copied to Clipboard 👍`
    var toast = new bootstrap.Toast(toastLiveExample2)
    toast.show()
  })
}
