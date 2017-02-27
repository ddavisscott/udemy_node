//function statement

function greet(){

    console.log('hi');
}


greet();

//functions a re first class


function logGreeting (fn){

    fn();
}

logGreeting(greet);


//function expression

var greetMe = function () {

    console.log('hi Scott');
}

greetMe();
//it;s first class
logGreeting(greetMe);
//use a function expression on the fly
logGreeting(function(){
console.log('Hello Scott!');
});