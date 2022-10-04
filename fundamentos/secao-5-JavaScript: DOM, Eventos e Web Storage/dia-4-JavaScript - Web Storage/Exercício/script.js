window.onload = () => {
    function changeBackground() {
        let divText = document.querySelector('.text');
        let inputBackground = document.querySelector('.input-background');
        divText.style.backgroundColor = inputBackground.value;
        inputBackground.value = '';
        refresh();
    }
    
    let btnBackground = document.querySelector('.btn-background');
    btnBackground.addEventListener('click',changeBackground);

    function changeColor() {
        let divText = document.querySelector('.text');
        let inputColor = document.querySelector('.input-color');
        divText.style.color = inputColor.value;
        inputColor.value = '';
        refresh();
    }
    
    let btnColor = document.querySelector('.btn-color');
    btnColor.addEventListener('click',changeColor);
    
    function changeFontSize(){
        let divText = document.querySelector('.text');
        let inputFontSize = document.querySelector('.input-font-size');
        divText.style.fontSize = inputFontSize.value+'px';
        inputFontSize.value = '';
        refresh();
    }

    let btnFontSize = document.querySelector('.btn-font-size');
    btnFontSize.addEventListener('click',changeFontSize);
    
    function changeLineHeight() {
        let divText = document.querySelector('.text');
        let inputLineHeight = document.querySelector('.input-line-height');
        divText.style.lineHeight = inputLineHeight.value+'px';
        inputLineHeight.value = '';
        refresh();
    }

    let btnLineHeight = document.querySelector('.btn-line-height');
    btnLineHeight.addEventListener('click',changeLineHeight);
    
    function changeFontFamily() {
        let divText = document.querySelector('.text');
        let inputFontFamily = document.querySelector('.input-font-family');
        divText.style.fontFamily = inputFontFamily.value;
        inputFontFamily.value = '';
        refresh();
    }
    
    let btnFontFamily = document.querySelector('.btn-font-family');
    btnFontFamily.addEventListener('click',changeFontFamily);
    verifyLS();
}

function verifyLS(){
    if (localStorage.getItem('textPage') === null){
        let textPage = {
            background : '',
            color : '',
            fontSize : '',
            lineHeight : '',
            fontFamily : '',
        }
        localStorage.setItem('textPage',JSON.stringify(textPage));
    }else{
        let divText = document.querySelector('.text');
        let textPage = JSON.parse(localStorage.getItem('textPage'));
        divText.style.backgroundColor = textPage.background;
        divText.style.color = textPage.color;
        divText.style.fontSize = textPage.fontSize;
        divText.style.lineHeight = textPage.lineHeight;
        divText.style.fontFamily = textPage.fontFamily;
    }
}

function refresh() {
    let divText = document.querySelector('.text');
    let textPage = JSON.parse(localStorage.getItem('textPage'));
    textPage.background = divText.style.backgroundColor;
    textPage.color = divText.style.color; 
    textPage.fontSize = divText.style.fontSize;
    textPage.lineHeight = divText.style.lineHeight;
    textPage.fontFamily = divText.style.fontFamily;
    localStorage.setItem('textPage', JSON.stringify(textPage));
}