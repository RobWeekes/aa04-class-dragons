const EvilDragon = require('./classes/evil-dragon.js');
const FriendlyDragon = require('./classes/friendly-dragon.js');
const Dragon = require('./classes/dragon.js');

const falkor = new FriendlyDragon (
  'Falkor',
  'white',
  [
    'save Atreyu from the swamp',
    'save Atreyu from the Nothing',
    'scare the local bullies into a dumpster'
  ],
  'Bastian'
)

console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());

// Falkor likes to save Atreyu from the swamp
// Falkor likes to save Atreyu from the Nothing
// Falkor likes to scare the local bullies into a dumpster
// Falkor breathes fire everywhere! BURN!!!!
// Falkor helps their friend Bastian


const smaug = new EvilDragon (
  'Smaug',
  'black',
  [
    'take over your mountain kingdom',
    'steal all your dwarven gold',
    'burn down your floating village'
  ],
  'Dwarf King'
)

console.log(smaug);
smaug.dontInviteThemOverForDinner();
console.log(smaug.breathesFire());
console.log(smaug.burnsNemesis());

// Smaug will take over your mountain kingdom
// Smaug will steal all your dwarven gold
// Smaug will burn down your floating village
// Smaug breathes fire everywhere! BURN!!!!
// Smaug destroys Dwarf King with fire! WHOOOSH!!!

// const allDragons = Dragon.getDragons();

Dragon.getDragons(falkor, smaug);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
