// let str = "This is an amazing sentence.";
// let words = str.split(" ");
const quote = () => {
    var str = ["Dang it gavin","Ayooooooooooooo", "whats up", "i dont know"];
    // var words = str.split("");
    // let str2 = ["Dang igavin"]
    // let str3 = ["Dang it gavin"]
    
    // const resultDiv = document.getElementById("quotes");
    // const section = document.createElement("section");
    // resultDiv.append(section);
    // const h3 = document.createElement("h3");
    // section.append(h3);
    // const p = document.createElement("p");
    // section.append(p);
    // const p2 = document.createElement("p");
    // section.append(p2);
    
    var result = document.getElementById("quotes");
    var result2 = document.getElementById("quotes");
    
    
    
    const update = setInterval(() => {

    //     for (let i in str) {
    //     // str.forEach(([]) => {
    //         result.innerHTML += str[i];
    //     // }); 
    // }
    for (let i in str) {
        if(i = 0) {
            result.innerHTML = str[0];
        }
        if(i=5) {
            result.replaceWith(result2) = str[1];
        }
        
        // let i = 0;
        // i++;
        // if (i >= str.length) {
        //    i==0;
        // }
        // if (i = 1) {
        //     p2.textContent = str[0]; 
        // } 
        // if( i = 2) {
        //     p2.textContent = str[1]; 
        }
                           
    
    }, 5);
    

}

const draw = () => {
    console.log("test");
}


window.onload = () => {
    quote();
    document.getElementById("display-rainbow").onclick = draw; 
}


