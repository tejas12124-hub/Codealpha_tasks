document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".center");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerText = "Your cart is empty";
    return;
  }

  let total = 0;
  let html = "<ul class='cart-list'>";

  cart.forEach((item, index) => {
    total += item.price;
    html += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </li>
    `;
  });

  html += `
    </ul>
    <div class="cart-summary">
      <h3>Total: ₹${total}</h3>
      <button class="checkout-btn" onclick="checkout()">Checkout</button>
    </div>
  `;

  container.innerHTML = html;
});

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function checkout() {
  const userId = localStorage.getItem("userId");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!userId) {
    alert("Please login to place order");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, cart, total })
  })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        alert(data.message);

        localStorage.setItem(
          "lastOrder",
          JSON.stringify({ cart, total })
        );

        localStorage.removeItem("cart");

        window.location.href = "/confirmation";
      }
    });
}
