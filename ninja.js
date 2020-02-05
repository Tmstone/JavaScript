function ninja (name, health) {
    var self = this;
    var speed = 3;
    var strength = 3;
    var stats = function() {
        console.log('This is a private method for ', self.name);
        console.log(self);
    }
    this.name = name;
    this.health = 100;
    //writing methods
    //sayName() - This should log that Ninja's name to the console.
    this.sayName = function(){
        console.log('Ninja name: ', this.name);
    }
    //showStats() - This should show the Ninja's name, strength, speed, and health.
    this.showStats = function() {
        stats();
    }
    //drinkSake() - This should add +10 Health to the Ninja
    this.drinkSake() = function() {
        this.health += 10;
    }


}
var Mike = new ninja('Mike', 175);
Mike.sayName();
Mike.drinkSake();
Mike.showStats();
/* 
name
health
speed (private)
strength (private)
Speed and strength should be 3 by default. Health should be 100 by default.

Ninja should have the following methods:

sayName() - This should log that Ninja's name to the console.
showStats() - This should show the Ninja's name, strength, speed, and health.
drinkSake() - This should add +10 Health to the Ninja
*/ 