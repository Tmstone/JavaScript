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

function Ninja (name) {

    this.name = name;
    this.health = 100;
    //private variables
    var speed = 3;
    var strength = 3;
    //showStats() - This should show the Ninja's name, strength, speed, and health.
        this.showStats = function() {
            console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed:' + speed + ', Strength: ' + strength);
            return this;
        //stats();
        }
        //kick() Kick will subtract 15 Health for each point of Strength the calling Ninja has.
        this.kick() = function(ninja) {
            const damage  = strength * 5;
            ninja.health -= damage;
            console.log(ninja.name + ' was kicked by ' + this.name + ' and lost ' + ninja.health + ' health.');
            return this;
        }
    }
    //writing methods
    //sayName() - This should log that Ninja's name to the console.
    Ninja.prototype.sayName = function(){
        console.log('My ninja name is:', this.name);
        return this;
    }   
    
    //drinkSake() - This should add +10 Health to the Ninja
    Ninja.prototype.drinkSake = function() {
        this.health += 10;
        return this;
    }
    //punch() will subtract 5 health from ninja passed in
    Ninja.prototype.punch = function(ninja) {
        ninja.health -=5 ;
        console.log(ninja.name + ' was punched by ' + this.name + 'and lost 5 points.');
        console.log()
        return this;
    }
    

const Mike = new Ninja('Mike');
Mike.sayName();
Mike.drinkSake();
Mike.showStats();

const Jake = new Ninja('Jake');
Jake.punch(Mike);
Mike.kick(Jake);
