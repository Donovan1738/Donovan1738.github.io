class Toy {
    constructor(title, price, age, rating, pic) {
        this.title = title;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get toyItem() {
        const section = document.createElement("section");
        section.classList.add("toy");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        h3.classList.add("hidden");
       

        const ul = document.createElement("p");
        // ul.classList.add("hi");
        section.append(ul);
        ul.classList.add("hidden");
        ul.append(this.listItem(this.rating));
        ul.append(this.listItem(this.price));
        ul.append(this.listItem("age: " + this.age));

        section.append(this.picture(this.pic));

        section.onmouseover = () => {
            ul.classList.remove("hidden");
            h3.classList.remove("hidden");
        }
        section.onmouseout = () => {
            ul.classList.add("hidden");
            h3.classList.add("hidden");
        }
        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    listItem(info) {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }

}

const showToys = () => {
    const toyList = document.getElementById("toy-list");
    const toys = [];
    toys.push(new Toy("Lego", "$16", 12, "4 stars", "car.jpg"));
    toys.push(new Toy("Car", "$16", 12, "3 stars", "car.jpg"));
    toys.push(new Toy("Basketball", "$16", 12, "2 stars", "car.jpg"));
    toys.push(new Toy("Lego", "$16", 12, "4 stars", "car.jpg"));
    toys.push(new Toy("Car", "$16", 12, "3 stars", "car.jpg"));
    toys.push(new Toy("Basketball", "$16", 12, "2 stars", "car.jpg"));

    toys.forEach(toy => {
        toyList.append(toy.toyItem);
    });


    /*const dog = new Dog("fred", "rotwiler", "brow", 4, "lg", "sdfsd");

    for (let i in dogs) {
        console.log(dogs[i].title);
    }*/

};

window.onload = () => {
    showToys();
}