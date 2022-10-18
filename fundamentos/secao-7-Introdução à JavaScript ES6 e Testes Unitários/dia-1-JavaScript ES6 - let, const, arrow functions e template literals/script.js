let clickCount = 0;
const h1 = document.querySelector('h1');
window.onload = () => {
    h1.innerText = `${clickCount}`;
    const btn = document.querySelector('button');
    btn.addEventListener('click',() => {
        clickCount +=1;
        h1.innerText = `${clickCount}`;
    });
}


