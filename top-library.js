let myLibrary = [];
const bookContainer = document.getElementById("books-container");
const bookForm = document.getElementById("book-form");
const bookFormBtn = document.getElementById("book-form-btn");

bookForm.style.display = "none";

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if (this.read) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function addBook(book) {
    myLibrary.push(book);
}

function displayBook(book, index) {
    
    let bookIndex = index;
    
    let bookCard = document.createElement("div");
    let bookCardTitle = document.createElement("h2");
    let bookCardAuthor = document.createElement("p");
    let bookCardPages = document.createElement("p");
    let bookCardRead = document.createElement("button");
    let bookCardRemove = document.createElement("button");

    bookCard.classList.add("book-card");
    bookCardAuthor.classList.add("author");
    bookCardPages.classList.add("pages");
    bookCardRead.classList.add("read");
    bookCardRemove.classList.add("remove-book");

    bookCardTitle.innerText = book.title;
    bookCardAuthor.innerText = book.author;
    bookCardPages.innerText = book.numPages;
    bookCardRead.innerText = book.read;
    bookCardRemove.innerText = "Remove";

    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardAuthor);
    bookCard.appendChild(bookCardPages);
    bookCard.appendChild(bookCardRead);
    bookCard.appendChild(bookCardRemove);

    bookCard.setAttribute("book-index", bookIndex);

    bookCardRead.addEventListener("click", () => {
        book.toggleRead();
        showBooks();
    })
    
    bookCardRemove.addEventListener("click", () => {
        myLibrary.splice(bookIndex, 1);
        showBooks();
    });

    bookContainer.appendChild(bookCard);
}

function showBooks() {
    let bookIndex = 0;
    bookContainer.innerHTML = "";
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
    let newBookRead = document.getElementById("hasRead").checked;

    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    addBook(newBook);
    showBooks();

    event.preventDefault();
    bookForm.reset();

}

function showForm() {
    if (bookForm.style.display == "none") {
        bookForm.style.display = "block";
    }
}

bookForm.addEventListener("submit", submitBook);
bookFormBtn.addEventListener("click", showForm);