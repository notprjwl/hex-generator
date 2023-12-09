const clickMe = document.querySelector('.btn')
const colorCode = document.getElementById('color')

const colors = ['red', 'black', 'blue', 'rgb(255, 87, 51)', '#f15025']

clickMe.addEventListener("click", function (){
    const random = getRandom()
    console.log(random)

    document.body.style.backgroundColor = colors[random]
    colorCode.textContent = colors[random]
})


function getRandom() {
    return Math.floor(Math.random() * colors.length)
}

function Copy() {
    navigator.clipboard.writeText(colorCode.textContent)
    document.getElementById('btn1').innerText = 'copied!'
}










// function changeColor() {
//     const length = 6
//     const colorCode = generateColorCode(length)
//     console.log(colorCode)
// }

// function generateColorCode(length) {
//     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//     let colorCode = ''
//     for(let i=0; i<length; i++){
//         const randomIndex = Math.floor(Math.random()*charset.length)
//         colorCode+=charset[randomIndex]
//     }
//     console.log(colorCode)
//     return colorCode
// }