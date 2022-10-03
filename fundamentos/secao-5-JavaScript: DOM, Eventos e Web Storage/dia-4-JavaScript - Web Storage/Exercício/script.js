function changeBackground() {
    let divText = document.querySelector('.text');
    let inputBackground = document.querySelector('.input-background');
    divText.style.backgroundColor = inputBackground.value;
    inputBackground.value = '';
}

let btnBackground = document.querySelector('.btn-background');
btnBackground.addEventListener('click',changeBackground);

function changeColor() {
    let divText = document.querySelector('.text');
    let inputColor = document.querySelector('.input-color');
    divText.style.color = inputColor.value;
    inputColor.value = '';
}

let btnColor = document.querySelector('.btn-color');
btnColor.addEventListener('click',changeColor);

function changeFontSize(){
    let divText = document.querySelector('.text');
    let inputFontSize = document.querySelector('.input-font-size');
    divText.style.fontSize = inputFontSize.value+'px';
    inputFontSize.value = '';
}

let btnFontSize = document.querySelector('.btn-font-size');
btnFontSize.addEventListener('click',changeFontSize);

function changeLineHeight() {
    let divText = document.querySelector('.text');
    let inputLineHeight = document.querySelector('.input-line-height');
    divText.style.lineHeight = inputLineHeight.value+'px';
    inputLineHeight.value = '';
}

let btnLineHeight = document.querySelector('.btn-line-height');
btnLineHeight.addEventListener('click',changeLineHeight);

function changeFontFamily() {
    let divText = document.querySelector('.text');
    let inputFontFamily = document.querySelector('.input-font-family');
    divText.style.fontFamily = inputFontFamily.value;
    inputFontFamily.value = '';
}

let btnFontFamily = document.querySelector('.btn-font-family');
btnFontFamily.addEventListener('click',changeFontFamily);

function refresh() {
    
}
