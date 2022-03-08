/*
create a class Sensei that inherits from the Ninja class

add an attribute: wisdom - default to 10

create a method: speakWisdom()
*/
class Ninja {
    constructor(nameInput){
        this.name = nameInput;
        this.health = 1;
        this.speed = 3;
        this.strenght = 3;
    }
    sayName(){
        console.log(`name ${this.name}`)
    }
    showStats(){
        console.log(`name ${this.name} \n strenght ${this.strenght} \n speed ${this.speed} \n health ${this.health}`)
    }
    drinkShake(){
        this.health += 10;
    }
}


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkShake();
// ninja1.showStats();

// console.log(ninja1)

class Sensei extends Ninja{
    constructor(nameInput){
        super(nameInput)
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strenght = 10;
    }
    speakWisdom(){
        console.log(`Wisdom = ${this.wisdom}`)
        this.wisdom += 10;
        console.log(`Ones strenght maybe ${this.strenght} but ones wisdom is ${this.wisdom}`)
        super.drinkShake()
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();