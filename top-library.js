let myLibrary = [];
const bookContainer = document.getElementById("books-container");
const bookForm = document.getElementById("book-form");

function Book(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
}

function addBook(book) {
    myLibrary.push(book);
}

function showBooks() {
    myLibrary.forEach(
        book => {
            let bookCard = document.createElement("div");
            let bookCardTitle = document.createElement("h2");
            let bookCardAuthor = document.createElement("p");
            let bookCardPages = document.createElement("p");

            bookCard.classList.add("book-card");
            bookCardAuthor.classList.add("author");
            bookCardPages.classList.add("pages");

            bookCardTitle.innerText = book.title;
            bookCardAuthor.innerText = book.author;
            bookCardPages.innerText = book.numPages;

            bookCard.appendChild(bookCardTitle);
            bookCard.appendChild(bookCardAuthor);
            bookCard.appendChild(bookCardPages);

            bookContainer.appendChild(bookCard);
        }
    );
}

function submitBook(event) {
    
    let newBookTitle = document.getElementById("bookTitle").value;
    let newBookAuthor = document.getElementById("bookAuthor").value;
    let newBookPages = document.getElementById("bookPages").value;

    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages);
    
    addBook(newBook);

    event.preventDefault();
    bookForm.reset();

}

bookForm.addEventListener("submit", submitBook);
