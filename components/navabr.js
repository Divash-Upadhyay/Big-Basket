function navbar(){
    return`<div id="mainbox">
    <div class="box1">
        <div>
            <div class="b1p"><i class="fas fa-phone-alt"></i> 1860 123 1000</div>
        </div>
        <div>
            <div class="b1p"><i class="fas fa-map-marker-alt"></i>560004,Banglore</div>
        </div>
        <div>
            <div class="b1p">log in<i class="fas fa-chevron-down"></i>
                <div id="dd1">
                    <div><a style="text-decoration: none; color: #444444;" href="signup.html">My Account</a></div>
                    <div><a style="text-decoration: none; color: #444444;" href="cart.html">My Basket</a></div>
                    <div>My Orders</div>
                    <div>My Membership</div>
                    <div>Wallet</div>
                    <div>Ask Us</div>
                    <div>Customer Service</div>
                    <div>Log Out</div>
                </div>
            </div>
        </div>
    </div>
    <div class="box2">
        <div id="img">
            <a href="index.html"><img height="150px" width="200px" src="images/BigBasket-Logo.jpg" ></a>
        </div>
        <div id="itag">
            <input id="srch" type="search" placeholder="Search for Products.."><i class="fas fa-search fa-1x"></i>
        </div>
        <div class="bskt">
            <p><a style="text-decoration: none; color: #DA251D;" href="cart.html"><i class="fas fa-shopping-basket fa-2x"></i>My Basket</a></p>
        </div>

    </div>
    <div id="box3">
        <div class="shop">
            <div id="shp">SHOP BY CATEGORY <i class="fas fa-chevron-down"></i>
                <div id="dd2">
                    <div class="in1">
                        <div><a href="products.html">Fruits & Vegeatables</a></div>
                        <div>Foodgrains,Oil & Masala</div>
                        <div>Bakery,Cakes & Dairy</div>
                        <div>Beverages</div>
                        <div>Snacks & Branded Food</div>
                        <div>Beauty & Hygiene</div>
                        <div>Cleaning & Household</div>
                        <div>Kitchen,Garden & Pets</div>
                        <div>Eggs,Meats & Fish</div>
                        <div>Gourmet & World Food</div>
                        <div>Baby Care</div>
                        <div>View All</div>
                    </div>
                    <div class="in2">
                        <div>Fresh Vegetables</div>
                        <div>Herbs & Seasoning</div>
                        <div>Fresh Fruits</div>
                        <div>Organic Fruits And Vegetables</div>
                        <div>Cuts & Sprouts</div>
                        <div>Exotic Fruits & Veggies</div>
                        <div>Flower Bouquets,Bunches</div>
                    </div>
                    <div class="in3">
                        <div>Potato Oninon & Tomato</div>
                        <div>Cucumber & Capsicum</div>
                        <div>Leafy Vegetables</div>
                        <div>Root Vegetables</div>
                        <div>Beans,Brinjals & Okra</div>
                        <div>Cabbage & Cauliflower</div>
                        <div>Gourd,Pumppkin,Drumstick</div>
                        <div>Speciality</div>
                    </div>
                    <div class="in4">
                        <div>
                            <h5 style="color: #6CD138;">Popular Searches</h5>
                        </div>
                        <div>Vegetables</div>
                        <div>Onion</div>
                        <div>Tomato</div>
                        <div>Beans</div>
                        <div>Carrot</div>
                        <div>Vegetable</div>
                        <div>
                            <img src="/images/img2.jpg" alt="">
                        </div>
                    </div>
                    <div class="in5">
                        <div>
                            <img src="/images/img3.jpg" alt="" height="397px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offers">
            <p><i class="fas fa-thumbtack"></i>OFFERS</p>
        </div>
        <div class="spec">
            <p><i class="fas fa-warehouse"></i>BB SPECIALITY</p>
        </div>
    </div>
</div>
`
}

export default navbar