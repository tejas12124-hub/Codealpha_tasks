function addToCart(name, price, btn) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  if (btn) {
    btn.innerText = "Added ✓";
    btn.disabled = true;
  }

  console.log("CART:", cart);
}
