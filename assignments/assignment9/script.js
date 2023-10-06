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

    var str = ["Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that. -Martin Luther King Jr.","The successful warrior is the average man, with laser-like focus. - Bruce Lee", "The only thing we have to fear is fear itself. -Franklin D. Roosevelt", "Try not to become a man of success. Rather become a man of value. -Albert Einstein", "With great power comes great responsibility. -Stan Lee"];
    result.innerHTML = str[count];
    count++;

    
    let nextQuote = str[count];

    if (!nextQuote) {
        count = 0;
    }
};

const draw = () => {
    console.log("test");
}


window.onload = () => {
    document.getElementById("display-rainbow").onclick = draw; 
    setInterval(quote, 1000);
}


