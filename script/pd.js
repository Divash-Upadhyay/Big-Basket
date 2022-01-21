var data=JSON.parse(localStorage.getItem("nextpageData"));


var div=document.getElementById("dd2a");

let img=document.createElement("img")
img.src=data.imageurl;
img.style.width="90%";

div.append(img);


let div2=document.getElementById("dd2b")

let divv=document.createElement("div");
divv.id="indiv"

let nam=document.createElement("p");
nam.textContent=data.Name;
nam.style.fontSize="27px"
nam.style.textAlign="center"
nam.style.color="#888888"

let qty=document.createElement("p");
qty.textContent="Quantity:"+data.qty;
qty.style.fontSize="30px"

let price=document.createElement("p")
price.textContent="Price  Rs:"+data.price;
price.style.fontSize="25px"

let dscnt=document.createElement("p")
dscnt.textContent="You Save "+data.discount+"% in this Deal";
dscnt.style.color="#BA5279"

let btn=document.createElement("button")
btn.textContent="Add to Cart"
btn.style.width="200px"
btn.style.height="50px"
btn.style.backgroundColor="#84C225"
btn.addEventListener("click",function(){
    addtoCart(data)
})


divv.append(nam,qty,price,dscnt,btn)
div2.append(divv)

var cartList = JSON.parse(localStorage.getItem("cartData")) || [];

function addtoCart(data){

    var cartItems={
        name:data.Name,
        img:data.imageurl,
        qty:data.qty,
        price:data.price,
        discount:data.discount,
    }
    cartList.push(cartItems);
    localStorage.setItem("cartData", JSON.stringify(cartList));

}