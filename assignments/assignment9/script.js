let count = 0;

const quote = () => {
    const quoteDiv = document.getElementById("quotes");
    const section = document.createElement("section");
    quoteDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p);
    const p2 = document.createElement("p");
    section.append(p2);

    let result = document.getElementById("quotes");

    let quote = ["Only a life lived for others is a life lived worthwhile. -Albert Einstein","The successful warrior is the average man, with laser-like focus. - Bruce Lee", "Breathe. It's just a bad day, not a bad life. -Johnny Depp", "With great power comes great responsibility. -Stan Lee"];
    result.innerHTML = quote[count];
    count++;

    let nextQuote = quote[count];

    if (!nextQuote) {
        count = 0;
    }
};

const draw = () => {
    
    document.getElementById("gold").classList.add("hide");
    setInterval(red, 0);
    document.getElementById("red").classList.add("hide");
    setInterval(orange, 1000);
    document.getElementById("orange").classList.add("hide");
    setInterval(yellow, 2000);
    document.getElementById("yellow").classList.add("hide");
    setInterval(green, 3000);
    document.getElementById("green").classList.add("hide");
    setInterval(blue, 4000);
    document.getElementById("blue").classList.add("hide");
    setInterval(indigo, 5000);
    document.getElementById("indigo").classList.add("hide");
    setInterval(gold, 6000);

    clearInterval();

    function red() {
        document.getElementById("red").classList.remove("hide");
        colorRed(background = 80);
    }
    function orange() {
        document.getElementById("orange").classList.remove("hide");
        colorRed(background = 80);
    }
    function yellow() {
        document.getElementById("yellow").classList.remove("hide");
        colorRed(background = 80);
    }
    function green() {
        document.getElementById("green").classList.remove("hide");
        colorRed(background = 80);
    }
    function blue() {
        document.getElementById("blue").classList.remove("hide");
        colorRed(background = 80);
    }
    function indigo() {
        document.getElementById("indigo").classList.remove("hide");
        colorRed(background = 80);
    }
    function gold() {
        document.getElementById("gold").classList.remove("hide");
    }
}


window.onload = () => {
    document.getElementById("display-rainbow").onclick = draw; 
    setInterval(quote, 1000);
}


