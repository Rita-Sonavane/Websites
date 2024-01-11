// Product Design
// By: https://codepen.io/virgilpana/pen/RNYQwB

// - - - - - Main Variables  - - - - - //

// Products Data
let productsDB = [
    {
        id: 1,
        imgSrc: 'https://e.top4top.io/p_1925fb9g01.jpg',
        title: "Backpack",
        price: 39,
        size: "Large",
        color: "#000",
        qty: 0,
        isLiked: false,
        cost: 0
    },
    {
        id: 2,
        imgSrc: 'https://f.top4top.io/p_1925dzmty2.jpg',
        title: "Chair",
        price: 55,
        size: "Medium",
        color: "#000",
        qty: 0,
        isLiked: false,
        cost: 0
    },
    {
        id: 3,
        imgSrc: 'https://g.top4top.io/p_19256ma7c3.jpg',
        title: "Headset",
        price: 25,
        size: "Small",
        color: "#000",
        qty: 0,
        isLiked: false,
        cost: 0
    },
    {
        id: 4,
        imgSrc: 'https://h.top4top.io/p_19252cb0k4.jpg',
        title: "Shoes",
        price: 15,
        size: "Samll",
        color: "#000",
        qty: 0,
        isLiked: false,
        cost: 0
    },
    {
        id: 5,
        imgSrc: 'https://i.top4top.io/p_1925yf61w5.jpg',
        title: "SweatShirt",
        price: 44,
        size: "Large",
        color: "#000",
        qty: 0,
        isLiked: false,
        cost: 0
    },
    {
        id: 6,
        imgSrc: 'https://j.top4top.io/p_1925wl82q6.jpg',
        title: "Watch",
        price: 70,
        size: "Medium",
        color: "gray",
        qty: 0,
        isLiked: false,
        cost: 0
    }
];

// Get All The Products Data From Local Storage
let productsStorage =
    // If The In products Data Is Existed
    JSON.parse(localStorage.getItem('products'))
        // Get The Data
        ? JSON.parse(localStorage.getItem('products'))
        // Else Return productsDB
        : productsDB;

// Set The Products Data In The LocalStorage
localStorage.setItem('products', JSON.stringify(productsStorage));

// Get All In Cart Data From Local Storage
let inCartProductsData =
    // If The InCart Data Is Existed
    JSON.parse(localStorage.getItem("InCartProducts"))
        // Get The Data
        ? JSON.parse(localStorage.getItem("InCartProducts"))
        // Else Return []
        : [];

// Select The Conatiner 
let conatiner = document.querySelector('.conatiner');

// Select Header Of The Page
let headerDom = document.querySelector('header');

// Select Cart Icon Button
let cartBtn = document.querySelector('.header-cart');

// Select Products Area 
let productsArea = document.querySelector('.products-area');

// Select The Input Search 
let inputSearchDom = document.querySelector('.inputSearch');

// Select The Input Search 
let alarmSearch = document.querySelector('.noSearchAlarm');

// Select Primary Color Area
let primaryArea = document.querySelector('.primary-area');

// Select Primary Color Button
let showPrimaryBtn = document.querySelector('.show-PrimaryBox-Btn');

// Select All The Colors Boxs [ Spans ]
let primaryColorsBoxSpans = document.querySelectorAll('.primary-colors-box span');

// - - - - - Main Cart Variables - - - - - //

// Select Cart Conatiner
let cartConatiner = document.querySelector('.cart-container');

// Select Close Icon Button
let closeCartBtn = document.querySelector('.closeCart-btn');

// Select In Cart Area
let inCartArea = document.querySelector('.inCart-area');

// Select Cart Badge Lenght
let badgeCartLength = document.querySelector('.badge > span');

// Select No Products Alarm Box
let noProductBox = document.querySelector('.noProductsInCart');

// Select The Total Price Box
let totalPriceBoxDom = document.querySelector('.totalPrice-box');

// Select The Checkout Button
let checkoutBtn = document.querySelector('.checkout-btn');

// - - - - - Main Favorites Variables - - - - - //

// Select Favorites Conatiner
let favoritesConatiner = document.querySelector('.favorites-container');

// Select No Products Alarm Box
let noFavoritesBox = document.querySelector('.noFavorites');

// Select In Favorites Area
let inFavoritesArea = document.querySelector('.inFavorites-area');

// Select Favorites Icon Button
let favoritetBtn = document.querySelector('.header-favoriet');

// Select Close Icon Button
let closeFavoritesBtn = document.querySelector('.closeFavorites-btn');

// Select Cart Badge Lenght
let badgeFavoritesLength = document.querySelector('.favbadge > span');

// Variables For Functions Expressions 
let drawProducts;          // Draw Products Function
let drawIncartProducts;    // Draw In Cart Products Function
let drawfavoritesProducts; // Draw Favorites Products Function
let setTotalPrice;         // For Set The Total Price Function
let setPrimaryColor;       // For Set The Primary Color Function

// - - - - - Events - - - - - //



// When The Value Of An Input Element Has Been Changed. 
inputSearchDom.addEventListener('input', searchToProduct);


// - - - - - Functions - - - - - //

// Function Draw Products
(drawProducts = function (products = []) {
    // Get The In Cart Products Data
    let inCartProductsData =
        // If The InCart Data Is Existed
        JSON.parse(localStorage.getItem("InCartProducts"))
            // Get The Data
            ? JSON.parse(localStorage.getItem("InCartProducts"))
            // Else Return []
            : [];

    // Loop On ALL Products 
    let productsBoxs = products.map(item => {
        // Return For Me The Product
        return `
      <div class="product-box">
        <!-- Favoriet Box -->
        <div class="product-favorite">
          <i onclick="addToFavorites(${item.id})" class='bx bx-heart'
          style="color: ${item.isLiked === true ? 'red' : '#1e1e1e'}"
          ></i>
        </div>
        <div class="product-image">
          <img src="${item.imgSrc}" alt="Product Image">
        </div>
        <!-- Action Box -->
        <div class="action-box">
          <button onclick="addToCart(${item.id})">Add To <i class='bx bx-cart bx-tada'></i></button>
        </div>
        <!-- Product Info -->
        <div class="product-info">
          <!-- Info Head [ Title & Price ] -->
          <div class="info-head">
            <span class="title">${item.title}</span>
            <span class="price">$${item.price}</span>
          </div>
          <!-- Description Info -->
          <div class="desc-info">
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <!-- Details Info [ Size & Color ] -->
          <div class="deatils-info">
            <div class="size-info">
              <span class="size-title">Size</span>
              <div class="size-type">${item.size}</div>
            </div>
            <div class="color-info">
              <span class="color-title">Color</span>
              <div class="color-type" style="background-color: ${item.color};"></div>
            </div>
          </div>
        </div>
      </div>
      `
    });

    // Append The Loop Data Inside The [ Products Area ]
    productsArea.innerHTML = productsBoxs.join(''); // <-- The Join('') Function For Clear All The [ ' ]

    // Set The inCartProductsData length Inside Product Badge Length
    badgeCartLength.innerHTML = inCartProductsData.length;

})(JSON.parse(localStorage.getItem('products')) || products); // Draw The Products Storage Or The Sended Products

// Function Open Window 
function openWindow(targetElement) {
    // Toggle Class [ Open ] On The Target Element
    targetElement.classList.toggle('open');
    // Toggle Class [ Hide ] On The Container
    conatiner.classList.toggle('hide')
};

// Function Close Window 
function closeWindow(targetElement) {
    // Remove Class [ Open ] From The Target Element
    targetElement.classList.remove('open');
    // Remove Class [ Hide ] From The Container
    conatiner.classList.remove('hide')
};






// Function Search To Product
function searchToProduct() {
    // Get All The Products Data
    let products =
        // If The Products Is Existed
        JSON.parse(localStorage.getItem('products')) ?
            // Get The Data
            JSON.parse(localStorage.getItem('products'))
            // Else Return The [ productsDB ]
            : productsDB;

    // Loop For All The Product Check If The Product Title Is EquLe The Input Search
    let choseenProduct = products.filter(item => item.title.toLowerCase().indexOf(inputSearchDom.value.toLowerCase()) !== -1);

    // Here Check If The [ choseenProduct ] Is Not Found Anything Or The Product Name Is Not Existed
    if (choseenProduct.length === 0 || choseenProduct.length === undefined) {
        // Show The Alarm
        alarmSearch.classList.add('show');
    } else { // Else
        // Hide The Alarm
        alarmSearch.classList.remove('show');
    }
    // Call Function Draw Products
    drawProducts(choseenProduct);
};


// Function Change Primary Color
(function changePrimary() {
    // Loop On All The [ primaryColorsBoxSpans ] The Spans (:
    primaryColorsBoxSpans.forEach(span => {

        // Every Click On Any Span
        span.addEventListener('click', function (event) {

            // Select All Active Spans, And Loop On All The Active Spans
            document.querySelectorAll('.primary-area .active').forEach(activeSpan => {
                // Remove Class Active From All The Spans
                activeSpan.classList.remove('active');
                // Add Class Active On Target Span
                event.target.classList.add('active');
                // Get The Data Set Color
                let eventTargteColor = event.target.dataset.primary;
                // Set The Color Into The LocalStorage
                localStorage.setItem('primaryColor', eventTargteColor);
                // Call Function Set Primary Color
                setPrimaryColor();
            });

        });
    });

})();
