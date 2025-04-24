$(document).ready(function(){
    let emptyCart;
    let localBasket = localStorage.getItem("place");



    if (localBasket) {
        cart = JSON.parse(localBasket);

        for (let cartItem of cart) {
            var html = '<div class="cart-container cart-container-res" data-id= "' + cartItem.id +'">';
            html+= '<div class="cart-ex-img-container">';
            html+= '<img src="' + cartItem.image +'" alt="" class="cart-ex-img">';
            html+= '</div>';
            html+= '<div class="cart-item-desc">';
            html+= '<h5 class="cart-item-title">Title: ' + cartItem.title +'</h5>';
            html+= '<span class="cart-item-model">Flavor: ' + cartItem.model +'</span>';
            html+= '</div>';
            // html+= '<div class="cart-item-quantity-container">';
            // // html+= '<span class="cart-item-quantity">Quantity: ' + cartItem.count +'</span>';
            // html+= '</div>';
            html+= '<div class="cart-item-price-container">';
            html+= '<span class="cart-item-price">Price: '+ (cartItem.price - cartItem.discount) +' $</span>';
            html+= '</div>';
            html+= '<div class="cart-item-btn-container">';

            html += '<div class="cart-counting">';
            html += '<a href="#" class="dec-btn">-</a>';
            html += '<input style="border:none" class="cart-input" value="'+ cartItem.count +'" disabled="disabled">';
            html += '<a href="#" class="inc-btn">+</a>';
            html += '</div>';
            // html+=  '<a type="button" class="btn-close cart-close-btn" aria-label="Close"></a>';
            // html+= '<i class="fa fa-times" aria-hidden="true"></i>';
            html+= '</div>';
            html+= '</div>';
            // html+= '<div class="cart-item-price-total" id="cart-total">';
            // html+= '<span class="cart-item-price">Total: ' + cartItem.totalPrice +'</span>';
            // html+= '</div>';

            $("#mainContainer").append(html);
            // $("#cart-totalP").html( ((cartItem.price - cartItem.discount) * cartItem.count));
            

        }
        singleCartTotal();
    
    }
     $("#mainContainer").html(emptyCart);
    // $("#mainContainer").html("");    
    
    if(cart.length <= 0){
     emptyCart = '<div class= "single-cart-no-item"><span class= "single-cart-no-item-title">Your cart is empty!</span>';
     emptyCart += '<span class= "single-cart-no-item-text">Looks like you have not made any choice yet</span>';
     emptyCart += '<a class="single-cart-home-link" href="home.html">HOME</a>';
     emptyCart += '</div>';
     $("#mainContainer").html(emptyCart);
    }



});


function singleCartTotal(item){ 
    let totalPrice =  0;
    let totalDiscount = 0;
    let totalCount = 0;

    for (const item of cart) {
        totalPrice += ((item.price - item.discount) * item.count);
        totalCount += item.count;
        totalDiscount = totalDiscount + (item.discount * item.count);
    
    }
    $("#cart-s-count").html(totalCount);
    $("#cart-s-discount").html(totalDiscount);
    $("#cart-totalP").html(totalPrice);
};


$(document).on("click", ".inc-btn", function(e){
    e.preventDefault();
    let btn = this;
    let id = $(btn).closest(".cart-container").data("id");
    let cartItem = cart.find(x=> x.id == id)  
   
    if (cartItem){
        cartItem.count += 1; 
    }
    
    });
$(document).on("click", ".dec-btn", function(e){
    e.preventDefault();
    let btn = this;
    let id = $(btn).closest(".cart-container").data("id");
    let cartItem = cart.find(x=> x.id == id)   

    if (cartItem){             
         if(cartItem.count <= 1){
            let index = cart.indexOf(cartItem); 
            cart.splice(index,1)   
                }else{
                   cartItem.count -= 1;    
                }
             }
    });
    