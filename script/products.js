var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); 
}


// products


var productsList=[
    {
        type:"veggie",
        imageurl:"prdctimages/1/onion.jpg",
        Name:"Onion",
        price:191,
        qty:5000,
        discount:32,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/tomato.jpg",
        Name:"Tomato-Local",
        price:12.12,
        qty:500,
        discount:26,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/potato.jpg",
        Name:"Potato",
        price:28.28,
        qty:1000,
        discount:29,
        
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/tomato hybrid.jpg",
        Name:"Tomato-Hybrid",
        price:14.14,
        qty:1000,
        discount:25,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/ladyfingure.jpg",
        Name:"Lady-Finger",
        price:24.24,
       qty:500,
        discount:35,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/carrot.jpg",
        Name:"Carrot-orange",
        price:49.49,
        qty:500,
        discount:27,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/cucunber.jpg",
        Name:"Cucumber",
        price:9.09,
        qty:500,
        discount:35,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/cori leaves.jpg",
        Name:"Coriander Leaves",
        price:10.10,
        qty:250,
        discount:46,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/mushrooms.jpg",
        Name:"Mushroom",
        price:44.44,
        qty:200,
        discount:39,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/palak.jpg",
        Name:"Palak",
        price:22.50,
        qty:500,
        discount:20,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/Capsicum.jpg",
        Name:"Capsicum",
        price:37.37,
        qty:500,
        discount:25,
    },
    {
        type:"veggie",
        imageurl:"prdctimages/1/beans.jpg",
        Name:"Beans",
        price:32.32,
        qty:500,
        discount:22,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/orange.jpg",
        Name:"Orange",
        price:89,
        qty:1000,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/kiwi.jpg",
        Name:"Kiwi",
        price:55.55,
        qty:300,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/watermelon.jpg",
        Name:"Watermelon",
        price:54.54,
        qty:1000,
        discount:36,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/straw.jpg",
        Name:"Strawberry",
        price:52,
        qty:200,
        discount:35,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/pomi.jpg",
        Name:"Pomegranate",
        price:135.34,
        qty:1000,
        discount:22,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/mosambi.jpg",
        Name:"Mosambi",
        price:165,
        qty:3000,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/guava.jpg",
        Name:"Guava",
        price:36,
        qty:1000,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/drgn.jpg",
        Name:"Dragon Fruits",
        price:114.13,
        qty:350,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/figs.jpg",
        Name:"Fresh Figs",
        price:40,
        qty:250,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/grapes.jpg",
        Name:"Grapes Black Seedless",
        price:86,
        qty:2000,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/muskmelon.jpg",
        Name:"Muskmelon",
        price:52,
        qty:1000,
        discount:20,
    },
    {
        type:"fruits",
        imageurl:"prdctimages/1/sug.jpg",
        Name:"Sugar Cane",
        price:7,
        qty:1000,
        discount:20,
    },
]

let disp=document.getElementById("product")
displayProducts(productsList);
function displayProducts(productsList){
    disp.innerHTML=""
    productsList.map(function (item,index) {
        
        let div=document.createElement("div");
        div.setAttribute("id","ddd11")
       
        
        let img=document.createElement("img");
        img.src=item.imageurl;
        img.addEventListener("click",function(){
            divclick(item);
        })

        let name=document.createElement("p")
        name.textContent=item.Name;
        name.style.fontSize="14px";
        name.style.color="#009966"


        let quantity=document.createElement("p");
        quantity.textContent= "Quantity:"+item.qty+"g"

        let price=document.createElement("h4")
        price.textContent="Rs:"+item.price;

        let dis=document.createElement("p")
        dis.textContent="Get "+item.discount+"% off"

        let btn=document.createElement("button")
        btn.textContent="add To Cart"
        btn.style.width="100px"
        btn.style.borderRadius="5px"
        btn.style.backgroundColor="#F9DB79"
        btn.addEventListener("click",function(){
            addtoCart(item);
        })

        

        div.append(dis,img,name,quantity,price,btn)
        disp.append(div);
    })
}




// add to cart

var cartdetails=JSON.parse(localStorage.getItem("cartData")) || [];

function addtoCart(item){
    var cartList={
        img:item.imageurl,
        name:item.Name,
        price:item.price,
        qty:item.qty,
        discount:item.discount,
    }

    if(cartdetails.length === 0){
        cartList.qty++;
        cartdetails.push(cartList);
    }
    duplicateItem();
 function duplicateItem(){
   for(var i = 0 ; i < cartdetails.length; i++){
   if(cartdetails[i].name === cartList.name){
    return  cartdetails[i].qty*2;
   }

 }
 cartList.qty = 1;
 return  cartdetails.push(cartList);
 }


 localStorage.setItem("cartData",JSON.stringify(cartdetails));
}

function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if(selected == "high") {
        productsList = productsList.sort(function (a, b){
            return b.price - a.price;
        });
    }
    else if(selected == "low") {
        productsList = productsList.sort(function (a, b){
            return a.price - b.price;
        });
    }
    
    console.log(productsList);
    displayProducts(productsList);
}


function SearchBytype(){
    var select=document.getElementById("Sort_by_type").value;
}


// on div click

function divclick(item){
    localStorage.setItem("nextpageData",JSON.stringify(item));
    window.location.href="productDetails.html"
}

