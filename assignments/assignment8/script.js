var background = 0;
const funding = () => {
    const funds = parseInt(document.getElementById("txt-funds").value);
    
    const update = setInterval(() => {
    for (let i = 0; i <= 10; i++) {
        const li =  document.getElementById("rectangle").classList.add("red");
        colorFill(background = funds/100);
        colorFIll2(background = 100-(funds/100));
    }
    }, 1000);

}

const colorFill = (fill) => {
    document.documentElement.style.setProperty("--l", fill+"%");
}

const colorFIll2 =(fill2) => {
    document.documentElement.style.setProperty("--r", fill2+"%");
}





var margin = 0;
const dude = () => {

    const update = setInterval(() => {
    for(let i=0; i <= 10; i++) {
       moveRight(margin += 1);       
    }

    if (margin >= 200) {
             document.getElementById("run").classList.add("hide");
             document.getElementById("walk").classList.remove("hide");
             for(let i=0; i <= 10; i++) {
                moveRight(margin += 1);   
                if(margin >= 500)
                clearInterval(update);        
             }
             }
                }, 1000);
}

const moveRight = (size) => {
    document.getElementById("run").style.setProperty("--x", size + "px");
    document.getElementById("walk").style.setProperty("--x", size + "px");
    
}

window.onload = () => {
    document.getElementById("display-funds").onclick = funding;
    document.getElementById("button-walk").onclick = dude;
}