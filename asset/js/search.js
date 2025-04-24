$(document).ready(function () {
    //search into products
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
        $("#productsMain").append(phtml);   //main page
    }
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
                $("#productsMain").html("")
                for (const item of foundedProduct) {   //search into foundedProducts not all the products
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
                    $("#productsMain").append(phtml);
                }
            }
            else {
                $("#productsMain").html("Nothing founded!");
                $("#suggestedProductsInner").removeClass("show-suggest-bar");

            }
        } else {   //if nothing is being searched, clean the main page and add all the items
            $("#productsMain").html("")
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
                $("#productsMain").append(phtml);
                $("#suggestedProductsInner").removeClass("show-suggest-bar");

            }
        }
    })

});

////////////////////////////////////////////////////////////////


