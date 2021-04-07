var helloWorld = "Hello World";
var user = {
    name: "Hayes",
    id: 0
};
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
// OK, return value of 'getValue' is not checked
var str = getValue("myString");
var looselyTyped = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
function warnUser() {
    console.log("This is my warning message");
}
