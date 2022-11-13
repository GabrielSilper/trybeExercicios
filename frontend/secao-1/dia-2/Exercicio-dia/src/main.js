import "./style.css";

const btnSortear = document.querySelector("button");
const heroName = document.querySelector("h3");
const heroImg = document.querySelector("img");

const randomID = () => {
  const TAM = 751;
  return Math.floor(Math.random() * TAM);
};

const randomHero = async () => {
  const N = randomID();
  const URL_API = `https://akabab.github.io/superhero-api/api/id/${N}.json`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

btnSortear.addEventListener("click", async () => {
  try {
    const data = await randomHero();
    heroImg.src = data.images.sm;
    setTimeout(() => {
      heroName.innerText = data.name;
    }, 200);
  } catch (error) {
    heroImg.src = "./images/blank.jpg";
    heroName.innerHTML = "Error: ID sorteado não existe!";
  }
  // heroName.innerHTML = JSON.stringify(data);
});
