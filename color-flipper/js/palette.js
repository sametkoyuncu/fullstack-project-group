let bodyColor3 = document.querySelector('.bodyColor')

let paletteInput1 = document.querySelector('#paletteInput1')
let paletteInput2 = document.querySelector('#paletteInput2')
let paletteInput3 = document.querySelector('#paletteInput3')
let paletteInput4 = document.querySelector('#paletteInput4')

let paletteColor1 = 'ffffff'
let paletteColor2 = 'ffffff'
let paletteColor3 = 'ffffff'
let paletteColor4 = 'ffffff'

let paletteCopyText = `#${paletteColor1} ,  #${paletteColor2},  #${paletteColor3},  #${paletteColor4}`

let paletteToastText = document.querySelector('#paletteToastText')
var paletteToastTrigger = document.getElementById('paletteLiveToastBtn')
var paletteToastLiveExample = document.getElementById('paletteLiveToast')

const changePalette = () => {
  paletteColor1 = Math.floor(Math.random() * 16777215).toString(16)
  paletteColor2 = Math.floor(Math.random() * 16777215).toString(16)
  paletteColor3 = Math.floor(Math.random() * 16777215).toString(16)
  paletteColor4 = Math.floor(Math.random() * 16777215).toString(16)

  paletteInput1.value = paletteColor1
  paletteInput2.value = paletteColor2
  paletteInput3.value = paletteColor3
  paletteInput4.value = paletteColor4

  bodyColor3.style.backgroundImage = `linear-gradient(to right, #${paletteColor1}, #${paletteColor1} 25%, #${paletteColor2} 25%, #${paletteColor2} 50%, #${paletteColor3} 50%, #${paletteColor3} 75%, #${paletteColor4} 75%, #${paletteColor4})`
}

const copyPalette = () => {
  paletteCopyText = `#${paletteColor1} ,  #${paletteColor2},  #${paletteColor3},  #${paletteColor4}`

  navigator.clipboard.writeText(paletteCopyText)
}

if (paletteToastTrigger) {
  paletteToastTrigger.addEventListener('click', function () {
    paletteToastText.innerHTML = `The Palette Hex Codes <strong>${paletteCopyText}</strong> Copied to Clipboard 👍`
    var toast = new bootstrap.Toast(paletteToastLiveExample)
    toast.show()
  })
}
