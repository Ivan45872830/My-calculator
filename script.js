let number_1 = document.getElementById('num-1')
let number_2 = document.getElementById('num-2')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let share = document.getElementById('share')
let button = document.getElementById('btn')
let result = document.getElementById('result')

let variable;

plus.onclick = function() {
    variable = '+'
}

minus.onclick = function() {
    variable = '-'
}

multiply.onclick = function() {
    variable = '*'
}

share.onclick = function() {
    variable = '/'
}

function Colors(color) {
    if (color < 0) {
        result.style.color = 'red'
    } else {
        result.style.color = 'white'
    }
    result.textContent = color
}

button.onclick = function() {
    if (variable == '+') {
        option = Number(number_1.value) + Number(number_2.value)
        Colors(option)
    } else if (variable == '-') {
        option = Number(number_1.value) - Number(number_2.value)
        Colors(option)
    } else if (variable == '*') {
        option = Number(number_1.value) * Number(number_2.value)
        Colors(option)
    } else if (variable == '/') {
        option = Number(number_1.value) / Number(number_2.value)
        Colors(option)
    }
}

