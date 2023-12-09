const btn = document.getElementById('btn')
const colorCode = document.getElementById('color')
// const copy = document.getElementById('btn1')

const numbers = "0123456789"
const alpha = "ABCDEF"

function getRandomNum() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomAlpha() {
    return alpha[Math.floor(Math.random() * alpha.length)]
}


function getRandomHex() {
    let arr = []
    arr.push(getRandomNum())
    arr.push(getRandomAlpha())
    return arr[Math.floor(Math.random() * arr.length)]
}


btn.addEventListener("click", () => {
    let hex = "#"
    for(let i=0; i<6; i++){
        hex+=getRandomHex()
    }
    // console.log(hex)
    document.getElementById('btn1').innerText = 'Copy'
    document.body.style.backgroundColor = hex
    colorCode.textContent = hex
    // console.log(colorCode.textContent)
})


//copy function to copy the hex code
function Copy() {
    navigator.clipboard.writeText(colorCode.textContent)
    document.getElementById('btn1').innerText = 'Copied!'
}