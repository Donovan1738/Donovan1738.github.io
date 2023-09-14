// console.log("The GOAT");

// const add = (a, b) => a+b; 

// const add = (a, b) => { return a+b; }

// const square = a => a * a;
// const square = (a) => a * a;

// console.log(square(5));    

//const hello = () => console.log("Hi your the GOAT");

//hello();

// const helloSpecific = userName => console.log("Hi " + userName + " your the Goat and DANG IT GAVIN");

// helloSpecific("Donovan");

// const helloFullName = (firstName, lastName) => {
//     console.log("Hi " + firstName + " " + lastName);
//     console.log("Dang it GAVIN");
// };

// helloFullName("Donovan", "Williams");

/*Not ok to change a constant
const myName = "The GOAT";
myName = "Not Gavin"; */

const animates = () => {
    document.getElementById("square").classList.add("move-square");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " +firstName + "!");
}

window.onload = () => {
    document.getElementById("button-animate").onclick = animates;
    document.getElementById("button-show-name").onclick = displayName;
}