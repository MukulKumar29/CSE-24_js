const products = [

{
id:1,
name:"Gaming Laptop",
price:65000,
img:"https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY200_.jpg"
},

{
id:2,
name:"Desktop Computer",
price:42000,
img:"https://m.media-amazon.com/images/I/41DjFnGQ1FL._AC_SY200_.jpg"
},

{
id:3,
name:"Boat Headphones",
price:1999,
img:"https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg"
},

{
id:4,
name:"Gaming Headset",
price:1499,
img:"https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg"
},

{
id:5,
name:"Footwear",
price:999,
img:"https://m.media-amazon.com/images/I/31EXkIBVKUL._AC_SY200_.jpg"
}

]

let cart = JSON.parse(localStorage.getItem("cart")) || []

const productContainer = document.getElementById("products")
const cartCount = document.getElementById("cart-count")

cartCount.innerText = cart.length


function showProducts(){

products.forEach(product =>{

const div = document.createElement("div")
div.className="product"

div.innerHTML=`

<img src="${product.img}" onclick="openProduct(${product.id})">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

`

productContainer.appendChild(div)

})

}

showProducts()


function addToCart(id){

const item = products.find(p=>p.id===id)

cart.push(item)

localStorage.setItem("cart",JSON.stringify(cart))

cartCount.innerText = cart.length

alert("Product Added to Cart")

}


function openProduct(id){

localStorage.setItem("productId",id)

window.location.href="product.html"

}