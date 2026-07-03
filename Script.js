

const products = [
 {
   category: "men",
   name: "T-Shirt",
   price: 999,
   rating: 4.5,
   image: "products-images/Tshirt.png"
 },
 {
   category: "men",
   name: "T-Shirt",
   price: 1299,
   rating: 4.2,
   image: "products-images/2.png"
 },
 {
   category: "men",
   name: "T-Shirt & Lower",
   price: 1299,
   rating: 4.2,
   image: "products-images/3.png"
 },
 {
   category: "men",
   name: "T-Shirt & Lower",
   price: 1299,
   rating: 4.2,
   image: "products-images/3.png"
 }

 
];

const container = document.getElementById("product-container");

products.forEach((product)=>{
   container.innerHTML += `
      <div>
         <img src="${product.image}" width="200">
         <h3>${product.name}</h3>
         <p>⭐ ${product.rating}</p>
         <p>₹${product.price}</p>
      </div>
   `;
});
