let products = [];
function initialStorage(){
    products = [];
    let product1 = {    
        id: 1,
        Image:"asset/img/Hummingbird.png",
        title:"name 4",
        price:"20",
        model: "Chocolate",
        discount: "5"
    }
    let product2 = {
        id: 2,
        Image:"asset/img/No Bake Cherry + Choc Mousse Cups.png",
        title:"name 3",
        price:"30",
        model: "Choc",
        discount: "10"
    }
    let product3 = {
        id: 3,
        Image:"asset/img/Hummingbird.png",
        title:"name 2",
        price:"20",
        model: "chocolate",
        discount: "10"
    }
    let product4 = {
        id: 4,
        Image:"asset/img/Hummingbird.png",
        title:"name 1",
        price:"20",
        model: "Chocolate",
        discount: "10"
    }
    
    
    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    
    localStorage.setItem("products",JSON.stringify(products));

}

$(document).ready(function(){
    let localSProducts = localStorage.getItem("products");  //products array will be fulled from local storage

    if(localSProducts){         //if LS. is full
        products = JSON.parse(localSProducts);      //send data from LS to products array, which will be show in main page
    }else{
        initialStorage();     //make products array - read data from LS
        localSProducts = localStorage.getItem("products");  //send data to LS
        products = JSON.parse(localSProducts)
    }
})