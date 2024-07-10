'use strict';

let buttons, result;

function calculate() {
    const currentValue = this.innerHTML;

    if (currentValue === '=') {
        try {
            result.value = eval(result.value); // Note: eval is dangerous and not recommended for production code.
        } catch (e) {
            result.value = "Error";
        }
        return;
    }

    if (result.value === "Error") {
        result.value = '';
    }

    switch (currentValue) {
        case 'AC':
            result.value = '';
            break;
        case 'C':
            result.value = result.value.slice(0, -1);
            break;
        case 'x^':
            result.value += '**';
            break;
        case '%':
            result.value += '/100';
            break;
        default:
            result.value += currentValue;
    }
}

function initElement() {
    buttons = document.querySelectorAll('button');
    result = document.querySelector('#result');
}

function initEvent() {
    buttons.forEach(button => button.addEventListener('click', calculate));
}

function init() {
    initElement();
    initEvent();
}

window.addEventListener('DOMContentLoaded', init);
