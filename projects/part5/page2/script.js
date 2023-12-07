const showNav = () => {
    const nav = document.getElementById("hi").classList.toggle("hide");
    const nav1 = document.getElementById("hi2").classList.toggle("hide");
    const nav2 = document.getElementById("hi3").classList.toggle("hide");
    const nav3 = document.getElementById("hi4").classList.toggle("hide");
    const nav4 = document.getElementById("hi5").classList.toggle("hide");
}

const getProducts = async () => {
    try {
        return (await fetch("https://node-final-t9x3.onrender.com/api/products")).json();
    } catch(error) {
        console.log(error);
    }
}

const showProducts = async () => {
    let products = await getProducts();
    let productsDiv = document.getElementById("product-list");
    productsDiv.innerHTML = "";
    products.forEach((product) => {
        const section = document.createElement("section");
        section.classList.add("product");
        productsDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = product.name;
        a.append(h3);

        if(product.img) {
            const img = document.createElement("img");
            section.append(img);
            img.src = "https://node-final-t9x3.onrender.com/" + product.img;
        }
        

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(product);
        };
    });
};

const displayDetails = (product) => {
    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = product.name;
    productDetails.append(h3);

    const dLink = document.createElement("a");
    dLink.innerHTML = "&#x2715;"
    productDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;"
    productDetails.append(eLink);
    eLink.id = "edit-link";
    
    const p = document.createElement("p");
    productDetails.append(p);
    p.innerHTML = "<b>Product Desciption:</b> " + product.description;

    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("add-edit-title").innerHTML = "Edit Product";
    }

    dLink.onclick = (e) => {
        e.preventDefault();
        deleteProduct(product.id);
    }

    populateEditForm(product);
};

async function deleteProduct(_id) {
    // console.log(_id);
    let response = await fetch(`https://node-final-t9x3.onrender.com/api/products/${_id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    if (response.status != 200) {
        console.log("error deleting");
        return;
    }

    let result = await response.json();
    showProducts();
    document.getElementById("product-details").innerHTML = "";
    resetForm();
};

const populateEditForm = (product) => {
    const form = document.getElementById("add-edit-product-form");
    form._id.value = product.id;
    form.name.value = product.name;
    form.description.value = product.description;
};


const addEditProduct = async (e) => {
    e.preventDefault();

    const form = document.getElementById("add-edit-product-form");
    const formData = new FormData(form);
    

    let response;
    //add new instrument
    if(form._id.value == -1) {
        formData.delete("_id");
        // console.log(...formData);

        response = await fetch("https://node-final-t9x3.onrender.com/api/products", {
            method: "POST",
            body: formData,
        });
    } else {
        // existing instrument
        response = await fetch(`https://node-final-t9x3.onrender.com/api/products/${form._id.value}`, {
            method: "PUT",
            body: formData,
        });
        // console.log("edit mode");
        // console.log(...formData);
    }

    if(response.status != 200) {
        console.log("Error contacting server");
        return;
    }
    let result = await response.json();
   
    //edit mode
    if (form._id.value != -1) {
        const product = await getProduct(form._id.value);
        displayDetails(product);
    };

    document.querySelector(".dialog").classList.add("transparent");
    resetForm();
    showProducts();
};

const getProduct = async (_id) => {
    let response = await fetch(
        `https://node-final-t9x3.onrender.com/api/products/${_id}`
    );
    if (response.status != 200) {
        console.log("Error receiving product");
        return;
    }
    return await response.json();
}

const resetForm = () => {
    const form = document.getElementById("add-edit-product-form");
    form.reset();
    form._id ="-1";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add A New Product";
    resetForm();
};

window.onload = () => {
    showProducts();
    document.getElementById("nav-toggle").onclick = showNav;
    document.getElementById("add-edit-product-form").onsubmit = addEditProduct;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };
}
