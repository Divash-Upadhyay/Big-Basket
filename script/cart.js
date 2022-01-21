var cart = JSON.parse(localStorage.getItem("cartData"));
console.log(cart);
displayProductList(cart);

function displayProductList(productsList) {
    document.getElementById("cart").textContent = "";
    productsList.map(function (item, index) {
        var imageDiv = document.createElement("div");
        imageDiv.setAttribute("id", "imageDiv")

        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        var imageurl = document.createElement("img");
        imageurl.setAttribute("src", item.img);
        imageurl.setAttribute("id", "imageDivv")

        var nameHead = document.createElement("h1");
        nameHead.setAttribute("id", "p_name");
        nameHead.textContent = item.name;

        var rating = document.createElement("h2");
        rating.setAttribute("id", "p_rating");
        rating.textContent ="flat "+item.discount+"%off";

        var price = document.createElement("h3");
        price.setAttribute("id", "priceTag")
        price.textContent = "₹" + item.price;

        var remove = document.createElement("button")
        remove.addEventListener("click", function () {
            removeItem(index);
        })
        remove.setAttribute("id", "btn");
        remove.textContent = "Remove From Cart";

        var line = document.createElement("hr");

        newDiv.append(nameHead, rating, price, remove);
        imageDiv.append(imageurl, newDiv, line);
        document.getElementById("cart").append(imageDiv);
    });
}
function removeItem(index) {
    cart.splice(index, 1);
    console.log(cart);
    localStorage.setItem("cartData", JSON.stringify(cart));
    displayProductList(cart);
    window.location.reload();
}

var total = cart.reduce(function (acc, cv) {

    return acc + Number(cv.price);
}, 0);
document.querySelector("#payment").textContent = "₹" + total.toFixed(2);
