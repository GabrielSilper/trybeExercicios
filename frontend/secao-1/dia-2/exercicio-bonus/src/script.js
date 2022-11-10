import './style.css';

const btnDog = document.querySelector('#dog');
const btnCat = document.querySelector('#cat');
const btnRandom = document.querySelector('#random');
const imgPet = document.querySelector('#imgPet');

const applying = src => imgPet.src = src;

btnDog.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => applying(data.message));
});

btnCat.addEventListener('click', () =>{
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => applying(data.file));
});

btnRandom.addEventListener('click', () =>{
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://aws.random.cat/meow'),
    ])
    .then(response => response.json())
    .then(data => {
        const URL = data.file || data.message;
        applying(URL);
    })
    .catch(error => console.log(error));
});

