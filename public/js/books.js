fetch("/api/books")
  .then(res => res.json())
  .then(books => {
    const container = document.getElementById("booksContainer");

    books.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";

      card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <p class="book-desc">${book.description}</p>
        <h3>${book.title}</h3>
        <p class="price">₹${book.price}</p>

        <button onclick="addToCart(&quot;${book.title}&quot;, ${book.price}, this)">
    Add to Cart
  </button>

        <a href="/book.html?id=${book._id}" class="view-details">
          View Details
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading books:", err));
