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

function displayBook(book, index) {
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

    bookCard.setAttribute("book-index", index);

    bookContainer.appendChild(bookCard);
}

function showBooks() {
    let bookIndex = 0;
    myLibrary.forEach(
        book => {
            displayBook(book, bookIndex);
            bookIndex++;
        }
    );
}

function submitBook(event) {
    
    let newBookTitle = document.getElementById("bookTitle").value;
    let newBookAuthor = document.getElementById("bookAuthor").value;
    let newBookPages = document.getElementById("bookPages").value;

    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages);

    bookContainer.innerHTML = "";
    
    addBook(newBook);
    showBooks();

    event.preventDefault();
    bookForm.reset();

}

bookForm.addEventListener("submit", submitBook);
