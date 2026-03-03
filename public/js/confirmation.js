document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".center");

  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (!container) {
    console.error("Center container not found");
    return;
  }

  if (!order || !order.cart || order.cart.length === 0) {
    container.innerHTML = "<h3>No order found</h3>";
    return;
  }

  let html = "<h2>Order Confirmed ✅</h2><ul>";

  order.cart.forEach(item => {
    html += `<li>${item.name} - ₹${item.price}</li>`;
  });

  html += `</ul><h3>Total: ₹${order.total}</h3>`;
  html += "<p>Thank you for shopping with us 🎉</p>";

  html += `
    <div class="confirm-actions">
      <a href="/books" class="btn">Continue Shopping</a>
      <a href="/" class="btn outline">Go to Home</a>
    </div>
  `;

  container.innerHTML = html;

  localStorage.removeItem("lastOrder");
});
