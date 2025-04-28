const products= [
    {
        id : 1,
        name : "Men's Jacket",
        category : 'clothing',
        desc : "Puma Men Ferrari Black Fleece Jacket",
        rate : 3.5,
        price : 2500,
        stoke : 5,
        image : "/image/clothing_1.jpg",
        arriveDate : "2025-01-01"
    },
    {
        id : 2,
        name : "Women's Jacket",
        category : 'clothing',
        desc : "Reebok Knit Rib Women Black Jacket",
        rate : 4.5,
        price : 2000,
        stoke : 5,
        image : "/image/clothing_2.jpg",
        arriveDate : "2025-01-02"
    },
    {
        id : 3,
        name : "Girls Dress",
        category : 'clothing',
        desc : "Disney Kids Girls Disney girl pink pooh top Kidswear",
        rate : 3.5,
        price : 1500,
        stoke : 5,
        image : "/image/clothing_3.jpg",
        arriveDate : "2025-01-02"
    },
    {
        id : 4,
        name : "Jeans",
        category : 'clothing',
        desc : "Gini and Jony Boys Karnel Jeans",
        rate : 3.5,
        price : 1000,
        stoke : 1,
        image : "/image/clothing_4.jpg",
        arriveDate : "2025-01-02"
    },
    {
        id : 5,
        name : "Dress",
        category : 'clothing',
        desc : "Tonga Women Green Dress",
        rate : 2.5,
        price : 10000,
        stoke : 5,
        image : "/image/clothing_5.jpg",
        arriveDate : "2025-01-02"
    },
    {
        id : 6,
        name : "Dress",
        category : 'clothing',
        desc : "United Colors of Benetton Girls Printed Navy Blue Dress",
        rate : 2.5,
        price : 10000,
        stoke : 5,
        image : "/image/clothing_6.jpg",
        arriveDate : "2025-01-04"
    },
    {
        id : 7,
        name : "Trouser",
        category : 'clothing',
        desc : "Scullers Men Scul Brown Trousers",
        rate : 2.5,
        price : 3000,
        stoke : 5,
        image : "/image/clothing_7.jpg",
        arriveDate : "2025-01-05"
    }

]
const cart = [];
const fav = [];

$(document).ready(function(){
$("#cart-count").text(cart.length);
$("table").hide();
loadProducts(products)


$(".menu").on('click', 'a', function(e){
   // e.preventDefault();
    if($(this).text() == "Home"){
        $(".banner").show();
        $(".new-arrival").show();
        $(".all-items").removeClass("d-none");
    $(".all-items").addClass("d-flex");
        $("table").hide();
        $(".products h1").text("FOR YOU");
        loadProducts(products);
    } else{
        const filtered = products.filter((element) => element.category.trim().toLowerCase() === $(this).text().trim().toLowerCase());
        console.log(filtered);
        
        $(".banner").hide();
        $(".new-arrival").hide();
        $(".all-items").removeClass("d-none");
        $(".all-items").addClass("d-flex");
        $("table").hide();
        $(".products h1").text($(this).text());
        loadProducts(filtered);
    }
    
    
    
})

$('.search').on('click','button', function(){
   const key = $(this).prev().val();
    const filtered = products.filter((element) => element.name.trim().toLowerCase().includes(key.trim().toLowerCase()));
    $(".banner").hide();
    $(".new-arrival").hide();
    $(".all-items").removeClass("d-none");
    $(".all-items").addClass("d-flex");
    $("table").hide();
    $(".products h1").text("Results for " + key);
    if(filtered.length != 0){
        loadProducts(filtered);
    } else {
$('.all-items').html('<h1 class="text-center">No items found</h1>');
$(this).prev().val('');
    }
  

});

    $(".all-items").on('click','.to-cart',function(){
let itemid = $(this).parent().parent().find("h4").text().split("-")[1];

let cartItem = products.find(item => item.id == itemid);
if(cartItem.stoke == 0 ){
    alert("This item is out of stock");
    return;
}
if(cart.find(item => item.id == cartItem.id)){
    if(cart.find(item => item.id == cartItem.id).qty >= cartItem.stoke){
        alert("The quantity you entered is not available in stock");
        $(this).parent().prev().text('out of stoke');
        $(this).parent().prev().css('color', 'red');
        return;
    }
    cart[cart.indexOf(cartItem)].qty += 1;
} else{
    cartItem.qty = 1;
    cart.push(cartItem);
}

$("#cart-count").text(cart.length); 

    });

    $(".all-items").on('click', '.to-fav',function(){
        let itemid = $(this).parent().parent().find("h4").text().split("-")[1];
let favItem = products.find(item => item.id == itemid);
if(fav.find(item => item.id == favItem.id)){
    alert("This item is already in your favorite list");
} else{

    fav.push(favItem);
    alert("This item is added to your favorite list");
}
$('#fav-count').text(fav.length);
// console.log(fav);

    });
$("#cart").click(function(){
    console.log(cart);

    $(".banner").hide();
    $(".new-arrival").hide();
    $(".all-items").removeClass("d-flex");
    $(".all-items").addClass("d-none");
    $("table").show();
    $(".products h1").text("Cart Items");
    $('html, body').animate({
        scrollTop: $('table').offset().top - 200
      }, 100);
   loadCart();
    
})

$('#fav').click(function(){
    $(".banner").hide();
    $(".new-arrival").hide();
    $(".all-items").removeClass("d-none");
    $(".all-items").addClass("d-flex");
    $("table").hide();
    $(".products h1").text("Favorite Items");
    $('html, body').animate({
        scrollTop: $('.all-items').offset().top - 200
      }, 100);
    if(fav.length != 0){
        loadProducts(fav);
    } else{
        $('.all-items').html('<h1 class="text-center">No items found</h1>');
    }

})

$('table').on('change', '#qty', function(){
    let qty = parseInt($(this).val());
    let id = parseInt($(this).parent().siblings('th').text());
    const item = cart.find(item => item.id == id);
    if(qty > item.stoke){
        //$(this).parent().innerHTML += `<p style="color:red">out of stoke</p>`;
       alert("The quantity you entered is not available in stock");
        $(this).val(item.qty);
        return;
    }
    

    let price = $(this).parent().prev().text();
    let total = qty * price;
    $(this).parent().next().text(total);
  
    cart.find(item => item.id == id).qty = qty;
    //console.log(cart.find(item => item.id == id));
    
    //console.log(total);
    let totalPrice = 0;
    $('tbody tr').each(function(){
        totalPrice += parseInt($(this).find('td:last').text());
    });
    //console.log(totalPrice);
    $('#total').text(totalPrice);
    

    
});


$('table').on('click', '#remove', function(){
let itemId = $(this).parent().parent().parent().parent().find('th').text();
cart.splice(cart.indexOf(cart.find(item => item.id == itemId)), 1);
$("#cart-count").text(cart.length); 
loadCart();
//console.log(itemId);


})


let paymentMethod = '';

$('.payment').on('click', 'li' , function(){
paymentMethod = $(this).attr('id');
$(this).addClass('active').siblings().removeClass('active');
//console.log(paymentMethod);
});

$('.checkout').click(function(){
    if(cart.length == 0){
        alert("Your cart is empty");
        return;
    }
    if(paymentMethod == ''){
        alert("Please select a payment method");
        return;
    }
    if(confirm("Are you sure you want to checkout?")){
        alert("Your order has been placed successfully. Thank you for shopping with us.");
        cart.forEach(element => {
            products.find(item => item.id == element.id).stoke -= element.qty;
        })
        cart.splice(0, cart.length);
        $("#cart-count").text(cart.length); 
        $(`#${paymentMethod}`).removeClass('active');
        loadCart();
        paymentMethod = '';
    }



})
  });


  function loadProducts(itemsToLoad){
    document.querySelector(".all-items").innerHTML = ""; 
itemsToLoad.forEach(element => {
    document.querySelector(".all-items").innerHTML += `  <div class="one-item">
                    <img src=".${element.image}" alt="" height="300px">
                    <h4>${element.name}-${element.id}</h4>
                    <p id="desc">${element.desc}</p>
                    <p id="price">price:etb${element.price}</p>
                    <span id="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    (${element.rate}/5)</span>
                   
                     ${element.stoke > 0 
    ? '<p id="stoke">in stoke</p>' 
    : '<p id="stoke" style="color:red">out of stoke</p>'
  }
                   <div class="d-flex flex-column gap-2">
                    <button class="to-cart">Add to Cart</button>
                    <button class="to-fav">Favorite</button>
                   </div>
                </div>`
});
    
  }
  
  function loadCart(){
   let totalPrice = 0;
document.querySelector('tbody').innerHTML = '';
    cart.forEach(element => {
        document.querySelector('tbody').innerHTML += `
           <tr class="cart-row">
                        <th>${element.id}</th>
                        <td><div class="d-flex gap-3 align-items-center">
                            <img src=".${element.image}" alt="">
                           <div> <h4>${element.name}</h4>
                            <p>${element.desc}</p>
            <span id="remove"><i class="fa-solid fa-trash"></i></span>
            </div>
                        </div></td>
                        <td>${element.price}</td>
                        <td><input type="number" name="" min="1" value="${element.qty}" id="qty" width="35"></td>
                        <td>${element.price * element.qty}</td>
                    </tr>
        
        `
       totalPrice += (element.price * element.qty);

    });
    $('#total').text(totalPrice);
  }