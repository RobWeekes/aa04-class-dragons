class Dragon {
  constructor(name, color) {
      this.name = name;
      this.color = color;
  }

  // INSTANCE METHODS
  breathesFire() {
      return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  // STATIC METHODS
  static getDragons(...dragons) {
      return dragons.map((dragon) => dragon.name);
  }
}


// let puff = new Dragon('Puff', 'green');
// // console.log(puff);
// let sparky = new Dragon('Sparky', 'red');
// // console.log(sparky);

// let snapper = {   // old way, manually created object
//   name: 'Snapper', color: 'red'
// }
// console.log(snapper);

// console.log(puff.breathesFire())
// console.log(sparky.breathesFire())

// console.log(Dragon.getDragons(puff, sparky, snapper));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
