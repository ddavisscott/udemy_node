var name = 'Jane';//this variable is not effected

(function(lastname){//immidiately invoked function with argument
var name = 'Scott';
console.log(name);
console.log(lastname);
}('Davis'));//invoked with an argument

console.log(name);
