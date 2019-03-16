const form = document.forms[0]
const redInput = document.querySelector('#red')
const greenInput = document.querySelector('#green')
const blueInput = document.querySelector('#blue')
const colorBoxOutput = document.querySelector('#color-box-output')
const hexOutput = document.querySelector('#hex-output')

form.addEventListener('input', function (event) {
  const input = parseInt(event.target.value)

  if (event.target.id === 'red') {
    if (input >= 0 && input < 256) document.getElementById('red-color-box').style.backgroundColor = 'rgb(' + input + ', 0, 0)'
  } else if (event.target.id === 'green') {
    if (input >= 0 && input < 256) document.getElementById('green-color-box').style.backgroundColor = 'rgb(0, ' + input + ', 0)'
  } else if (event.target.id === 'blue') {
    if (input >= 0 && input < 256) document.getElementById('blue-color-box').style.backgroundColor = 'rgb(0, 0, ' + input + ')'
  }
})

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const redDec = parseInt(redInput.value)
  const greenDec = parseInt(greenInput.value)
  const blueDec = parseInt(blueInput.value)

  if ((redDec >= 0 && redDec < 256) && (greenDec >= 0 && greenDec < 256) && (blueDec >= 0 && blueDec < 256)) {
    let redHex = redDec.toString(16)
    let greenHex = greenDec.toString(16)
    let blueHex = blueDec.toString(16)

    if (redHex.length === 1) {redHex = '0' + redHex}
    if (greenHex.length === 1) {greenHex = '0' + greenHex}
    if (blueHex.length === 1) {blueHex = '0' + blueHex}

    const hexOutputStr = redHex + greenHex + blueHex

    hexOutput.classList.remove('text-danger')
    colorBoxOutput.setAttribute("style", 'background-color: #' + hexOutputStr + ';')
    colorBoxOutput.classList.replace('hidden', 'display')
    hexOutput.value = hexOutputStr.toUpperCase()
    // form.submit()
  } else {
  	hexOutput.classList.add('text-danger')
  	hexOutput.value = 'Invalid input!'
  	colorBoxOutput.classList.replace('display', 'hidden')
  }
})