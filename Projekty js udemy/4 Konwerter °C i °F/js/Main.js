const number = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const swap = () => {
    if (one.textContent === '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
    }
    result.textContent = '';
}

const convert = () => {
    if (number.value === ''){
        result.textContent= 'Podaj jakąś liczbę'
    } else{
    if (one.textContent === '°C'){
        celsius = (number.value - 32) / 1.8
        result.textContent = `${number.value}°C to ${celsius.toFixed(1)}°F`
    } else {
        fahrenheit = number.value * 1.8 + 32
        result.textContent = `${number.value}°F to ${fahrenheit.toFixed(1)}°C`
    }
}
}

const reset = () => {
    result.textContent = '';
    number.value = '';
}


convBtn.addEventListener('click', convert)
changeBtn.addEventListener('click', swap)
resetBtn.addEventListener('click', reset)
