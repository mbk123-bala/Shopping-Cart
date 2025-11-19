// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 65000, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Headphones", price: 2000, img: "https://via.placeholder.com/200" },
  { id: 3, name: "Smartphone", price: 30000, img: "https://via.placeholder.com/200" },
  { id: 4, name: "Smartwatch", price: 5000, img: "https://via.placeholder.com/200" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

// Render products
products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Render cart
function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `Total: ₹${total}`;
}
