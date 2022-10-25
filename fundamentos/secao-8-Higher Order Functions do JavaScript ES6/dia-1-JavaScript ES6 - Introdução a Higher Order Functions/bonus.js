const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) =>
  Math.floor(Math.random() * (dragon.strength + 1 - 15) + 15);

const warriorDamage = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg + 1));
  const Damage = maxDamage > minDamage ? maxDamage : minDamage;
  return Damage;
};

const mageDamage = (mage) => {
  const damage = {
    damage: mage.intelligence,
    manaGasta: 0,
  }
  const maxDamage = Math.floor(Math.random() * ((damage.damage *2)+1));
  if (mage.mana>14) {
    damage.damage = maxDamage>damage.damage ? maxDamage : damage.damage;
    damage.manaGasta = 15; 
  }else{
    damage.damage= 'Não possui mana suficiente';
  }
  return damage;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (callback) => {
    const damage = callback(battleMembers.warrior);
    battleMembers.warrior.damage = damage;
    battleMembers.dragon.healthPoints -= damage;
  },

  mageTurn: (callback) => {
    const damage = callback(battleMembers.mage)
    battleMembers.dragon.healthPoints -= damage.damage;
    battleMembers.mage.damage = damage.damage;
    battleMembers.mage.mana -= damage.manaGasta;
  }

};

gameActions.mageTurn(mageDamage);
console.log(battleMembers);

