const showExercise = () => {
    const ex1 = document.getElementById("Exercise1").classList.remove("hide");
    const ex2 = document.getElementById("Exercise2").classList.add("hide");
    // const border = document.getElementById("main-nav").classList.add("border");
}
const showExercise2 = () => {
    const ex2 = document.getElementById("Exercise2").classList.remove("hide");
    const ex1 = document.getElementById("Exercise1").classList.add("hide");
}

const showNav = () => {
    const nav = document.getElementById("button1").classList.toggle("hidden");
    const nav1 = document.getElementById("button2").classList.toggle("hidden");
}

const displayName = () => {
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name1").value;
    const age1 = parseInt(document.getElementById("txt-age1").value);
    const name2 = document.getElementById("txt-name2").value;
    const age2 = parseInt(document.getElementById("txt-age2").value);
    const name3 = document.getElementById("txt-name3").value;
    const age3 = parseInt(document.getElementById("txt-age3").value);

    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p)
  
    if(age1>age2 && age1>age3) {
        if(age2>age3) {
            h3.textContent = `Names Oldest to Youngest: ${name1} ${name2} ${name3}`;
            p.textContent = `Ages Oldest to Youngest: ${age1} ${age2} ${age3}`;
        }
        else {
            h3.textContent = `Names Oldest to Youngest: ${name1} ${name3} ${name2}`;
            p.textContent = `Ages Oldest to Youngest: ${age1} ${age3} ${age2}`;
        }
    }
    else if(age2>age1 && age2>age3) {
        if(age1>age3) {
            h3.textContent = `Names Oldest to Youngest: ${name2} ${name1} ${name3}`;
            p.textContent = `Ages Oldest to Youngest: ${age2} ${age1} ${age3}`;
        }
        else {
            h3.textContent = `Names Oldest to Youngest: ${name2} ${name3} ${name1}`;
            p.textContent = `Ages Oldest to Youngest: ${age2} ${age3} ${age1}`;
        }
    }
    else if (age3>age1 && age3>age2) {
        if(age1>age2) {
            h3.textContent = `Names Oldest to Youngest: ${name3} ${name1} ${name2}`;
            p.textContent = `Ages Oldest to Youngest: ${age3} ${age1} ${age2}`;
        }
        else {
            h3.textContent = `Names Oldest to Youngest: ${name3} ${name2} ${name1}`;
            p.textContent = `Ages Oldest to Youngest: ${age3} ${age2} ${age1}`;
        }
    }
    else {
        h3.textContent = `Invalid Input`;
    }
}

const funding = () => {
    const funds = parseInt(document.getElementById("txt-funds").value);
   
    if(funds >= 2500) {
        document.getElementById("rectangle").classList.add("red");
    }
    if(funds >= 5000) {
        document.getElementById("rectangle").classList.add("red2");
    }
    if(funds >= 7500) {
        document.getElementById("rectangle").classList.add("red3");
    }
    if(funds >= 10000) {
        document.getElementById("rectangle").classList.add("red4");
    }

}

window.onload = () => {
    document.getElementById("button-compare-ages").onclick = displayName;
    document.getElementById("button1").onclick = showExercise;
    document.getElementById("button2").onclick = showExercise2;
    document.getElementById("nav-toggle").onclick = showNav;
    document.getElementById("display-funds").onclick = funding;
}