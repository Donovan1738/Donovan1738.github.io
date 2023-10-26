const showNav = () => {
    const nav = document.getElementById("hi").classList.toggle("hide");
    const nav1 = document.getElementById("hi2").classList.toggle("hide");
    const nav2 = document.getElementById("hi3").classList.toggle("hide");
    const nav3 = document.getElementById("hi4").classList.toggle("hide");
    const nav4 = document.getElementById("hi5").classList.toggle("hide");  
};

const submitReview = (e) => {
  e.preventDefault();
  document.getElementById("results").classList.remove("hidden");

  const form = document.getElementById("form-text");
  const name = form.elements["txt-name1"].value;
  const email = form.elements["txt-email"].value;
  const product = form.elements["txt-product"].value;
  const review = form.elements["txt-review"].value;

  const resultDiv = document.getElementById("result");
  
  const section = document.createElement("section");
  resultDiv.append(section);
  const h2 = document.createElement("h2");
  section.append(h2);
  const h3 = document.createElement("h3");
  section.append(h3);
  const p = document.createElement("p"); 
  section.append(p);

  h2.textContent = `Reviewer: ${name}`;
  h3.textContent = `Product: ${product} Email:${email}`;
  p.textContent = `${review}`; 

};

window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
    document.getElementById("form-text").onsubmit = submitReview;
}

