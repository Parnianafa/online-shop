let products = [];  //the products page, what we wanna show
let cart = []; 
let product1 = {
    id: 1, 
    Image:"asset/img/Hummingbird.png",
    title:"Chocolate cake with three layers three layers",
    price:"20",
    model: "Chocolate",
    discount: "5"
}
let product2 = {
    id: 2,
    Image:"asset/img/No Bake Cherry + Choc Mousse Cups.png",
    title:"Second cake",
    price:"30",
    model: "Choc",
    discount: "10"
}
let product3 = {
    id: 3,
    Image:"asset/img/Hummingbird.png",
    title:"Chocolate",
    price:"20",
    model: "chocolate",
    discount: "10"
}
let product4 = {
    id: 4,
    Image:"asset/img/Hummingbird.png",
    title:"chocolate cake with three layers",
    price:"20",
    model: "Chocolate",
    discount: "10"
}
let product5 = {
    id: 5,
    Image:"asset/img/No Bake Cherry + Choc Mousse Cups.png",
    title:"Second cake",
    price:"30",
    model: "Choc",
    discount: "10"
}
let product6 = {
    id: 6,
    Image:"asset/img/Hummingbird.png",
    title:"Coffee cake with",
    price:"20",
    model: "chocolate",
    discount: "10"
}
let product7 = {
    id: 7,
    Image:"asset/img/No Bake Cherry + Choc Mousse Cups.png",
    title:"crispy browny",
    price:"30",
    model: "Choc",
    discount: "10"
}
let product8 = {
    id: 8,
    Image:"asset/img/Hummingbird.png",
    title:"first cake",
    price:"20",
    model: "chocolate",
    discount: "10"
}
let product9 = {
    id: 9,
    Image:"asset/img/Hummingbird.png",
    title:"first cake",
    price:"20",
    model: "chocolate",
    discount: "10"
}
let product10 = {
    id: 10,
    Image:"asset/img/Hummingbird.png",
    title:"first cake",
    price:"20",
    model: "chocolate",
    discount: "10"
}

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8); 
products.push(product9);
products.push(product10);


$(document).ready(function(){
 

    for (let item of products) {
        var html = '<div class="product-box" data-id= '+ item.id +'>';
            html += '<div class="product-photo">';
            html += '<img src="'+ item.Image +'" class="product-photo-img" alt="">';
            html += '</div>';
            html += '<div class="product-explanation">';
            html += '<span class="product-explanation-title product-title">Name: <span class="inner-value">'+ summaryString (item.title, 12) +'</span></span>';
            html += '<span class="product-explanation-title">Flavor: <span class="inner-value">'+ item.model +'</span></span>';
            html += '<del class="product-explanation-title">Old Price: <span class="inner-value">'+ item.price +' $</span></del>';
            html += '<span class="product-explanation-title">Price: <span class="inner-value">'+ (item.price - item.discount) +' $</span></span>';
            html += '</div>';
            html += '<div class="product-bottom-box">';
            html += '<button class="product-bottom-more" data-bs-toggle="modal" data-bs-target="#exampleModal">More To Features</button>';
            html += '<button class="product-bottom-cart">Add To Cart</button>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        
            $('#contentOfProducts').append(html);
     }
  /////////////////////////////////////////////////////////////////SEARCH   
     $("#searchBtn").click(function(){
        let searchVal = $("#searchValue").val();  //get the value of search box
  
        if(searchVal && searchVal.length > 0){   //if the user has searched s.th, 
            let foundedProduct = products.find(x=>x.title.includes(searchVal));  //search if the searched value is the same with our Products
  
            if(foundedProduct){  
                
            }else{
                alert("not founded");

            }
        }
  
    })
        //search into suggested menu
        $("#searchValue").on("input", function () {       //check the search input
          let searchVal = $("#searchValue").val();  
  
          if(searchVal && searchVal.length > 0){ 
              let foundedProduct = products.filter(x=>x.title.includes(searchVal));
              $("#suggestedProducts").addClass("show-suggest-bar");   //show suggest menu
              
              if(foundedProduct  && foundedProduct.length > 0){  
                  //show the product's name and image in suggested menu
                  $("#suggestedProductsInner").html("");
                  for (const item of foundedProduct) {
                      let html = '<div class="col-12 product-s d-flex">';
                      html += '<div class="product-s-img ">';
                      html += '<img src= "' + item.Image + '"height="30" width="30">';
                      html += '</div>';
                      html += '<div class="product-s-title">';
                      html += '<span>' + item.title + '</span>';
                      html += '</div>';
                      html += '</div >'; 
  
                     $("#suggestedProductsInner").append(html);   //suggestion menu
  
                  }
              }else{
                  $('#suggestedProductsInner').html("not founded");
              }
          }else{
              $("#suggestedProductsInner").removeClass("show-suggest-bar");
          }
      })

       //when clicked on search button
    $("#searchBtn").click(function () {
      let searchValue = $("#searchValue").val();
      if (searchValue && searchValue.length > 0) {
          let foundedProduct = products.filter(x => x.title.includes(searchValue));
          $("#suggestedProducts").addClass("show-suggest-bar");

          if (foundedProduct && foundedProduct.length > 0) {
              $("#innerContent").html("")
              for (const item of foundedProduct) {   //search into foundedProducts not all the products
                var html = '<div class="product-box" data-id= '+ item.id +'>';
                html += '<div class="product-photo">';
                html += '<img src="'+ item.Image +'" class="product-photo-img" alt="">';
                html += '</div>';
                html += '<div class="product-explanation">';
                html += '<span class="product-explanation-title product-title">Name: <span class="inner-value">'+ summaryString (item.title, 12) +'</span></span>';
                html += '<span class="product-explanation-title">Flavor: <span class="inner-value">'+ item.model +'</span></span>';
                html += '<del class="product-explanation-title">Old Price: <span class="inner-value">'+ item.price +' $</span></del>';
                html += '<span class="product-explanation-title">Price: <span class="inner-value">'+ (item.price - item.discount) +' $</span></span>';
                html += '</div>';
                html += '<div class="product-bottom-box">';
                html += '<button class="product-bottom-more" data-bs-toggle="modal" data-bs-target="#exampleModal">More To Features</button>';
                html += '<button class="product-bottom-cart">Add To Cart</button>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                
                  $(".product-box").addClass("product-box-hide");
                  $("#innerContent").append(html);
              }
          }
          else {
              $("#innerContent").html("Nothing founded!");
              $("#suggestedProductsInner").removeClass("show-suggest-bar");

          }
      } else {   //if nothing is being searched, clean the main page and add all the items
          $("#innerContent").html("")
          for (const item of products) {
              let phtml = '<div class="col-3">';
              phtml += '<div class="product">';
              phtml += '<div class="img">';
              phtml += '<img height="200" width="100%" src="' + item.Image + '" >';
              phtml += '</div>';
              phtml += '<div class="title">';
              phtml += '<span>' + item.title + '</span>';
              phtml += '</div>';
              phtml += '</div>';
              phtml += '</div>';
              $("#innerContent").append(phtml);
              $("#suggestedProductsInner").removeClass("show-suggest-bar");

          }
      }
  })
///////////////////////////////////////////////////////////////////////////////////
    $(".product-bottom-cart").click(function(){
        let cartBtn = this;          //which has been clicked? this one
        let id = $(cartBtn).closest('.product-box').data('id');

        let cartItem;
        let itemFounded = false;
        if (cart && cart.length > 0){   //if cart is full,
            cartItem = cart.find(x=> x.id == id)   //find the product, which is already in our basket - micharkhe tooye cart
            if (cartItem){            //if item is founded
                itemFounded = true;
                cartItem.count += 1; 
            }
        }

        if(!itemFounded){            //if itemFounded is null , add whatever which is clicked

            let currentProduct = products.find(x=>x.id == id);  //find the product, which has been clicked in product page
            cartItem = {             //Items which will added to the cart
                id : currentProduct.id,
                title : currentProduct.title,
                model : currentProduct.model,
                price : currentProduct.price,
                image : currentProduct.Image,
                discount : currentProduct.discount,
                count : 1                //first is ONE
            }
            cart.push(cartItem);        //push to cart  
        }
        initialCart();                 //empty the cart
    });


    $(document).on("click", ".inc-btn", function(e){
        e.preventDefault();
        let btn = this;
        let id = $(btn).closest(".cart-box").data("id");
        increase(id);
        });

    $(document).on("click", ".dec-btn", function(e){
        e.preventDefault();
        let btn = this;
        let id = $(btn).closest(".cart-box").data("id");
        decrease(id);
        });

    
     ///////////////////// ADD To Modal /////////////////   
   $(".product-bottom-more").click(function showDataForModal(){             
        let addModal ;
        for (const item of products) {
            
            let modalBtn = this; 
            let id = $(modalBtn).closest('.product-box').data('id');
            addModal = products.find(x=> x.id == id) ;

            $("#productImg").attr("src", addModal.Image);
            $("#productTitle").html(addModal.title);
            $("#productDiscount").html(addModal.price - addModal.discount);
            $("#productPrice").html(addModal.price);
          
        }
           $("#exampleModal").modal("toggle");

  });

  $(".content-btn-cart").click(function(e){
    e.preventDefault();
    $(".cart").addClass("cart-show") 
})
$(".btn-close").click(function(e){
    e.preventDefault();
    $(".cart").removeClass("cart-show")
})
  

});

function increase(id){              //INCREASE BUTTON
  let cartItem = cart.find(x=> x.id == id)   //find the product, which is already in our basket - micharkhe tooye cart
       if (cartItem){              //if item is founded
             cartItem.count += 1; 
       }
        initialCart();
}

function decrease(id){              //DECREASE BUTTON
    let cartItem = cart.find(x=> x.id == id)   //find the product, which is already in our basket - micharkhe tooye cart
         if (cartItem){              //if item is founded
            if(cartItem.count <= 1){  //if count < 1 , 
                let index = cart.indexOf(cartItem);  //get index of cartItem 
                cart.splice(index,1)   //delete that item, which its count is 0 
            }else{
               cartItem.count -= 1;     //if item.count is not 1 yet, decrease it
            }
         }
          initialCart();
}


function initialCart(item){           //reset cart
    $("#innerCart").html("");             //empty the cart
    for (let item of cart) {         //search into cart[]
        addItemToCart(item);         //add item to cart
    }
    let totalCount = 0;             //count of items in cart
    let totalPrice =  0;
    let totalDiscount = 0;

    for (const item of cart) {
        totalPrice += ((item.price - item.discount) * item.count);
        totalCount += item.count;
        totalDiscount = totalDiscount + (item.discount * item.count);
    }
   
    $("#cart-total").html(totalPrice);
    $("#cart-count").html(totalCount);
    $("#cart-discount").html(totalDiscount);
    localStorage.setItem("place",JSON.stringify(cart));

}

function addItemToCart (cartItem){   //this part will be added to cart, by every single Click on a specific product 
    var html = '<div class="cart-box" data-id="' + cartItem.id + '">';
        html += '<div class="cart-info">';
        html += '<span>Name: '+ summaryString (cartItem.title, 19) +'</span>';
        html += '<span>Model: '+ cartItem.model +'</span>';
        html += '<span>Price: '+ (cartItem.price - cartItem.discount) +' $</span>';
        html += '</div>';
        html += '<div class="cart-img-content">';
        html += '<img class="cart-img" src="' + cartItem.image + '" alt="">';
        html += '<div class="cart-counting">';
        html += '<a href="#" class="dec-btn">-</a>';
        html += '<input style="border:none" class="cart-input" value="'+ cartItem.count +'" disabled="disabled">';
        html += '<a href="#" class="inc-btn">+</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        $("#innerCart").append(html);
}

function summaryString (str, lng){   //get the string and it's length
    let finalStr = "";
    const currentLng = str.length;
    if(currentLng > lng) {
        finalStr += str.substr(0, lng) + "...";
    }else{
        finalStr = str;
    }
    return finalStr;

}

