/*
The functionality that $Dojo should have:

The ability to click on an HTML element with a specific id.
The ability to hover on an HTML element with a specific id.
Make sure you wrap your code in an immediate function

$Dojo should be a function that returns an object (an HTML element object)
The object returned by the $Dojo function should have 2 added methods “click” and “hover”
The click method that you attach to the object returned by the $Dojo function should take in 1 parameter which is a callback that gets run on that event.
The hover method that you attach to the object returned by the $Dojo function should take in 2 parameters (what happens when you hover in and what happens when you hover out)
*/

function $Dojo(id){
    this.myID = document.getElementById(id);
    this.click = function(callback) {
        this.myID.addEventListener('click', callback);
    };
    this.hover = function(hoverin, hoverout) {
        this.myID.addEventListener("mouseover", hoverin);
        this.myID.addEventListener("mouseout", hoverout);
    }
    return this
}
/*
Advanced 
const $Dojo = function(id) {
    return(function($dojo){
        $dojo.myID = document.getElementById(id);
        $dojo.click = function(callback) {
            this.myID.addEventListener("click", callback);
        };
        $dojo.hover = function(hoverin, hoverout) {
            this.myID.addEventListener(mouseover, hoverin);
            this.myID.addEventListener(mouseout, hoverout);
        }
        return $dojo;
    })({});
}
*/
$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });
