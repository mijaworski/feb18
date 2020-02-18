//"use strict";

//function greeting(firstName) {
//let firstName = `Johny`;
//  return (`Hello ${firstName}`);
//}

//console.log(greeting("any name"))

//function presented by Peter:
//function sayHello(firstName) {
//  const value = `Hello ${firstName}`;
//console.log = `Hello ${firstName}`;
//return = `Hello ${firstName}`;
//console.log(value);
//return value;
// }

//function getColorString() {
//let redo = 0;
//let greeno = 0;
//  let blueo = 0;
//
//  return (`rgb(${redo},${greeno},${blueo})`);
//
//}

//function randomColor() {
//create the initial array randomly
//  for (let i = 0; i <= 255; i++) {
//    myArray[i] = getColorValues();
//}
//console.log(myArray);
//}

"use strict";


function randomColor() {
    let a = (Math.floor(Math.random() * 255) + 1);
    let b = (Math.floor(Math.random() * 255) + 1);
    let c = (Math.floor(Math.random() * 255) + 1);
    return getColorString(a, b, c);
}


function getColorString(a, b, c) {
    //let red = a;
    //let green = b;
    //let blue = c;

    return (`rgb(${a},${b},${c})`)

}

function randomBackgroud() {
    document.querySelector("body").style.backgroundColor = randomColor();
}

randomBackgroud();

//function getColorString() {
//  let red = (Math.floor(Math.random() * 255))
//let green = (Math.floor(Math.random() * 255))
//let blue = (Math.floor(Math.random() * 255))

//return `rgb(${red},${green},${blue})`
//}