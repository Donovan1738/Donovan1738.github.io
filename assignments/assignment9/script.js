let count = 0;

const quote = () => {
    const resultDiv = document.getElementById("quotes");
    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p);
    const p2 = document.createElement("p");
    section.append(p2);

    var result = document.getElementById("quotes");

    var str = ["Only a life lived for others is a life lived worthwhile. -Albert Einstein","The successful warrior is the average man, with laser-like focus. - Bruce Lee", "Breathe. It's just a bad day, not a bad life. -Johnny Depp", "With great power comes great responsibility. -Stan Lee"];
    result.innerHTML = str[count];
    count++;

    
    let nextQuote = str[count];

    if (!nextQuote) {
        count = 0;
    }
};

const draw = () => {
    
    document.getElementById("gold").classList.add("hidden");
    setInterval(myRainbow, 0);
    document.getElementById("red").classList.add("hidden");
    setInterval(myOrange, 1000);
    document.getElementById("orange").classList.add("hidden");
    setInterval(myYellow, 2000);
    document.getElementById("yellow").classList.add("hidden");
    setInterval(myGreen, 3000);
    document.getElementById("green").classList.add("hidden");
    setInterval(myBlue, 4000);
    document.getElementById("blue").classList.add("hidden");
    setInterval(myIndigo, 5000);
    document.getElementById("indigo").classList.add("hidden");
    setInterval(myGold, 6001);

    clearInterval();

    function myRainbow() {
        document.getElementById("red").classList.remove("hidden");
        colorRed(background = 80);
    }
    function myOrange() {
        document.getElementById("orange").classList.remove("hidden");
        colorRed(background = 80);
    }
    function myYellow() {
        document.getElementById("yellow").classList.remove("hidden");
        colorRed(background = 80);
    }
    function myGreen() {
        document.getElementById("green").classList.remove("hidden");
        colorRed(background = 80);
    }
    function myBlue() {
        document.getElementById("blue").classList.remove("hidden");
        colorRed(background = 80);
    }
    function myIndigo() {
        document.getElementById("indigo").classList.remove("hidden");
        colorRed(background = 80);
    }
    function myGold() {
        document.getElementById("gold").classList.remove("hidden");
    }
}


window.onload = () => {
    document.getElementById("display-rainbow").onclick = draw; 
    setInterval(quote, 1000);
}


