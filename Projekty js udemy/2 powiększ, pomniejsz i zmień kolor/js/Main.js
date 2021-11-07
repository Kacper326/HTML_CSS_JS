const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const plus = () => {
    if (fontSize < 50){
    fontSize += 4
    p.style.fontSize = fontSize + 'px'} else {}
}


const minus = () => {
    if (fontSize > 20){
        fontSize -= 4
        p.style.fontSize = fontSize + 'px'} else {}
    }
    
const colorRandom = () => {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    p.style.color = "#" + randomColor;

}



    sizeDown.addEventListener('click', minus)
    sizeUp.addEventListener('click', plus)
    color.addEventListener('click', colorRandom)