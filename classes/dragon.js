

class Dragon {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    // INSTANCE methods
    breathesFire() {
        return `${this.name} breathes fire everywhere! BURN!!!!`
    }

    // CLASS methods
    static getDragons(...dragons) {
        // let dragonArr = ...dragons;
        console.log(dragons);

        let dragonNames = dragons.map((dragon) => dragon.name);
        console.log(dragonNames);
        return dragonNames;
    }
}





// examples
const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());

console.log(Dragon.getDragons(puff, toothless));  // [ 'Puff', 'Toothless' ]

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
