/*
function Ninja (name, health) {
    var self = this;
    var speed = 3;
    var strength = 3;
    var stats = function() {
        console.log('This is a private method for', self.name);
        console.log(self);
    }
    this.name = name;
    this.health = 100;
    //writing methods
    //sayName() - This should log that Ninja's name to the console.
    this.sayName = function(){
        console.log('My ninja name is:', this.name);
    }
    //showStats() - This should show the Ninja's name, strength, speed, and health.
    this.showStats = function() {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed:' + speed + ', Strength: ' + strength);
        //stats();
    }
    //drinkSake() - This should add +10 Health to the Ninja
    this.drinkSake = function() {
        this.health += 10;
    }


}
var Mike = new ninja('Mike', 175);
Mike.sayName();
Mike.drinkSake();
Mike.showStats();
*/