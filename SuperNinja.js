class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
  showStats() {
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
  }
  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa", 7);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.name = name;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    console.log("Words of wisdom: What up?");
    super.drinkSake();
  }
  showStats() {
    super.showStats();
  }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();