const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    return frase.replace('x',`${nome}`);
}

const printArray = (array) => {
    let text = '';
    for (const value of array) {
        text += `- ${value}\n`;
    }
    return text;
}

const minhasSkills = callback =>{
    const skills = ['Javascript','HTML','CSS'];
    const text = printArray(skills)
    const portfolio = `${callback}
Minhas ${skills.length} principais habilidades são:
${text}`;

    return portfolio;
}

console.log(minhasSkills(substituaX('cagado')));