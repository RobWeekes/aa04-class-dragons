const Dragon = require("./dragon.js");

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
      super(name, color);
      this.evilDoings = evilDoings;     // an array
      this.nemesis = nemesis;
    }

    // INSTANCE methods
    dontInviteThemOverForDinner() {
        console.log(`${this.name} will ${this.evilDoings[0]}`);
        console.log(`${this.name} will ${this.evilDoings[1]}`);
        console.log(`${this.name} will ${this.evilDoings[2]}`);
//         return `${this.name} will ${this.evilDoings[0]}
// ${this.name} will ${this.evilDoings[1]}
// ${this.name} will ${this.evilDoings[2]}`
    }

    burnsNemesis() {
        // console.log(`${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`);
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }

    // CLASS methods

}

const drogon = new EvilDragon(
    "Drogon",
    "black-red",
    [
        "eat all your livestock",
        "burn down your castle in Westeros",
        "burn your father and brother"
    ],
    "Night King"
    );
    console.log(drogon);
    drogon.dontInviteThemOverForDinner();
    console.log(drogon.breathesFire());
    console.log(drogon.burnsNemesis());


const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
        "spit a fireball at Steve",
        "rule over all the Endermen",
        "destroy all blocks in its way"
    ],
    "Steve"
    );
    console.log(enderDragon);
    enderDragon.dontInviteThemOverForDinner();
    console.log(enderDragon.breathesFire());
    console.log(enderDragon.burnsNemesis());


module.exports = EvilDragon;
