const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

fetch(`/api/books/${bookId}`)
  .then(res => res.json())
  .then(book => {
    document.getElementById("bookImage").src = book.image;
    document.getElementById("bookTitle").innerText = book.title;
    document.getElementById("bookDescription").innerText = book.description;
    document.getElementById("bookPrice").innerText = "₹" + book.price;

    window.currentBook = book; 
  })
  .catch(err => console.error("Error loading book:", err));

function addToCartFromDetails(btn) {
  addToCart(currentBook.title, currentBook.price,btn);
}
