function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

console.log(myVar); // here myvar is not defined , because above myvar is inside 
                   // the function and its called local scope