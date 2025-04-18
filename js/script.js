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
        stoke : 5,
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
const cart = [{no:"cart"}];

$(document).ready(function(){

$("#cart-count").text(cart.length);

  });


  function loadProducts(){

    
  }