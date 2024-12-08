document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
        event.target.style.color = "white";
    });
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "";
        event.target.style.color = "";
    });
});


const products = [
    { name: "Red Wine Reserve", price: 30 },
    { name: "White Wine Classic", price: 25 },
    { name: "Rose Sparkling", price: 20 },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
    `;
    productList.appendChild(productItem);
});
