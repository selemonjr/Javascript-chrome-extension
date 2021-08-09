//document.getElementById("count-el").innerText = 6;
// let firstBatch = 5;
// let secondBatch = 7
// let count = firstBatch + secondBatch;
// console.log(count);
//if you want to comment faster use ctrl + k + c;
// let myAge = 19;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

//**incrementing** */
//  let count = 5;
// count += 1;
//  console.log(count);
// let bonusPoints = 50;
// bonusPoints +=50;
// bonusPoints -=75;
// bonusPoints +=45;
// console.log(bonusPoints);

//**functions**
// function countDown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countDown();
// function call() {
//     console.log(42);
// }
// call();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function sum() {
//     let add = lap1 + lap2 + lap3;
//     console.log(add);
// }
// sum()
// let lap = 0;
// function increment() {
//     lap += 1;
//     console.log(lap);
    
// }
// increment();
// increment();
// increment();

//*******Functionality that make the project interactive */
// let count = 0;
//  let counter = document.getElementById("count-el");
// function increment() {
//     count +=1;
//     counter.innerText = count;
// };
// function save() {
//     console.log(count);
// }

//*********strings********************* */
// let username = "per";
// let message = "You have three new notifications";
// console.log(message + " " + username + "!");

// let messageToUser = message + " " + username + "!";
// console.log(messageToUser);
// let name = "Selemon Brahanu";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + "" + name;
// console.log(myGreeting)
// console.log(4 + 5) //9;
// console.log("12" + "4") //124
// console.log("5" + 1) //51
// console.log(100 + "100") //100100
// let welcome_El = document.getElementById("welcome_el");
// let name = "Selemon Brahanu ";
// name +="👋"
// let greeting = "Welcome to our page " + name;
// welcome_El.innerText = greeting;
let saveEl = document.getElementById("save_el");
let count = 0;
let counter = document.getElementById("count-el");
function increment() {
    count +=1;
    counter.innerText = count;
};
function save() {
    let countString = " " + count + " - ";
    saveEl.innerText += countString;
    counter.innerText = 0;
    count = 0;
}
