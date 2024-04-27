// Your code here
const Dragon = require("./dragon.js");

let val = 0;
class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    // let goals = lifeGoals.map((goal) => `${goal}`);
    // return `${this.name} likes to ${goals}`;
    // console.log(`${this.name} likes to ${lifeGoals}`);
    console.log(`${this.name} likes to ${this.lifeGoals[0]}`);
    console.log(`${this.name} likes to ${this.lifeGoals[1]}`);
    console.log(`${this.name} likes to ${this.lifeGoals[2]}`);
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}

//examples
const puff = new FriendlyDragon(
  "Puff",
  "green",
  ["live by the sea", "frolick in the autumn mist", "help small children"],
  "Jackie Paper"
);
console.log(puff);
console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
puff.hasLifeGoals();
console.log(puff.helpsPeople());

module.exports = FriendlyDragon;
