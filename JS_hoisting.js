// JavaScript Hoisting Predictions

//let is not hoisted
console.log(example); // logs undefined
let example = "I'm the example!";
//Reference error

//1
console.log(hello);   //var hello                                
var hello = 'world'; 
//undefined

//2
var needle = 'haystack'; 
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
/*
var needle
test()
function test
console log magnet
*/

//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
/*var brendan
super cool
function print not called
correct
*/
//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
/*
var food
function 
half-chicken
gone *
undefined
*/

//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
/*
mean is undefined
mean is not a function
*/

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
/* 
var genre
disco
rock
r&b

rock r&b disco
*/
//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
/*
reference error dojo
variable can be defined without var
san jose, seattle, burbank
*/
//8 Bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
/*
Key value pair
Type error
*/
