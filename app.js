var name = 'Jane';

(function(lastname){
var name = 'Scott';
console.log(name);
console.log(lastname);
}('Davis'));// immidietly invoke function impression

console.log(name);
