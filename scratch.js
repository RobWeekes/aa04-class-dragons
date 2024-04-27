const dragon = require('./all-dragons');    // test spec calls this var 'solution'

console.log(dragon);
console.log(dragon.allDragons);
console.log(dragon.falkor);
console.log(dragon.smaug);

const { allDragons, smaug, falkor } = require('./all-dragons');
console.log(allDragons);

console.log(smaug);
console.log(falkor);
